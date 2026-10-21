import test from 'node:test';
import assert from 'node:assert/strict';
import {
  createDecisionBrief,
  validateBriefInput,
  validateBriefOutput
} from '../services/deepseek-service.mjs';

const input = {
  place: '长春路附近',
  level: '行动',
  trend: '仍可能加剧',
  reasons: ['模型积水 13.0 cm', '未来 3 小时降雨 48.0 mm'],
  affected: {roads: ['长春路'], buildings: [], building_count: 18},
  actions: ['优先核查道路低点', '准备临时警示'],
  boundary: '积水为模型情景，非现场观测'
};

test('accepts the retrospective trend vocabulary used by historical replay', () => {
  const result = validateBriefInput({...input, trend: '时段内增强'});
  assert.equal(result.trend, '时段内增强');
});

test('rejects fields outside the grounded input schema', () => {
  assert.throws(() => validateBriefInput({...input, casualties: 3}), /字段/);
});

test('rejects generated numbers that are absent from input', () => {
  assert.throws(() => validateBriefOutput({
    summary: '预计水深 80 cm',
    actions: ['核查长春路'],
    caveat: '模型情景'
  }, input), /无依据数字/);
});

test('rejects invented places and unsupported certainty', () => {
  assert.throws(() => validateBriefOutput({
    summary: '中山路一定会发生积水',
    actions: ['核查中山路'],
    caveat: '模型情景'
  }, input), /地点|确定性/);
});

test('returns a deterministic local brief when no key is configured', async () => {
  const result = await createDecisionBrief(input, {apiKey: ''});
  assert.equal(result.mode, 'local');
  assert.match(result.summary, /长春路附近/);
  assert.deepEqual(result.actions, input.actions);
  assert.equal('apiKey' in result, false);
});

test('accepts a grounded JSON response from DeepSeek', async () => {
  const fetchImpl = async (url, options) => {
    assert.equal(url, 'https://api.deepseek.com/chat/completions');
    const body = JSON.parse(options.body);
    assert.equal(body.model, 'deepseek-chat');
    assert.deepEqual(body.response_format, {type: 'json_object'});
    assert.match(body.messages[0].content, /JSON/);
    assert.match(body.messages[1].content, /JSON/);
    return {
      ok: true,
      json: async () => ({choices: [{message: {content: JSON.stringify({
        summary: '长春路附近进入行动状态，未来 3 小时降雨 48.0 mm。',
        actions: ['优先核查长春路道路低点', '准备临时警示'],
        caveat: '积水为模型情景，非现场观测'
      })}}]})
    };
  };
  const result = await createDecisionBrief(input, {apiKey: 'unit', fetchImpl});

  assert.equal(result.mode, 'deepseek');
  assert.equal(result.actions.length, 2);
  assert.equal(JSON.stringify(result).includes('unit'), false);
});

test('falls back locally when generated JSON fails grounding checks', async () => {
  const fetchImpl = async () => ({
    ok: true,
    json: async () => ({choices: [{message: {content: JSON.stringify({
      summary: '预计水深 99 cm',
      actions: ['封闭未知道路'],
      caveat: '已经确认'
    })}}]})
  });
  const result = await createDecisionBrief(input, {apiKey: 'unit', fetchImpl});

  assert.equal(result.mode, 'local');
  assert.match(result.caveat, /模型情景/);
});
