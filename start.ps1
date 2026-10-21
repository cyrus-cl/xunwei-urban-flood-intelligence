param([int]$Port = 8767, [switch]$NoBrowser)
$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot
$url = "http://127.0.0.1:$Port"
try {
  $health = Invoke-RestMethod -Uri "$url/api/health" -TimeoutSec 2
  if ($health.project -eq 'rain-here' -and $health.version -eq '2026.10.17-v7') {
    if (-not $NoBrowser) { Start-Process $url }
    exit 0
  }
} catch { }
$node = $env:CODEX_PRIMARY_RUNTIME_NODE
if (-not $node -or -not (Test-Path -LiteralPath $node)) {
  $command = Get-Command node -ErrorAction SilentlyContinue
  if ($command) { $node = $command.Source } else { $node = $null }
}
if (-not $NoBrowser) {
  # Open only after the selected server is accepting local requests.
  Start-Job -ArgumentList $url -ScriptBlock {
    param($targetUrl)
    for ($attempt = 0; $attempt -lt 60; $attempt++) {
      try {
        $ready = Invoke-RestMethod -Uri "$targetUrl/api/health" -TimeoutSec 1
        if ($ready.project -eq 'rain-here') { Start-Process $targetUrl; return }
      } catch { }
      Start-Sleep -Milliseconds 250
    }
  } | Out-Null
}
if (-not $node) { throw 'Install Node.js 18 or newer to open this project.' }
& $node (Join-Path $PSScriptRoot 'static_server.mjs') --port $Port
exit $LASTEXITCODE
