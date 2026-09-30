# K7EEL Sounds

Companion extension for K7EEL Cursor.

## Features

- Restrained mechanical typing sounds in the editor
- Distinct Space, Enter and Backspace sounds
- Save cue
- Terminal command start, success and failure cues when shell integration is available
- Claude Code completion and notification sounds through official Claude Code hooks on macOS
- Master volume and individual feature toggles

## Claude Code setup on macOS

After installing the VSIX, open the Command Palette and run:

`K7EEL Sounds: Install Claude Code Hooks (macOS)`

This copies two small sound files to `~/.k7eel-sounds`, backs up an existing `~/.claude/settings.json` to `settings.json.k7eel-backup`, and adds `Stop` and `Notification` hooks. Restart Claude Code afterwards.

The hook installer does not modify project files.

## Notes

Cursor/VS Code does not expose raw integrated-terminal keystrokes to ordinary extensions, so mechanical per-key sounds apply to editor typing. Terminal command lifecycle sounds use VS Code shell integration instead.

## Settings

- `k7eelSounds.enabled`
- `k7eelSounds.volume`
- `k7eelSounds.typing.enabled`
- `k7eelSounds.typing.minimumIntervalMs`
- `k7eelSounds.save.enabled`
- `k7eelSounds.terminal.enabled`
