const ramps = {
  depth: [[0,[25,45,77]],[5,[49,91,145]],[10,[76,129,177]],[30,[101,127,201]],[50,[152,87,158]],[100,[228,95,99]]],
  rain: [[0,[23,52,64]],[2,[71,147,190]],[5,[104,199,237]],[10,[101,127,201]],[20,[228,95,99]],[30,[217,154,88]]]
};

export function colour(value, kind = 'depth') {
  const stops = ramps[kind] ?? ramps.depth;
  const numeric = Math.max(0, Number(value) || 0);
  for (let index = 1; index < stops.length; index += 1) {
    if (numeric <= stops[index][0]) {
      const [fromValue, fromColour] = stops[index - 1];
      const [toValue, toColour] = stops[index];
      const progress = (numeric - fromValue) / (toValue - fromValue);
      return fromColour.map((channel, channelIndex) => Math.round(channel + (toColour[channelIndex] - channel) * progress));
    }
  }
  return [...stops.at(-1)[1]];
}

export function rampStops(kind = 'depth') {
  return (ramps[kind] ?? ramps.depth).map(([value, channels]) => [value, [...channels]]);
}
