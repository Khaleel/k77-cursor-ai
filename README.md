# K7EEL Cursor 🖥️

**A warm, charcoal coding experience for Cursor and Visual Studio Code.**

K7EEL Cursor combines a carefully tuned dark coding theme with an optional mechanical sound experience designed for developers who spend a lot of time inside their editor, terminal and AI coding tools.

![K7EEL Cursor Preview](small.png)

## ✨ What's included

This repository contains two extensions:

### 🎨 K7EEL Cursor

The main visual theme for Cursor and VS Code.

- 🌑 Warm charcoal dark interface
- 🟠 Restrained orange coding accents
- 🩷 Hot-pink AI accent
- 🟢 Brighter lime strings, success states and Git additions
- 🩵 Teal classes, types and structural syntax
- 🟡 Warm gold constants, numbers and properties
- 📁 Custom K7EEL file icons
- 🐘 Tuned PHP highlighting
- 🔷 Tuned TypeScript highlighting
- 🟨 Tuned JavaScript highlighting
- 🌐 Improved HTML and CSS highlighting
- 🐪 Perl support
- 💻 Terminal ANSI palette designed to match the theme
- 🤖 Designed with Claude Code and AI-assisted development in mind

### ⌨️ K7EEL Sounds

An optional companion extension that adds sound feedback to your development environment.

- ⌨️ Mechanical keyboard typing sounds
- ↩️ Dedicated Enter sound
- ⌫ Backspace/Delete feedback
- 💾 Save feedback
- 💻 Terminal command sounds
- ✅ Command success feedback
- ❌ Command failure feedback
- 🤖 Claude Code integration
- 🔔 Claude completion and notification sounds

K7EEL Sounds is completely optional. You can use the visual theme without installing the sound extension.

---

# 📦 Repository Structure

```text
k7-cursor-ai/
│
├── k7eel-cursor/               # K7EEL Cursor theme source
├── k7eel-sounds/               # K7EEL Sounds extension source
│
├── k7eel-cursor-0.1.0.vsix     # Installable visual theme
├── k7eel-sounds-0.1.0.vsix     # Installable sound extension
│
├── small.png                    # Theme preview
└── README.md
```

---

# 🚀 Installation

Both extensions are supplied as `.vsix` packages and can be installed directly into Cursor or Visual Studio Code.

## 🎨 1. Install K7EEL Cursor

Download:

```text
k7eel-cursor-0.1.0.vsix
```

Then in **Cursor** or **VS Code**:

1. Open **Extensions**
2. Click the `...` menu at the top of the Extensions panel
3. Select **Install from VSIX...**
4. Choose `k7eel-cursor-0.1.0.vsix`
5. Reload the editor if prompted

Then open the Command Palette:

```text
Cmd + Shift + P
```

Run:

```text
Preferences: Color Theme
```

Select:

```text
K7EEL Cursor
```

For the icons, run:

```text
Preferences: File Icon Theme
```

Select:

```text
K7EEL Icons
```

You're now running the full K7EEL visual theme. 🎨

---

# ⌨️ 2. Install K7EEL Sounds

Download:

```text
k7eel-sounds-0.1.0.vsix
```

Install it using the same process:

1. Open **Extensions**
2. Click `...`
3. Select **Install from VSIX...**
4. Choose `k7eel-sounds-0.1.0.vsix`
5. Reload Cursor / VS Code

K7EEL mechanical typing sounds should now be available.

## 🤖 Claude Code Sounds

K7EEL Sounds includes additional integration for Claude Code.

Open the Command Palette:

```text
Cmd + Shift + P
```

Run:

```text
K7EEL Sounds: Install Claude Code Hooks (macOS)
```

Restart Claude Code after installing the hooks.

This enables dedicated K7EEL audio feedback for supported Claude Code events.

---

# ⚙️ Recommended Settings

K7EEL Cursor deliberately does **not** bundle or redistribute fonts.

On macOS, **SF Mono** is an excellent fit for the theme if it is already installed.

**JetBrains Mono** is the recommended cross-platform fallback.

Add the following to your Cursor / VS Code `settings.json`:

```jsonc
{
  "window.commandCenter": true,

  "workbench.colorTheme": "K7EEL Cursor",
  "workbench.iconTheme": "k7eel-icons",

  "editor.accessibilitySupport": "off",
  "window.autoDetectColorScheme": false,
  "explorer.confirmDelete": false,

  "terminal.integrated.mouseWheelScrollSensitivity": 3,
  "terminal.integrated.gpuAcceleration": "off",

  "editor.fontFamily": "'SF Mono', 'JetBrains Mono', Menlo, Monaco, monospace",
  "editor.fontSize": 14,
  "editor.lineHeight": 23,
  "editor.fontLigatures": true,

  "terminal.integrated.fontFamily": "'SF Mono', 'JetBrains Mono', Menlo, Monaco, monospace",
  "terminal.integrated.fontSize": 13,
  "terminal.integrated.lineHeight": 1.3,

  "debug.console.fontFamily": "'SF Mono', 'JetBrains Mono', Menlo, Monaco, monospace",
  "debug.console.fontSize": 13,

  "editor.codeLensFontFamily": "'SF Mono', 'JetBrains Mono', Menlo, Monaco, monospace",
  "scm.inputFontFamily": "'SF Mono', 'JetBrains Mono', Menlo, Monaco, monospace"
}
```

---

# 🎨 K7EEL Palette

| Role | Colour |
|---|---|
| 🌑 Main Charcoal | `#1F1F1D` |
| ◼️ Structural Charcoal | `#252523` |
| 🤍 Warm Ivory | `#DAD7CF` |
| 🟠 K7EEL Orange | `#E27A59` |
| 🔥 Hot Orange | `#F08361` |
| 🩷 AI Pink | `#F06AA6` |
| 🟢 Lime | `#9FCB82` |
| 🌱 Bright Lime | `#B5D58D` |
| 🩵 Teal | `#82C4BE` |
| 🟡 Gold | `#E0B45C` |

The palette is intentionally warm and slightly muted. K7EEL avoids the extremely saturated colours found in many traditional dark themes while retaining enough contrast to make large PHP, TypeScript and JavaScript projects easy to scan.

---

# 🧑‍💻 Language Support

K7EEL Cursor is especially tuned for:

**PHP** 🐘  
Functions, WordPress development, variables, classes, constants and strings receive distinct but restrained highlighting.

**TypeScript / TSX** 🔷  
Clearer differentiation between functions, types, properties, variables, constants and JSX structures.

**JavaScript / JSX** 🟨  
Improved readability for modern JavaScript and React development.

**HTML** 🌐  
Tags, attributes and values have clearer visual separation.

**CSS / SCSS** 🎨  
Selectors, properties and values use the K7EEL orange, gold, teal and lime palette.

**Perl** 🐪  
Variables, functions, strings and language constructs are integrated into the same K7EEL syntax system.

---

# 🤖 Built for AI-Assisted Development

K7EEL was designed around a modern development workflow where the editor, terminal and AI agent often remain visible at the same time.

The dedicated:

```text
#F06AA6
```

hot-pink accent is reserved for AI-related visual identity where possible, while orange remains the primary K7EEL coding and interaction accent.

This helps distinguish **AI activity** from ordinary editor activity without turning the interface into a rainbow.

---

# 🔊 K7EEL Sounds

K7EEL Sounds is designed to complement the visual theme rather than dominate it.

The goal is subtle mechanical feedback:

```text
tick · tick · thock · click · clack
```

not an arcade or typewriter effect.

For long coding sessions, the sound level should remain low enough to provide tactile feedback without becoming distracting.

You can install **K7EEL Cursor without K7EEL Sounds** if you prefer a silent environment.

---

# 🛠️ Development

The source for each extension lives independently:

```text
k7eel-cursor/
k7eel-sounds/
```

This allows the visual theme and sound extension to be versioned and developed separately while remaining part of the K7EEL Cursor project.

Packaged releases are distributed as:

```text
k7eel-cursor-x.x.x.vsix
k7eel-sounds-x.x.x.vsix
```

---

# 🧭 Project Direction

Planned improvements include:

- 🎨 Continued PHP / TypeScript / JavaScript syntax refinement
- 📁 Expanded K7EEL icon coverage
- 🤖 Deeper Claude Code visual integration
- 🔊 Additional K7EEL mechanical sound profiles
- 🎚️ Sound volume and behaviour controls
- 🖥️ Improved terminal and debug-console presentation
- ⚡ Additional Cursor-specific refinements
- 📦 Simplified installation and releases

---

# ❤️ K7EEL

**K7EEL Cursor** is built for developers who want their coding environment to feel warm, focused, modern and distinctly their own.

Dark enough for long coding sessions.  
Warm enough not to feel sterile.  
Colourful enough to make code readable.  
Quiet enough to keep the code in focus.

**K7EEL Cursor + K7EEL Sounds** 🚀
