# Editor Tweaks

Uniform editor line geometry plus Thymer's native hover controls, tuned in place. (Absorbs the former Hover Tweaks plugin.)

**Editor geometry:**

- **Indent mode** — regular text lines indent to the bulleted text column (bullets hang left). Off = native text alignment.
- **Align guide columns** — every indent guide sits on the same column per depth, instead of shifting ~6px between bullet and text parents.
- **Re-anchor guides under wrapped rows** — guides start below the full wrapped parent row rather than alongside its continuation lines.
- **Expanded caret color** — the ▼ fold caret wears the indent guide's own color token instead of the bright native glyph.

**Hover controls** (the native handle and caret keep their own drag, menu, and fold — nothing is redrawn):

- **Click handle to zoom** — plain click zooms into the record, ⌥-click opens the options menu (Thymer ships the reverse), with a ↗ / ⋯ glyph cue while hovering. Press-and-hold still grabs for drag.
- **Custom handle cursors** — pick any macOS cursor for the zoom and menu affordances.
- **Collapsed-line cleanups** — hide the `[...]` unfold indicator, hide collapsed-line background shading, keep a persistent caret on folded lines, and suppress the hover wash and tooltips.
- **Align hover controls to top line** *(off by default)* — center the caret and handle on the first text line of wrapped rows.
- **Layout tweaks** *(off by default)* — finite px nudges for the caret and handle if native placement ever needs adjusting.

Everything is toggleable from the settings panel (command palette → `Plugin: Editor Tweaks`).

Plugins are made with 🤍 for the Thymer community. Free to use, fork, and hack on for <a href="LICENSE" target="_blank" rel="noopener noreferrer">non-commercial use</a>.

Plug-ins take effort, hours, and credits to build. If you find them helpful for you and your workflows, a star ⭐ on the repo, a <a href="https://buymeacoffee.com/akaready" target="_blank" rel="noopener noreferrer">coffee</a> ☕, and a link back to <a href="https://akaready.com" target="_blank" rel="noopener noreferrer">@akaready</a> 🔗 all go a long way. Optional of course, but always appreciated.

Enjoy! 🙏

<p align="left">
  <a href="https://buymeacoffee.com/akaready" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="40" alt="Buy me a coffee">
  </a>
</p>


&nbsp;

## 📦 Install

**Recommended:** Use the <a href="https://github.com/ahpatel/thymer-plugins-manager" target="_blank" rel="noopener noreferrer">Thymer Plugins Manager</a> and install via <a href="https://github.com/akaready/thymer-editor-tweaks" target="_blank" rel="noopener noreferrer">this repo's URL</a>. You'll get notifications when new versions ship.

**Manual:** copy <a href="plugin.js" target="_blank" rel="noopener noreferrer"><code>plugin.js</code></a> and <a href="plugin.json" target="_blank" rel="noopener noreferrer"><code>plugin.json</code></a> from this repo into Thymer's plugin editor.


&nbsp;

## 📊 Anonymous Usage Counter

This plugin pings a <a href="https://www.goatcounter.com/" target="_blank" rel="noopener noreferrer">privacy-respecting counter</a> on first install and once per day of active use. It exists so I can see which plugins are worth continuing to invest in — both "did anyone install it" and "is anyone still using it after a week." Combined with the coffee donations, this is what tells me whether to keep building. It tracks the plugin slug only, no other telemetry or user data, and you can see exactly what I see on the <a href="https://thymer-plugins.goatcounter.com" target="_blank" rel="noopener noreferrer">public dashboard</a>.

**Opt out:** Do Not Track, or `localStorage.setItem('tps-telemetry-opt-out','1')` in the console.
