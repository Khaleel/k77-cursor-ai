const vscode = require('vscode');
const path = require('path');
const fs = require('fs');
const os = require('os');
const cp = require('child_process');

let enabled = true;
let lastKeyAt = 0;
let keyIndex = 0;

function cfg() { return vscode.workspace.getConfiguration('k7eelSounds'); }
function volume() { return Math.max(0, Math.min(1, cfg().get('volume', 0.22))); }
function soundPath(ctx, name) { return path.join(ctx.extensionPath, 'audio', name + '.wav'); }

function play(ctx, name, scale = 1) {
  if (!enabled || !cfg().get('enabled', true)) return;
  const file = soundPath(ctx, name);
  const vol = Math.max(0, Math.min(1, volume() * scale));
  try {
    let child;
    if (process.platform === 'darwin') child = cp.spawn('/usr/bin/afplay', ['-v', String(vol), file], {stdio:'ignore', detached:true});
    else if (process.platform === 'win32') child = cp.spawn('powershell.exe', ['-NoProfile','-WindowStyle','Hidden','-Command', `(New-Object Media.SoundPlayer '${file.replace(/'/g,"''")}').PlaySync()`], {stdio:'ignore', detached:true});
    else child = cp.spawn('sh', ['-c', `(command -v paplay >/dev/null && paplay "${file}" || command -v aplay >/dev/null && aplay -q "${file}")`], {stdio:'ignore', detached:true});
    child.unref();
  } catch (_) {}
}

function installClaudeHooks(ctx) {
  if (process.platform !== 'darwin') {
    vscode.window.showWarningMessage('K7EEL Claude hook installer is currently tuned for macOS.');
    return;
  }
  const home = os.homedir();
  const dir = path.join(home, '.k7eel-sounds');
  fs.mkdirSync(dir, {recursive:true});
  for (const n of ['claude-done.wav','claude-notify.wav']) fs.copyFileSync(path.join(ctx.extensionPath,'audio',n), path.join(dir,n));
  const player = path.join(dir, 'play.sh');
  fs.writeFileSync(player, '#!/bin/zsh\nname="${1:-claude-done}"\n/usr/bin/afplay -v 0.32 "$HOME/.k7eel-sounds/${name}.wav" >/dev/null 2>&1 &\n', {mode:0o755});

  const claudeDir = path.join(home, '.claude');
  const settings = path.join(claudeDir, 'settings.json');
  fs.mkdirSync(claudeDir, {recursive:true});
  let data = {};
  if (fs.existsSync(settings)) {
    const raw = fs.readFileSync(settings,'utf8');
    if (raw.trim()) data = JSON.parse(raw);
    fs.copyFileSync(settings, settings + '.k7eel-backup');
  }
  data.hooks = data.hooks || {};
  const add = (event, command) => {
    data.hooks[event] = Array.isArray(data.hooks[event]) ? data.hooks[event] : [];
    const signature = '.k7eel-sounds/play.sh';
    if (!data.hooks[event].some(group => JSON.stringify(group).includes(signature))) {
      data.hooks[event].push({ hooks: [{ type: 'command', command }] });
    }
  };
  add('Stop', '"$HOME/.k7eel-sounds/play.sh" claude-done');
  add('Notification', '"$HOME/.k7eel-sounds/play.sh" claude-notify');
  fs.writeFileSync(settings, JSON.stringify(data, null, 2) + '\n');
  vscode.window.showInformationMessage('K7EEL Claude sounds installed. Restart Claude Code to pick up the hooks.');
}

function activate(context) {
  enabled = cfg().get('enabled', true);

  context.subscriptions.push(vscode.commands.registerCommand('k7eelSounds.toggle', () => {
    enabled = !enabled;
    vscode.window.showInformationMessage(`K7EEL Sounds ${enabled ? 'on' : 'off'}`);
  }));
  context.subscriptions.push(vscode.commands.registerCommand('k7eelSounds.preview', () => play(context, 'claude-done', 1.4)));
  context.subscriptions.push(vscode.commands.registerCommand('k7eelSounds.installClaudeHooks', () => {
    try { installClaudeHooks(context); } catch (e) { vscode.window.showErrorMessage('K7EEL Claude hook install failed: ' + e.message); }
  }));

  context.subscriptions.push(vscode.workspace.onDidChangeTextDocument(e => {
    if (!cfg().get('typing.enabled', true) || !vscode.window.state.focused) return;
    if (!e.contentChanges.length || e.document.uri.scheme !== 'file') return;
    const now = Date.now();
    if (now - lastKeyAt < cfg().get('typing.minimumIntervalMs', 32)) return;
    lastKeyAt = now;
    const text = e.contentChanges[e.contentChanges.length - 1].text;
    let name;
    if (text.includes('\n')) name = 'enter';
    else if (text === '') name = 'backspace';
    else if (text === ' ') name = 'space';
    else { keyIndex = (keyIndex % 3) + 1; name = 'key-' + keyIndex; }
    play(context, name, name.startsWith('key-') ? 0.72 : 0.9);
  }));

  context.subscriptions.push(vscode.workspace.onDidSaveTextDocument(() => {
    if (cfg().get('save.enabled', true)) play(context, 'save', 0.75);
  }));

  if (vscode.window.onDidStartTerminalShellExecution) {
    context.subscriptions.push(vscode.window.onDidStartTerminalShellExecution(() => {
      if (cfg().get('terminal.enabled', true)) play(context, 'terminal-start', 0.6);
    }));
    context.subscriptions.push(vscode.window.onDidEndTerminalShellExecution(e => {
      if (!cfg().get('terminal.enabled', true)) return;
      if (e.exitCode === 0) play(context, 'success', 0.7);
      else if (typeof e.exitCode === 'number') play(context, 'error', 0.9);
    }));
  }
}

function deactivate() {}
module.exports = { activate, deactivate };
