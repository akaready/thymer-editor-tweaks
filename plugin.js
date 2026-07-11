"use strict";
var plugins = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // plugin.js
  var plugin_exports = {};
  __export(plugin_exports, {
    Plugin: () => Plugin
  });

  // ../../shared/settings-ui/tokens.css
  var tokens_default = "/*\n * Thymer Plugin Settings UI \u2014 Design Tokens\n *\n * Canonical CSS custom properties for the plugin settings panel system.\n * Plugins consume this verbatim; component CSS reads from these vars.\n *\n * See shared/settings-ui/DESIGN.md for rationale.\n *\n * Thymer var names verified against library/css-tokens/ (ripped from shipped CSS).\n * Fallbacks use color-mix(currentColor) so panels work when a token is absent.\n */\n\n.tps-panel {\n  /* \u2500\u2500 Color: text \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-text:           var(--text-default,   currentColor);\n  --tps-text-muted:     var(--text-muted,     color-mix(in srgb, currentColor 62%, transparent));\n  --tps-text-faint:     var(--text-subtle,    color-mix(in srgb, currentColor 48%, transparent));\n  --tps-text-whisper:   var(--text-disabled,  color-mix(in srgb, currentColor 34%, transparent));\n\n  /* \u2500\u2500 Color: surfaces \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-bg-input:       var(--input-bg-color,\n                        color-mix(in srgb, currentColor 6%, transparent));\n  --tps-bg-hover:       var(--hover-subtle,\n                        var(--sidebar-bg-hover,\n                        color-mix(in srgb, currentColor 8%, transparent)));\n  --tps-bg-active:      var(--active-bg-color,\n                        color-mix(in srgb, currentColor 12%, transparent));\n\n  /* \u2500\u2500 Color: borders / dividers \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-divider:        var(--divider-color,\n                        var(--thin-divider-color,\n                        color-mix(in srgb, currentColor 14%, transparent)));\n  --tps-border:         var(--input-border-color,\n                        var(--divider-color,\n                        color-mix(in srgb, currentColor 22%, transparent)));\n  --tps-border-strong:  var(--titlebar-border-color,\n                        var(--selection-border,\n                        color-mix(in srgb, currentColor 32%, transparent)));\n\n  /* \u2500\u2500 Color: accent (Thymer uses --logo-color) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-accent:         var(--logo-color, currentColor);\n  --tps-accent-soft:    color-mix(in srgb, var(--tps-accent) 15%, transparent);\n  --tps-accent-strong:  color-mix(in srgb, var(--tps-accent) 80%, var(--tps-text));\n\n  /* \u2500\u2500 Color: semantic \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-danger:         var(--enum-red-fg, #ef4444);\n  --tps-danger-soft:    color-mix(in srgb, var(--tps-danger) 15%, transparent);\n  --tps-warning:        var(--text-warning,\n                        var(--enum-yellow-fg, #f59e0b));\n  --tps-success:        var(--enum-green-fg, #10b981);\n  --tps-success-soft:   color-mix(in srgb, var(--tps-success) 12%, transparent);\n\n  --tps-on-accent:      var(--text-on-accent, light-dark(#111111, #fafafa));\n\n  /* Panel chrome */\n  --tps-panel-bg:       var(--panel-bg-color, transparent);\n  --tps-swatch-inset:   color-mix(in srgb, var(--tps-text) 8%, transparent);\n\n  /* \u2500\u2500 Typography \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  /* Font is INHERITED from Thymer's panel chrome (see components.css). */\n\n  --tps-fs-title:       18px;\n  --tps-fs-lede:        13px;\n  --tps-fs-section:     11px;\n  --tps-fs-hint:        12px;\n  --tps-fs-label:       13px;\n  --tps-fs-desc:        12px;\n  --tps-fs-body:        13px;\n  --tps-fs-value:       12px;\n  --tps-fs-button:      12px;\n  --tps-fs-list-header: 10px;\n\n  --tps-lh-tight:       1;\n  --tps-lh-snug:        1.2;\n  --tps-lh-base:        1.4;\n  --tps-lh-loose:       1.5;\n\n  --tps-fw-regular:     400;\n  --tps-fw-medium:      500;\n  --tps-fw-semibold:    600;\n  --tps-fw-bold:        700;\n\n  --tps-ls-section:     0.06em;\n  --tps-ls-list:        0.08em;\n  --tps-ls-title:       0;\n\n  /* \u2500\u2500 Spacing (8px scale) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-space-1:        4px;\n  --tps-space-2:        8px;\n  --tps-space-3:        12px;\n  --tps-space-4:        16px;\n  --tps-space-5:        24px;\n  --tps-space-6:        32px;\n  --tps-space-7:        48px;\n\n  /* \u2500\u2500 Radii \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-radius-sm:      4px;\n  --tps-radius-md:      6px;\n  --tps-radius-lg:      8px;\n  --tps-radius-pill:    999px;\n  --tps-radius-circle:  50%;\n\n  /* \u2500\u2500 Motion \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-ease-out:       cubic-bezier(0.2, 0.6, 0.2, 1);\n  --tps-ease-in-out:    cubic-bezier(0.4, 0, 0.2, 1);\n  --tps-dur-fast:       80ms;\n  --tps-dur-base:       160ms;\n\n  --tps-shadow-thumb:   0 1px 3px color-mix(in srgb, var(--tps-text) 28%, transparent);\n\n  /* \u2500\u2500 Component dimensions \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n  --tps-control-h-sm:   28px;\n  --tps-control-h-md:   32px;\n  --tps-input-w:        64px;\n  --tps-num-step-w:     28px;\n  --tps-swatch-size:    22px;\n  --tps-thumb-size:     16px;\n  --tps-track-h:        6px;\n\n  --tps-slider-track:   color-mix(in srgb, var(--tps-text) 22%, transparent);\n  --tps-slider-thumb-border: color-mix(in srgb, var(--tps-text) 28%, transparent);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .tps-panel {\n    --tps-dur-fast:     1ms;\n    --tps-dur-base:     1ms;\n  }\n}\n";

  // ../../shared/settings-ui/components.css
  var components_default = `/*
 * Thymer Plugin Panel \u2014 Component Primitives
 *
 * All primitives scope under .tps-panel. Plugin-specific styles live elsewhere.
 * Reads tokens from tokens.css.
 */

/* \u2500\u2500 Panel root \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Inherit Thymer's font + sizing \u2014 DO NOT override. plugin-collection-icons
   demonstrates the right approach: simply \`font-family: inherit\`. Forcing a
   custom var fights both Thymer's body font AND the .ti icon font. */
.tps-panel {
  font-family: inherit;
  font-size: var(--tps-fs-body);
  line-height: var(--tps-lh-base);
  color: var(--tps-text);
  padding: 0 var(--tps-space-5) var(--tps-space-7);
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
}

.tps-panel *,
.tps-panel *::before,
.tps-panel *::after {
  box-sizing: border-box;
}

/* Mono opt-ins are explicit per-element, never via a panel-wide override. */
.tps-panel .tps-num-input,
.tps-panel .tps-slider-value,
.tps-panel .tps-mono,
.tps-panel .tps-mono * {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Courier New", monospace;
}

/* \u2500\u2500 Title block \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-title {
  font-size: var(--tps-fs-title);
  line-height: var(--tps-lh-snug);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-title);
  color: var(--tps-text);
  margin: 0 0 var(--tps-space-1);
}

.tps-lede {
  font-size: var(--tps-fs-lede);
  line-height: var(--tps-lh-loose);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3);
}

/* \u2500\u2500 Canonical plugin header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-plugin-header {
  position: relative;
  margin: var(--tps-space-5) 0 var(--tps-space-5);
  padding: 18px var(--tps-space-4);
  overflow: hidden;
  background:
    linear-gradient(to right,
      #f26548  8%, #f26548 28%,
      #fbac56 28%, #fbac56 48%,
      #fff460 48%, #fff460 68%,
      #f067a6 68%, #f067a6 88%,
      #03bdf2 88%
    ) top left / 100% 1px no-repeat,
    linear-gradient(to right,
      #f26548  0%, #f26548 12%,
      #fbac56 12%, #fbac56 32%,
      #fff460 32%, #fff460 52%,
      #f067a6 52%, #f067a6 72%,
      #03bdf2 72%, #03bdf2 92%
    ) bottom left / 100% 1px no-repeat,
    var(--tps-panel-bg, var(--panel-bg-color, var(--plg-ci-theme-bg, transparent)));
  border-left: 1px solid #f26548;
  border-right: 1px solid #03bdf2;
}

.tps-plugin-header-logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--tps-space-2, 8px);
  margin: 0 0 var(--tps-space-3, 12px);
  background: var(--tps-bg-hover);
  border-radius: var(--tps-radius-md, 6px);
}

.tps-plugin-header-logo-icon {
  flex: 0 0 auto;
  font-size: 34px;
  line-height: 1;
  color: var(--tps-text, currentColor);
}

.tps-plugin-header-title {
  font-size: 22px;
  line-height: var(--tps-lh-snug, 1.2);
  font-weight: var(--tps-fw-semibold, 600);
  letter-spacing: 0;
  color: var(--tps-text, var(--text-default, currentColor));
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-plugin-header-version {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: baseline;
  align-self: baseline;
  font-size: 11px;
  line-height: inherit;
  font-weight: var(--tps-fw-medium, 500);
  letter-spacing: 0;
  color: var(--tps-text-faint) !important;
  white-space: nowrap;
}

.tps-plugin-header-lede {
  font-size: 14px;
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-plugin-header-helper-wrap {
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-plugin-header-helper-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0;
  margin: 0;
  border: 0;
  background: transparent;
  color: inherit;
  opacity: 0.28;
  font: inherit;
  font-size: var(--tps-fs-section, 11px);
  font-weight: var(--tps-fw-semibold, 600);
  line-height: var(--tps-lh-tight, 1);
  letter-spacing: var(--tps-ls-section, 0.06em);
  text-transform: uppercase;
  cursor: pointer;
  transition: opacity var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-helper-toggle:hover {
  opacity: 0.72;
}

.tps-plugin-header-helper-toggle:focus-visible {
  outline: 1px solid color-mix(in srgb, var(--tps-accent, currentColor) 45%, transparent);
  outline-offset: 2px;
}

.tps-plugin-header-helper-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 13px;
  height: 13px;
  font-size: 13px;
  line-height: 1;
  color: inherit;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-toggle {
  opacity: 0.72;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-toggle:hover {
  opacity: 1;
}

.tps-plugin-header-helper-body {
  display: none;
  margin: 8px 0 0;
  padding-left: 18px;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-body {
  display: block;
  cursor: pointer;
}

.tps-plugin-header-helper-line {
  margin: 0;
  font-size: var(--tps-fs-hint, 12px);
  line-height: var(--tps-lh-base, 1.4);
  color: inherit;
  opacity: 0.72;
  transition: opacity var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-body:hover .tps-plugin-header-helper-line {
  opacity: 1;
}

.tps-plugin-header-attr {
  position: relative;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0;
  width: 100%;
  font-size: 11.5px;
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
  margin: var(--tps-space-3, 12px) 0 0;
  padding-top: var(--tps-space-3, 12px);
  border-top: 0;
}

.tps-plugin-header-attr::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: clamp(40%, 50%, 55%);
  height: 1px;
  background: var(--tps-bg-hover);
}

.tps-plugin-header-link-group + .tps-plugin-header-link-group {
  margin-left: var(--tps-space-3, 12px);
  padding-left: var(--tps-space-3, 12px);
  border-left: 1px solid var(--tps-bg-hover);
}

.tps-plugin-header-icon,
.tps-plugin-header-attr .ti {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  font-size: 12px;
  line-height: 1;
  color: var(--tps-text-muted);
  transform: translateY(2px);
  margin-right: var(--tps-space-1, 4px);
}

.tps-plugin-header-iconify {
  background-color: currentColor;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

.tps-plugin-header-iconify-github {
  --tps-iconify-github: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'/%3E%3C/svg%3E");
  -webkit-mask-image: var(--tps-iconify-github);
  mask-image: var(--tps-iconify-github);
}

.tps-plugin-header-link {
  color: inherit;
  text-decoration: underline;
  text-decoration-color: color-mix(in srgb, currentColor 42%, transparent);
  transition: color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              text-decoration-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              filter var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-link--blue,
.tps-plugin-header-link--blue:hover {
  color: #03bdf2;
  text-decoration-color: #03bdf2;
}

.tps-plugin-header-link--pink,
.tps-plugin-header-link--pink:hover {
  color: #f067a6;
  text-decoration-color: #f067a6;
}

.tps-plugin-header-link--muted,
.tps-plugin-header-link--muted:hover {
  color: var(--tps-text-faint) !important;
  text-decoration-color: color-mix(in srgb, currentColor 42%, transparent);
}

.tps-plugin-header-link:hover {
  text-decoration: none;
  text-decoration-color: transparent;
  filter: brightness(1.2);
}

/* \u2500\u2500 Section \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-section {
  padding: 0;
}

.tps-section + .tps-section {
  border-top: 1px solid var(--tps-divider);
  margin-top: var(--tps-space-4);
  padding-top: var(--tps-space-4);
}

.tps-section-label {
  display: block;
  font-size: var(--tps-fs-section);
  line-height: var(--tps-lh-tight);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-section);
  text-transform: uppercase;
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-2);
}

.tps-section-hint {
  font-size: var(--tps-fs-hint);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3);
}

.tps-section-body {
  display: flex;
  flex-direction: column;
  gap: var(--tps-space-3);
  margin-top: var(--tps-space-2);
}

.tps-section-body:first-child {
  margin-top: 0;
}

/* When the body is full of list rows (mode rows), drop the gap and the top
   margin entirely so the first row's hover background sits flush under the
   section label and adjacent rows tile with no dead space between them. */
.tps-section-body:has(> .tps-list-row),
.tps-section-body:has(> .tps-opt) {
  margin-top: 0;
  gap: 0;
}

/* Collapsible variant: header is a button, body is hidden when closed */

.tps-section--collapsible > .tps-section-header {
  display: flex;
  align-items: center;
  gap: var(--tps-space-2);
  width: 100%;
  min-height: 34px;
  padding: 0;
  margin: 0 0 var(--tps-space-2);
  background: transparent;
  border: 0;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.tps-section--collapsible > .tps-section-header:hover .tps-section-label {
  color: var(--tps-text);
}

.tps-section--collapsible > .tps-section-header .tps-section-label {
  margin: 0;
}

.tps-section-chev {
  display: inline-block;
  width: 10px;
  font-size: 10px;
  line-height: 1;
  color: var(--tps-text-faint);
  transition: transform var(--tps-dur-base) var(--tps-ease-out);
}

.tps-section--collapsible[data-open="true"] .tps-section-chev {
  transform: rotate(90deg);
}

.tps-section-summary {
  margin-left: auto;
  min-width: 0;
  min-height: 18px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: var(--tps-fs-hint);
  color: var(--tps-text-muted);
  font-weight: var(--tps-fw-regular);
  letter-spacing: 0;
  text-transform: none;
}

/* Reserve header height when expanded; summary text only shows collapsed */
.tps-section--collapsible[data-open="true"] .tps-section-summary {
  visibility: hidden;
}

.tps-section--collapsible[data-open="false"] > .tps-section-body {
  display: none;
}

/* \u2500\u2500 Option row (checkbox / radio + label + desc) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-opt {
  display: grid;
  grid-template-columns: 18px 1fr;
  column-gap: var(--tps-space-3);
  row-gap: 0;
  align-items: start;
  padding: 6px 10px;
  margin: 0 -10px;
  border-radius: var(--tps-radius-md);
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out);
}

/* Stack option rows tight so the hover background of one meets the next
   without a visible gap above. Outer section gap is handled by the section
   itself, not by spacing between opts. */
.tps-section-body > .tps-opt + .tps-opt {
  margin-top: 0;
}
.tps-section-body:has(> .tps-opt) {
  gap: 0;
}

.tps-opt:hover {
  background: var(--tps-bg-hover);
}

.tps-opt > input[type="checkbox"],
.tps-opt > input[type="radio"] {
  grid-column: 1;
  grid-row: 1;
  align-self: center;
  width: 16px;
  height: 16px;
  margin: 0;
  accent-color: var(--tps-accent);
  cursor: pointer;
}

.tps-opt > .tps-opt-label {
  grid-column: 2;
  grid-row: 1;
  font-size: var(--tps-fs-label);
  line-height: var(--tps-lh-base);
  font-weight: var(--tps-fw-medium);
  color: var(--tps-text);
  cursor: pointer;
  transition: color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-opt > .tps-opt-desc {
  grid-column: 2;
  grid-row: 2;
  margin-top: 1px;
  font-size: var(--tps-fs-desc);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
  cursor: pointer;
}

.tps-section-body > .tps-opt-note {
  margin: var(--tps-space-2) -10px 0;
  padding: 0 10px 0 calc(10px + 18px + var(--tps-space-3));
  font-size: var(--tps-fs-desc);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
}

.tps-opt > input:checked ~ .tps-opt-label {
  color: var(--tps-accent);
}

/* Checkbox option + nested number row (e.g. tuned value under a toggle) */
.tps-section-body:has(> .tps-opt-group) {
  margin-top: 0;
  gap: 0;
}

.tps-opt-group {
  display: flex;
  flex-direction: column;
}

.tps-opt-group + .tps-opt-group {
  margin-top: 0;
}

.tps-opt-group .tps-opt-group__value,
.tps-opt-group > .tps-num {
  margin-left: calc(18px + var(--tps-space-3));
  margin-top: var(--tps-space-1);
  margin-bottom: var(--tps-space-3);
  padding-right: 10px;
  max-width: 100%;
  box-sizing: border-box;
}

.tps-opt-group .tps-num-grid {
  margin-left: calc(18px + var(--tps-space-3));
  margin-top: var(--tps-space-1);
  margin-bottom: var(--tps-space-3);
  grid-template-columns: minmax(0, 1fr);
}

/* \u2500\u2500 Numeric stepper \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-num {
  display: flex;
  align-items: center;
  gap: var(--tps-space-1);
}

.tps-num-label {
  flex: 0 0 auto;
  min-width: 0;
  font-size: var(--tps-fs-label);
  color: var(--tps-text);
  margin-right: var(--tps-space-2);
}

.tps-num-step,
.tps-num-input,
.tps-num-reset {
  font-family: inherit;
  font-size: var(--tps-fs-button);
  height: var(--tps-control-h-sm);
  border: 1px solid var(--tps-divider);
  border-radius: var(--tps-radius-sm);
  background: transparent;
  color: var(--tps-text);
  transition: border-color var(--tps-dur-fast) var(--tps-ease-out),
              background-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-num-step {
  width: var(--tps-num-step-w);
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.tps-num-step:hover {
  border-color: var(--tps-border);
  background: var(--tps-bg-hover);
}

.tps-num-step:active {
  background: var(--tps-bg-active);
}

.tps-num-input {
  width: var(--tps-input-w);
  padding: 0 var(--tps-space-2);
  background: var(--tps-bg-input);
  text-align: center;
  font-variant-numeric: tabular-nums;
  -moz-appearance: textfield;
}

.tps-num-input::-webkit-outer-spin-button,
.tps-num-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.tps-num-input:focus {
  outline: none;
  border-color: var(--tps-accent);
}

.tps-num-unit {
  font-size: var(--tps-fs-hint);
  color: var(--tps-text-muted);
  margin: 0 var(--tps-space-2);
}

.tps-num-reset {
  font-size: 11px;
  color: var(--tps-text-muted);
  padding: 0 var(--tps-space-2);
  cursor: pointer;
}

.tps-num-reset:hover {
  color: var(--tps-text);
  border-color: var(--tps-border);
}

.tps-num-reset[hidden] {
  display: none !important;
}

/* Stacked layout: label / control row in a 200px / 1fr grid */

.tps-num-grid {
  display: grid;
  grid-template-columns: 200px 1fr;
  align-items: center;
  column-gap: var(--tps-space-3);
  row-gap: var(--tps-space-2);
}

.tps-num-grid > .tps-num-label {
  margin: 0;
  text-align: left;
}

.tps-num-grid > .tps-num {
  justify-self: start;
}

/* \u2500\u2500 Slider row \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Shared range styling for sliderRow and any other range input in a panel.
   Exclude hue pickers that paint their own gradient track. */
.tps-panel input[type="range"]:not(.plg-collection-colors__hue) {
  width: 100%;
  height: 22px;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  touch-action: pan-y;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-webkit-slider-runnable-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-moz-range-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
  margin-top: -5px;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-moz-range-thumb {
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue):active::-webkit-slider-thumb {
  cursor: grabbing;
}

.tps-slider {
  display: grid;
  grid-template-columns: 90px 1fr 56px auto;
  align-items: center;
  gap: var(--tps-space-3);
}

.tps-slider-label {
  font-size: var(--tps-fs-section);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-section);
  text-transform: uppercase;
  color: var(--tps-text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tps-slider-input {
  width: 100%;
  height: 22px;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  touch-action: pan-y;
}

.tps-slider-input::-webkit-slider-runnable-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-slider-input::-moz-range-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-slider-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
  margin-top: -5px;
}

.tps-slider-input::-moz-range-thumb {
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-slider-input:active::-webkit-slider-thumb {
  cursor: grabbing;
}

/* Hue picker keeps its gradient track; only style the thumb. */
.tps-panel input[type="range"].plg-collection-colors__hue {
  width: 100%;
  height: 10px;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
}

.tps-panel input[type="range"].plg-collection-colors__hue::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  border-radius: var(--tps-radius-circle);
  background: var(--panel-bg-color, var(--tps-panel-bg, currentColor));
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-panel input[type="range"].plg-collection-colors__hue::-moz-range-thumb {
  width: 14px;
  height: 14px;
  border-radius: var(--tps-radius-circle);
  background: var(--panel-bg-color, var(--tps-panel-bg, currentColor));
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-slider-value {
  font-family: var(--tps-font-mono);
  font-size: var(--tps-fs-value);
  color: var(--tps-text);
  text-align: right;
  font-variant-numeric: tabular-nums;
}

/* \u2500\u2500 Swatch + grid \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-swatch-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, var(--tps-swatch-size));
  gap: var(--tps-space-2) 6px;
}

.tps-swatch {
  width: var(--tps-swatch-size);
  height: var(--tps-swatch-size);
  border-radius: var(--tps-radius-circle);
  border: 0;
  padding: 0;
  cursor: pointer;
  outline: none;
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset);
  transition: transform var(--tps-dur-fast) var(--tps-ease-out),
              box-shadow var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-swatch:hover {
  transform: scale(1.1);
}

.tps-swatch[aria-pressed="true"] {
  box-shadow: 0 0 0 2px var(--tps-accent);
}

/* \u2500\u2500 List rows \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-list {
  display: flex;
  flex-direction: column;
}

.tps-list-header {
  display: grid;
  grid-template-columns: 18px 1fr auto;
  align-items: center;
  gap: var(--tps-space-3);
  padding: var(--tps-space-2) var(--tps-space-3);
  border-bottom: 1px solid var(--tps-divider);
  font-size: var(--tps-fs-list-header);
  font-weight: var(--tps-fw-bold);
  letter-spacing: var(--tps-ls-list);
  text-transform: uppercase;
  color: var(--tps-text-faint);
}

.tps-list-row {
  display: grid;
  grid-template-columns: 18px 1fr auto;
  align-items: center;
  gap: var(--tps-space-3);
  padding: var(--tps-space-2) var(--tps-space-3);
  border-bottom: 1px solid var(--tps-divider);
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-list-row:last-child {
  border-bottom: 0;
}

.tps-list-row:hover {
  background: var(--tps-bg-hover);
}

.tps-list-name {
  font-size: var(--tps-fs-label);
  color: var(--tps-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* \u2500\u2500 Tabs / segmented control \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-tabs {
  display: inline-flex;
  align-items: center;
  gap: var(--tps-space-1);
  padding: 0;
}

.tps-tab {
  height: var(--tps-control-h-sm);
  padding: 0 var(--tps-space-2);
  font-family: inherit;
  font-size: var(--tps-fs-button);
  font-weight: var(--tps-fw-medium);
  color: var(--tps-text-muted);
  background: transparent;
  border: 1px solid transparent;
  border-radius: var(--tps-radius-sm);
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out),
              border-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-tab:hover {
  background: var(--tps-bg-hover);
  color: var(--tps-text);
}

.tps-tab[aria-pressed="true"],
.tps-tab[aria-selected="true"] {
  background: var(--tps-accent-soft);
  color: var(--tps-accent);
  border-color: color-mix(in srgb, var(--tps-accent) 50%, transparent);
}

/* \u2500\u2500 Buttons \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--tps-space-1);
  height: var(--tps-control-h-sm);
  padding: 0 var(--tps-space-3);
  font-family: inherit;
  font-size: var(--tps-fs-button);
  font-weight: var(--tps-fw-medium);
  border-radius: var(--tps-radius-sm);
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out),
              border-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-button--md { height: var(--tps-control-h-md); padding: 0 var(--tps-space-4); }

.tps-button--primary {
  background: var(--tps-accent);
  color: var(--tps-on-accent);
}

.tps-button--primary:hover {
  filter: brightness(1.08);
}

.tps-button--ghost {
  background: transparent;
  border-color: var(--tps-divider);
  color: var(--tps-text);
}

.tps-button--ghost:hover {
  background: var(--tps-bg-hover);
  border-color: var(--tps-border);
}

.tps-button--danger {
  background: transparent;
  border-color: var(--tps-divider);
  color: var(--tps-text-muted);
}

.tps-button--danger:hover {
  background: var(--tps-danger-soft);
  border-color: color-mix(in srgb, var(--tps-danger) 40%, transparent);
  color: var(--tps-danger);
}

/* \u2500\u2500 Focus rings (custom controls only \u2014 native inputs use accent-color) \u2500 */

.tps-tab:focus-visible,
.tps-button:focus-visible,
.tps-num-step:focus-visible,
.tps-num-reset:focus-visible,
.tps-swatch:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

/* \u2500\u2500 Inset card variant (rare \u2014 for palette-picker body, etc.) \u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-card {
  padding: var(--tps-space-3);
  border-radius: var(--tps-radius-lg);
  background: var(--tps-bg-input);
  border: 1px solid var(--tps-divider);
}
`;

  // ../../shared/settings-ui/color-field.css
  var color_field_default = `/*
 * colorField \u2014 shared color picker (Theme | Tailwind | Custom).
 * Scoped under .tps-panel .tps-color-field; styled through --tps-* tokens.
 * Every selectable swatch is the same .tps-cf-dot across all three tabs.
 */

.tps-panel .tps-color-field { display: block; }

/* \u2500\u2500 Tabs \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-tabs {
  display: grid; grid-auto-flow: column; grid-auto-columns: 1fr; gap: 4px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px);
  padding: 4px; margin-bottom: var(--tps-space-3, 12px);
}
.tps-panel .tps-cf-tab {
  cursor: pointer; border: 0; background: transparent;
  border-radius: var(--tps-radius-sm, 6px); padding: 8px 10px; font: inherit;
  font-size: var(--tps-fs-body, 13px); font-weight: var(--tps-fw-semibold, 600);
  color: var(--tps-text-muted, rgba(127,127,127,0.75));
  transition: background var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-tab:hover { color: var(--tps-text, inherit); }
.tps-panel .tps-cf-tab.is-active {
  background: var(--tps-panel-bg, var(--bg-default, #fff));
  color: var(--tps-text, inherit); box-shadow: 0 1px 2px rgba(0,0,0,0.12);
}

/* \u2500\u2500 Panes \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-pane { display: none; }
.tps-panel .tps-cf-pane.is-active { display: block; }

/* \u2500\u2500 Featured theme picks \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-featured {
  display: grid; grid-template-columns: 1fr 1fr; gap: 8px;
  margin-bottom: var(--tps-space-3, 12px);
}
.tps-panel .tps-cf-tile {
  display: flex; align-items: center; gap: 10px; width: 100%; text-align: left; cursor: pointer;
  background: var(--tps-bg-hover, rgba(127,127,127,0.04));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 10px 12px; color: var(--tps-text, inherit);
  transition: border-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              background var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-tile:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); }
.tps-panel .tps-cf-tile.is-sel {
  border-color: var(--tps-accent, currentColor);
  background: var(--tps-accent-soft, rgba(127,127,127,0.08));
}
.tps-panel .tps-cf-tile-dot {
  width: 22px; height: 22px; flex: 0 0 auto; border-radius: var(--tps-radius-sm, 6px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18));
}
.tps-panel .tps-cf-tile-label {
  font-size: var(--tps-fs-body, 13px); font-weight: var(--tps-fw-semibold, 600);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}

/* \u2500\u2500 Groups + the universal swatch dot \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-group { margin-bottom: var(--tps-space-3, 12px); }
.tps-panel .tps-cf-group-head { display: flex; align-items: baseline; gap: 8px; margin-bottom: var(--tps-space-2, 8px); }
.tps-panel .tps-cf-group-label {
  font-size: var(--tps-fs-section, 11px); letter-spacing: 0.06em; text-transform: uppercase;
  color: var(--tps-text-faint, var(--tps-text-muted, rgba(127,127,127,0.6))); font-weight: var(--tps-fw-semibold, 600);
}
.tps-panel .tps-cf-group-hint { font-size: var(--tps-fs-section, 11px); color: var(--tps-text-faint, rgba(127,127,127,0.5)); }

/* \u2500\u2500 Swatches: square dots that fill the row width (22 across in the Tailwind
 *    hue row); every swatch elsewhere matches that width. \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-dots {
  display: grid; grid-template-columns: repeat(22, minmax(0, 1fr)); gap: 5px;
  /* explicit resets so a stale accumulated .tps-cf-dots rule (old edge-to-edge
   * build injected an inset-ring outline) can't linger after a plugin reload. */
  border: 0; border-radius: 0; overflow: visible; box-shadow: none; background: none; padding: 0;
}
.tps-panel .tps-cf-dot {
  aspect-ratio: 1 / 1; min-width: 0; width: 100%; height: auto; border: 0; padding: 0; margin: 0;
  cursor: pointer; position: relative;
  border-radius: var(--tps-radius-sm, 6px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18));
  transition: transform var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              box-shadow var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-dot:hover { transform: scale(1.12); z-index: 3; }
.tps-panel .tps-cf-dot:focus-visible,
.tps-panel .tps-cf-dot.is-sel,
.tps-panel .tps-cf-dot.is-active {
  outline: none; z-index: 4;
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18)),
              0 0 0 2px var(--tps-panel-bg, #fff), 0 0 0 4px var(--tps-accent, currentColor);
}

/* \u2500\u2500 Lightness "tints": full-width ramp, shade number inside (do not touch) \u2500 */
.tps-panel .tps-cf-ramp {
  display: grid; grid-template-columns: repeat(11, minmax(0, 1fr));
  border-radius: var(--tps-radius-md, 8px); overflow: hidden;
  box-shadow: inset 0 0 0 1px var(--tps-border, rgba(127,127,127,0.14));
}
.tps-panel .tps-cf-ramp-cell {
  border: 0; padding: 0; cursor: pointer; height: 30px; position: relative;
  display: flex; align-items: center; justify-content: center;
  font-size: 9px; font-weight: var(--tps-fw-semibold, 600); font-variant-numeric: tabular-nums; letter-spacing: -0.02em;
  transition: box-shadow var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-ramp-cell:hover { z-index: 3; box-shadow: inset 0 0 0 2px color-mix(in srgb, var(--tps-panel-bg, #fff) 60%, transparent); }
.tps-panel .tps-cf-ramp-cell:focus-visible,
.tps-panel .tps-cf-ramp-cell.is-sel {
  outline: none; z-index: 4;
  box-shadow: inset 0 0 0 2px var(--tps-panel-bg, #fff), inset 0 0 0 4px var(--tps-accent, currentColor);
}
/* Faint secondary ring on the inverted ("invert lightness") mirror shade \u2014
   present alongside the prominent ring on the actually-selected shade. */
.tps-panel .tps-cf-ramp-cell.is-sel-mirror {
  z-index: 3;
  box-shadow: inset 0 0 0 2px var(--tps-panel-bg, #fff),
              inset 0 0 0 3px color-mix(in srgb, var(--tps-accent, currentColor) 42%, transparent);
}

/* \u2500\u2500 Invert-lightness toggle \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-invert {
  display: flex; align-items: center; gap: 8px; margin-top: var(--tps-space-3, 12px);
  cursor: pointer; font-size: var(--tps-fs-hint, 12px); color: var(--tps-text, inherit); font-weight: var(--tps-fw-medium, 500);
}
.tps-panel .tps-cf-invert-cb { margin: 0; cursor: pointer; accent-color: var(--tps-accent, currentColor); }
.tps-panel .tps-cf-invert-hint { color: var(--tps-text-faint, rgba(127,127,127,0.5)); font-weight: var(--tps-fw-regular, 400); }
/* Dimmed + non-interactive until a real, non-500 shade is picked (500 mirrors
   to itself, so inverting it is a no-op). */
.tps-panel .tps-cf-invert.is-disabled { opacity: 0.42; cursor: default; }
.tps-panel .tps-cf-invert.is-disabled .tps-cf-invert-cb { cursor: default; }

/* \u2500\u2500 Custom palette \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-custom-row { min-height: 30px; margin-bottom: var(--tps-space-3, 12px); }
.tps-panel .tps-cf-custom-empty {
  grid-column: 1 / -1; display: flex; align-items: center; padding: 0 10px; min-height: 30px;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-regular, 400); letter-spacing: 0;
  color: var(--tps-text-faint, rgba(127,127,127,0.55));
}
.tps-panel .tps-cf-custom-dot { cursor: grab; }
.tps-panel .tps-cf-custom-dot.is-dragging { opacity: 0.4; cursor: grabbing; }

.tps-panel .tps-cf-addrow { display: flex; align-items: center; gap: 8px; }
.tps-panel .tps-cf-remove {
  cursor: pointer; border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  background: var(--tps-bg-input, rgba(127,127,127,0.06)); color: var(--tps-text-muted, rgba(127,127,127,0.75));
  border-radius: var(--tps-radius-md, 8px); height: 32px; padding: 0 14px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-medium, 500);
}
.tps-panel .tps-cf-remove[hidden] { display: none; }
.tps-panel .tps-cf-remove:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-add {
  cursor: pointer; border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  background: var(--tps-bg-input, rgba(127,127,127,0.06)); color: var(--tps-text, inherit);
  border-radius: var(--tps-radius-md, 8px); height: 32px; padding: 0 14px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-semibold, 600);
}
.tps-panel .tps-cf-add:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); }
.tps-panel .tps-cf-custom-count {
  margin-left: auto; font-size: var(--tps-fs-section, 11px);
  color: var(--tps-text-faint, rgba(127,127,127,0.5)); font-variant-numeric: tabular-nums;
}

/* \u2500\u2500 Hex input \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-hexbox {
  display: inline-flex; align-items: center; gap: 8px; box-sizing: border-box; height: 32px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 0 8px 0 10px;
}
.tps-panel .tps-cf-hex-dot {
  width: 15px; height: 15px; border-radius: var(--tps-radius-sm, 5px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.22));
}
.tps-panel .tps-cf-hex-input {
  border: 0; background: transparent; outline: none;
  font-family: var(--tps-font-mono, ui-monospace, monospace);
  font-size: var(--tps-fs-hint, 12px); color: var(--tps-text, inherit); width: 84px;
  font-variant-numeric: tabular-nums;
}
.tps-panel .tps-cf-hex-input::placeholder { color: var(--tps-text-faint, rgba(127,127,127,0.5)); }

/* \u2500\u2500 Universal: No color \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-divider {
  height: 1px; margin: var(--tps-space-3, 12px) 0; background: var(--tps-divider, rgba(127,127,127,0.12));
}
.tps-panel .tps-cf-universal { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.tps-panel .tps-cf-none {
  display: inline-flex; align-items: center; gap: 7px; cursor: pointer; box-sizing: border-box; height: 32px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 0 12px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-medium, 500);
  color: var(--tps-text-muted, rgba(127,127,127,0.7));
}
.tps-panel .tps-cf-none:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-none.is-sel { border-color: var(--tps-accent, currentColor); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-none-sw {
  width: 15px; height: 15px; border-radius: 50%; position: relative; overflow: hidden;
  box-shadow: inset 0 0 0 1px var(--tps-border-strong, rgba(127,127,127,0.3));
}
.tps-panel .tps-cf-none-sw::after {
  content: ""; position: absolute; left: 50%; top: -3px; width: 1.5px; height: 21px;
  background: var(--tps-danger, #e2555f); transform: rotate(45deg);
}

/* \u2500\u2500 Instant tooltip (drawn by the component, not native title delay) \u2500\u2500\u2500 */
.tps-panel .tps-cf-tip {
  position: fixed; z-index: 2147483000; transform: translate(-50%, calc(-100% - 8px));
  padding: 3px 8px; border-radius: var(--tps-radius-sm, 5px);
  background: var(--tps-text, #1a1a1a); color: var(--tps-panel-bg, #fff);
  font-size: var(--tps-fs-section, 11px); font-weight: var(--tps-fw-medium, 500);
  line-height: 1.3; white-space: nowrap; pointer-events: none; opacity: 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.35);
}
.tps-panel .tps-cf-tip.is-visible { opacity: 1; }

@media (prefers-reduced-motion: reduce) {
  .tps-panel .tps-cf-dot,
  .tps-panel .tps-cf-tab,
  .tps-panel .tps-cf-tile,
  .tps-panel .tps-cf-remove { transition: none; }
}
`;

  // ../../shared/settings-ui/helpers.js
  var PANEL_CSS = tokens_default + "\n" + components_default + "\n" + color_field_default;
  function h(tag, props, ...children) {
    const el = document.createElement(tag);
    const dom = (
      /** @type {any} */
      el
    );
    if (props) {
      for (const k in props) {
        const v = props[k];
        if (v == null || v === false) continue;
        if (k === "class" || k === "className") {
          el.className = v;
        } else if (k === "style" && typeof v === "object") {
          Object.assign(el.style, v);
        } else if (k === "dataset" && typeof v === "object") {
          for (const dk in v) el.dataset[dk] = v[dk];
        } else if (k.startsWith("on") && typeof v === "function") {
          el.addEventListener(k.slice(2).toLowerCase(), v);
        } else if (k in dom && typeof dom[k] !== "function") {
          try {
            dom[k] = v;
          } catch {
            el.setAttribute(k, v);
          }
        } else {
          el.setAttribute(k, v === true ? "" : String(v));
        }
      }
    }
    appendChildren(el, children);
    return el;
  }
  __name(h, "h");
  function appendChildren(parent, children) {
    for (const c of children) {
      if (c == null || c === false) continue;
      if (Array.isArray(c)) {
        appendChildren(parent, c);
        continue;
      }
      parent.appendChild(c instanceof Node ? c : document.createTextNode(String(c)));
    }
  }
  __name(appendChildren, "appendChildren");
  function panel({ pluginClass } = {}, children = []) {
    const cls = ["tps-panel", pluginClass].filter(Boolean).join(" ");
    return h("div", { class: cls }, ...children);
  }
  __name(panel, "panel");
  function pluginHeader({
    title: heading,
    lede: ledeText,
    helper,
    helperOpen,
    helperDefaultOpen = false,
    onHelperToggle,
    icon = "",
    version = "1.0",
    author = "@akaready",
    homepage = "https://akaready.com",
    repository = "https://github.com/akaready",
    coffee = "https://buymeacoffee.com/akaready"
  }) {
    const iconClass = icon ? icon.startsWith("ti-") ? icon : `ti-${icon}` : "";
    const helperLines = normalizeHelperLines(helper);
    const children = [
      iconClass ? h(
        "div",
        { class: "tps-plugin-header-logo", "aria-hidden": "true" },
        h("i", { class: `ti ${iconClass} tps-plugin-header-logo-icon`, "aria-hidden": "true" })
      ) : null,
      h("h1", { class: "tps-plugin-header-title" }, heading),
      ledeText ? h("p", { class: "tps-plugin-header-lede" }, ledeText) : null,
      helperLines.length ? renderPluginHeaderHelper({
        lines: helperLines,
        defaultOpen: helperDefaultOpen,
        open: helperOpen,
        onToggle: onHelperToggle
      }) : null,
      h(
        "p",
        { class: "tps-plugin-header-attr" },
        h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("i", { class: "ti ti-link tps-plugin-header-icon", "aria-hidden": "true" }),
          h("a", {
            class: "tps-plugin-header-link tps-plugin-header-link--blue",
            href: homepage,
            target: "_blank",
            rel: "noopener noreferrer"
          }, author)
        ),
        h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("i", { class: "ti ti-coffee tps-plugin-header-icon", "aria-hidden": "true" }),
          h("a", {
            class: "tps-plugin-header-link tps-plugin-header-link--pink",
            href: coffee,
            target: "_blank",
            rel: "noopener noreferrer"
          }, "buy me a coffee")
        ),
        version ? h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("span", { class: "tps-plugin-header-icon tps-plugin-header-iconify tps-plugin-header-iconify-github", "aria-hidden": "true" }),
          h("a", { class: "tps-plugin-header-link tps-plugin-header-link--muted tps-plugin-header-version", href: repository, target: "_blank", rel: "noopener noreferrer" }, `v${version}`)
        ) : null
      )
    ];
    return h("div", { class: "tps-plugin-header" }, ...children);
  }
  __name(pluginHeader, "pluginHeader");
  function normalizeHelperLines(helper) {
    if (!helper) return [];
    if (typeof helper === "string") {
      const text = helper.trim();
      return text ? [text] : [];
    }
    if (Array.isArray(helper)) {
      return helper.map((line) => String(line).trim()).filter(Boolean);
    }
    return [];
  }
  __name(normalizeHelperLines, "normalizeHelperLines");
  function renderPluginHeaderHelper({ lines, defaultOpen = false, open, onToggle }) {
    const initialOpen = open == null ? !!defaultOpen : !!open;
    const wrap = h("div", {
      class: "tps-plugin-header-helper-wrap",
      dataset: { open: String(initialOpen) }
    });
    const icon = h("i", { class: "ti ti-info-circle tps-plugin-header-helper-icon", "aria-hidden": "true" });
    const toggle = h("button", {
      type: "button",
      class: "tps-plugin-header-helper-toggle",
      "aria-expanded": String(initialOpen)
    }, icon, h("span", { class: "tps-plugin-header-helper-toggle-label" }, "Instructions"));
    const body = h(
      "div",
      { class: "tps-plugin-header-helper-body" },
      h("p", { class: "tps-plugin-header-helper-line" }, lines.join(" "))
    );
    const setOpen = /* @__PURE__ */ __name((nextOpen) => {
      wrap.dataset.open = String(nextOpen);
      toggle.setAttribute("aria-expanded", String(nextOpen));
      if (onToggle) onToggle(nextOpen);
    }, "setOpen");
    toggle.addEventListener("click", () => {
      setOpen(wrap.dataset.open !== "true");
    });
    body.addEventListener("click", () => {
      if (wrap.dataset.open === "true") setOpen(false);
    });
    wrap.appendChild(toggle);
    wrap.appendChild(body);
    return wrap;
  }
  __name(renderPluginHeaderHelper, "renderPluginHeaderHelper");
  function section({ label, hint, collapsible, defaultOpen = true, open, onToggle, summary, body = [] }) {
    const bodyChildren = Array.isArray(body) ? body : [body];
    const bodyEl = h("div", { class: "tps-section-body" }, ...bodyChildren);
    if (!collapsible) {
      return h(
        "section",
        { class: "tps-section" },
        h("div", { class: "tps-section-label" }, label),
        hint ? h("p", { class: "tps-section-hint" }, hint) : null,
        bodyEl
      );
    }
    const initialOpen = open == null ? !!defaultOpen : !!open;
    const sectionEl = h("section", {
      class: "tps-section tps-section--collapsible",
      dataset: { open: String(initialOpen) }
    });
    const chev = h("span", { class: "tps-section-chev", "aria-hidden": "true" }, "\u25B8");
    const labelEl = h("span", { class: "tps-section-label" }, label);
    const summaryEl = h("span", { class: "tps-section-summary" });
    const paintSummary = /* @__PURE__ */ __name((isOpen) => {
      summaryEl.replaceChildren();
      if (isOpen || summary == null) return;
      const content = typeof summary === "function" ? summary() : summary;
      if (content == null || content === "") return;
      if (typeof content === "string") summaryEl.textContent = content;
      else summaryEl.appendChild(content);
    }, "paintSummary");
    const setOpen = /* @__PURE__ */ __name((nextOpen) => {
      sectionEl.dataset.open = String(nextOpen);
      header.setAttribute("aria-expanded", String(nextOpen));
      paintSummary(nextOpen);
      if (onToggle) onToggle(nextOpen);
    }, "setOpen");
    const header = h("button", {
      type: "button",
      class: "tps-section-header",
      "aria-expanded": String(initialOpen),
      onClick: /* @__PURE__ */ __name(() => setOpen(sectionEl.dataset.open !== "true"), "onClick")
    }, chev, labelEl, summaryEl);
    paintSummary(initialOpen);
    sectionEl.appendChild(header);
    if (hint) sectionEl.appendChild(h("p", { class: "tps-section-hint" }, hint));
    sectionEl.appendChild(bodyEl);
    return sectionEl;
  }
  __name(section, "section");
  function optionRow({ type = "checkbox", name, value, label, desc, checked, onChange }) {
    const input = h("input", {
      type,
      name,
      value,
      checked: !!checked,
      onChange: onChange ? (e) => onChange(e) : null
    });
    const labelEl = h("span", { class: "tps-opt-label" }, label);
    const descEl = desc ? h("span", { class: "tps-opt-desc" }, desc) : null;
    return h("label", { class: "tps-opt" }, input, labelEl, descEl);
  }
  __name(optionRow, "optionRow");
  function numberRow({ label, value, min, max, step = 1, unit, defaultValue, onChange, onReset }) {
    const clamp = /* @__PURE__ */ __name((next) => {
      let v = Number.isFinite(next) ? next : Number(value) || 0;
      if (min != null) v = Math.max(min, v);
      if (max != null) v = Math.min(max, v);
      return v;
    }, "clamp");
    const input = h("input", {
      type: "number",
      class: "tps-num-input",
      value,
      min,
      max,
      step,
      onInput: /* @__PURE__ */ __name((e) => {
        const target = (
          /** @type {HTMLInputElement} */
          e.target
        );
        onChange && onChange(Number(target.value), e);
      }, "onInput"),
      onKeyDown: /* @__PURE__ */ __name((e) => {
        if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;
        e.preventDefault();
        const base = Number.isFinite(Number(input.value)) ? Number(input.value) : Number(value) || 0;
        const direction = e.key === "ArrowUp" ? 1 : -1;
        input.value = String(clamp(base + direction * step * (e.shiftKey ? 10 : 1)));
        onChange && onChange(Number(input.value), e);
      }, "onKeyDown")
    });
    const minus = h("button", {
      type: "button",
      class: "tps-num-step",
      "aria-label": "Decrease",
      onClick: /* @__PURE__ */ __name(() => {
        const v = Number(input.value) - step;
        input.value = String(clamp(v));
        onChange && onChange(Number(input.value));
      }, "onClick")
    }, "\u2212");
    const plus = h("button", {
      type: "button",
      class: "tps-num-step",
      "aria-label": "Increase",
      onClick: /* @__PURE__ */ __name(() => {
        const v = Number(input.value) + step;
        input.value = String(clamp(v));
        onChange && onChange(Number(input.value));
      }, "onClick")
    }, "+");
    const unitEl = unit ? h("span", { class: "tps-num-unit" }, unit) : null;
    const reset = defaultValue != null ? h("button", {
      type: "button",
      class: "tps-num-reset",
      hidden: value === defaultValue,
      onClick: /* @__PURE__ */ __name(() => {
        input.value = String(defaultValue);
        onChange && onChange(defaultValue);
        onReset && onReset();
      }, "onClick")
    }, "Reset") : null;
    const numEl = h("div", { class: "tps-num" }, minus, input, plus, unitEl, reset);
    if (label) {
      return h(
        "div",
        { class: "tps-num-grid" },
        h("div", { class: "tps-num-label" }, label),
        numEl
      );
    }
    return numEl;
  }
  __name(numberRow, "numberRow");

  // ../../shared/telemetry/ping.js
  var TELEMETRY_ENDPOINT = "https://thymer-plugins.goatcounter.com/count";
  var TELEMETRY_SCRIPT_SRC = "https://gc.zgo.at/count.js";
  var _telemetryScriptPromise = null;
  function _loadGoatCounter() {
    if (_telemetryScriptPromise) return _telemetryScriptPromise;
    _telemetryScriptPromise = new Promise((resolve) => {
      window.goatcounter = window.goatcounter || {};
      window.goatcounter.no_onload = true;
      window.goatcounter.allow_local = false;
      if (typeof window.goatcounter.count === "function") {
        resolve();
        return;
      }
      const s = document.createElement("script");
      s.async = true;
      s.src = TELEMETRY_SCRIPT_SRC;
      s.setAttribute("data-goatcounter", TELEMETRY_ENDPOINT);
      s.setAttribute("data-goatcounter-settings", '{"no_onload": true}');
      s.onload = () => resolve();
      s.onerror = () => resolve();
      document.head.appendChild(s);
    });
    return _telemetryScriptPromise;
  }
  __name(_loadGoatCounter, "_loadGoatCounter");
  function _fireTelemetry(path) {
    _loadGoatCounter().then(() => {
      try {
        window.goatcounter.count({ path, title: "", event: false });
      } catch (_) {
      }
    });
  }
  __name(_fireTelemetry, "_fireTelemetry");
  function _telemetryBlocked() {
    try {
      if (navigator.doNotTrack === "1") return true;
      if (localStorage.getItem("tps-telemetry-opt-out") === "1") return true;
    } catch (_) {
      return true;
    }
    return false;
  }
  __name(_telemetryBlocked, "_telemetryBlocked");
  function pingInstall(slug) {
    try {
      if (_telemetryBlocked()) return;
      const key = "tps-tcm-" + slug;
      if (localStorage.getItem(key) === "1") return;
      localStorage.setItem(key, "1");
      _fireTelemetry("thymer-" + slug);
    } catch (_) {
    }
  }
  __name(pingInstall, "pingInstall");
  function pingActive(slug) {
    try {
      if (_telemetryBlocked()) return;
      const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
      const key = "tps-act-" + slug;
      if (localStorage.getItem(key) === today) return;
      localStorage.setItem(key, today);
      _fireTelemetry("thymer-" + slug + "/active");
    } catch (_) {
    }
  }
  __name(pingActive, "pingActive");

  // ../../shared/plugin-version.js
  function readPluginVersion(conf, fallback = "0.0.1") {
    if (!conf || typeof conf !== "object") return fallback;
    if (typeof conf.version === "string" && conf.version) return conf.version;
    const custom = conf.custom;
    if (custom && typeof custom === "object" && typeof custom.pluginVersion === "string" && custom.pluginVersion) {
      return custom.pluginVersion;
    }
    return fallback;
  }
  __name(readPluginVersion, "readPluginVersion");
  function configWithPluginVersion(conf, customPatch, pluginVersion) {
    const base = conf && typeof conf === "object" ? conf : {};
    const custom = base.custom && typeof base.custom === "object" ? base.custom : {};
    return {
      ...base,
      version: pluginVersion,
      custom: {
        ...custom,
        ...customPatch,
        pluginVersion
      }
    };
  }
  __name(configWithPluginVersion, "configWithPluginVersion");
  async function syncPluginVersionOnLoad(plugin, pluginVersion, customPatch = {}) {
    if (!plugin || typeof plugin.saveConfiguration !== "function") return;
    let conf = {};
    try {
      conf = plugin.getConfiguration?.() || {};
    } catch {
      return;
    }
    if (typeof conf.name !== "string" || !conf.name.trim()) return;
    const custom = conf.custom && typeof conf.custom === "object" ? { .../** @type {Record<string, unknown>} */
    conf.custom, ...customPatch } : { ...customPatch };
    if (readPluginVersion(conf, "") === pluginVersion) return;
    try {
      await plugin.saveConfiguration(configWithPluginVersion(conf, custom, pluginVersion));
    } catch {
    }
  }
  __name(syncPluginVersionOnLoad, "syncPluginVersionOnLoad");

  // plugin.js
  var PLUGIN_VERSION = "1.0.0";
  var ROOT_CLASS = "plg-editor-tweaks";
  var PANEL_TYPE = "editor-tweaks-settings";
  var BODY_CLASS = "et-enabled";
  var INDENT_BODY_CLASS = "plg-et-indent";
  var SETTINGS_STYLE_ID = "et-settings-style";
  var PANEL_SELECTOR = ".panel";
  var HANDLE_SELECTOR = ".item-drag-handle.link-menu-opener";
  var LIVE_HANDLE_SELECTOR = `${HANDLE_SELECTOR}:not(.is-br):not(.lineitem-lineref)`;
  var INLINE_REF_GUARD = ".lineitem-lineref, .lineitem-ref, .lineitem-ref-title, .lineitem-hashtag, .lineitem-hashtag-input";
  var CHEVRON_SELECTOR = ".line-fold-chevron";
  var DRAG_TRAVEL_PX = 5;
  var ET_CSS_VERSION_MARKER = `/* et-css ${PLUGIN_VERSION} */`;
  var INDENT_STEP = 30;
  var GUIDE_COLUMN_OFFSET = 8;
  var NATIVE_GUIDE_TOP = 28;
  var DEFAULT_SETTINGS = Object.freeze({
    // Editor family
    indentMode: true,
    alignGuideColumns: true,
    fixWrappedGuides: true,
    // Hover behaviors (all on — the tuned experience IS the default)
    hideUnfoldIndicator: true,
    hideCollapsedLineBackground: true,
    showPersistentCollapsedCaret: true,
    hidePersistentExpandedCaret: false,
    hideHoverBackground: true,
    /** true: click zooms, ⌥-click opens menu (Thymer ships the reverse). */
    altClickOpensMenu: true,
    zoomCursor: "resizeeast",
    menuCursor: "resizedown",
    // Hover geometry (all OFF — native placement is good post-update)
    alignControlsToTopLine: false,
    // Static drag-handle offset (the "scoot the drag handle over" fix).
    alignHandleToCaret: true
  });
  var HANDLE_ALIGN_DEFAULTS = Object.freeze({
    handleAlignTop: 1.75,
    handleAlignLeft: 4
  });
  var CURSOR_PNG_BASE = "https://mac-cursors.netlify.app/png";
  var CURSOR_OPTIONS = Object.freeze([
    { id: "beachball", label: "beachball", css: null },
    { id: "busy", label: "busy", css: "progress" },
    { id: "cell", label: "cell", css: "cell" },
    { id: "contextualmenu", label: "contextualmenu", css: "context-menu" },
    { id: "copy", label: "copy", css: "copy" },
    { id: "cross", label: "cross", css: "crosshair" },
    { id: "default", label: "default", css: "default" },
    { id: "handgrabbing", label: "handgrabbing", css: "grabbing" },
    { id: "handopen", label: "handopen", css: "grab" },
    { id: "handpointing", label: "handpointing", css: "pointer" },
    { id: "help", label: "help", css: "help" },
    { id: "makealias", label: "makealias", css: "alias" },
    { id: "move", label: "move", css: "all-scroll" },
    { id: "notallowed", label: "notallowed", css: "no-drop" },
    { id: "poof", label: "poof", css: null },
    { id: "resizedown", label: "resizedown", css: null },
    { id: "resizeeast", label: "resizeeast", css: "e-resize" },
    { id: "resizeleft", label: "resizeleft", css: null },
    { id: "resizeleftright", label: "resizeleftright", css: "col-resize" },
    { id: "resizenorth", label: "resizenorth", css: "n-resize" },
    { id: "resizenortheast", label: "resizenortheast", css: "ne-resize" },
    { id: "resizenortheastsouthwest", label: "resizenortheastsouthwest", css: "nesw-resize" },
    { id: "resizenorthsouth", label: "resizenorthsouth", css: "ns-resize" },
    { id: "resizenorthwest", label: "resizenorthwest", css: "nw-resize" },
    { id: "resizenorthwestsoutheast", label: "resizenorthwestsoutheast", css: "nwse-resize" },
    { id: "resizeright", label: "resizeright", css: null },
    { id: "resizesouth", label: "resizesouth", css: "s-resize" },
    { id: "resizesoutheast", label: "resizesoutheast", css: "se-resize" },
    { id: "resizesouthwest", label: "resizesouthwest", css: "sw-resize" },
    { id: "resizeup", label: "resizeup", css: null },
    { id: "resizeupdown", label: "resizeupdown", css: "row-resize" },
    { id: "resizewest", label: "resizewest", css: "w-resize" },
    { id: "resizewesteast", label: "resizewesteast", css: "ew-resize" },
    { id: "screenshotselection", label: "screenshotselection", css: null },
    { id: "screenshotwindow", label: "screenshotwindow", css: null },
    { id: "textcursor", label: "textcursor", css: "text" },
    { id: "textcursorvertical", label: "textcursorvertical", css: "vertical-text" },
    { id: "zoomin", label: "zoomin", css: "zoom-in" },
    { id: "zoomout", label: "zoomout", css: "zoom-out" }
  ]);
  var CURSOR_BY_ID = Object.freeze(
    Object.fromEntries(CURSOR_OPTIONS.map((o) => [o.id, o]))
  );
  function cursorCssValue(id) {
    const entry = CURSOR_BY_ID[id] || CURSOR_BY_ID.zoomin;
    if (entry.css) return entry.css;
    return `url("${CURSOR_PNG_BASE}/${entry.id}.png") 16 16, auto`;
  }
  __name(cursorCssValue, "cursorCssValue");
  function normalizeCursorId(id, fallback) {
    const key = String(id || "").trim();
    return CURSOR_BY_ID[key] ? key : fallback;
  }
  __name(normalizeCursorId, "normalizeCursorId");
  var Plugin = class extends AppPlugin {
    static {
      __name(this, "Plugin");
    }
    /** @type {(event: MouseEvent) => void} */
    onClickCapture = /* @__PURE__ */ __name((event) => this.handleClickCapture(event), "onClickCapture");
    /** @type {(event: PointerEvent) => void} */
    onPointerDownCapture = /* @__PURE__ */ __name((event) => this.handlePointerDownCapture(event), "onPointerDownCapture");
    /** @type {(event: PointerEvent) => void} */
    onPointerUpCapture = /* @__PURE__ */ __name((event) => this.handlePointerUpCapture(event), "onPointerUpCapture");
    /** Tooltip strip + alt tracking on control hover. */
    /** @type {(event: PointerEvent) => void} */
    onPointerOverCapture = /* @__PURE__ */ __name((event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (target.closest(INLINE_REF_GUARD)) {
        this.syncAltFromEvent(event);
        return;
      }
      const control = target.closest(`${HANDLE_SELECTOR}, ${CHEVRON_SELECTOR}`);
      if (control instanceof HTMLElement && !control.closest(INLINE_REF_GUARD)) {
        if (control.hasAttribute("data-tooltip")) control.removeAttribute("data-tooltip");
        if (control.hasAttribute("data-tooltip-html")) control.removeAttribute("data-tooltip-html");
        if (control.classList.contains("tooltip")) control.classList.remove("tooltip");
      }
      this.syncAltFromEvent(event);
      if (this._geometryActive() && document.body.dataset.etPressing !== "true") this._schedulePass();
    }, "onPointerOverCapture");
    /** @type {(event: KeyboardEvent) => void} */
    onKeyDownCapture = /* @__PURE__ */ __name((event) => {
      if (event.key === "Alt") this.setAltHeld(true);
    }, "onKeyDownCapture");
    /** @type {(event: KeyboardEvent) => void} */
    onKeyUpCapture = /* @__PURE__ */ __name((event) => {
      if (event.key === "Alt") this.setAltHeld(false);
    }, "onKeyUpCapture");
    onWindowBlur = /* @__PURE__ */ __name(() => {
      this.setAltHeld(false);
      this.setHandlePressing(false);
    }, "onWindowBlur");
    onDocumentClickCloseCursors = /* @__PURE__ */ __name((event) => {
      const target = event.target;
      if (target instanceof Element && target.closest(".et-cursor-picker")) return;
      this._panelEl?.querySelectorAll?.(".et-cursor-picker").forEach((el) => {
        if (!(el instanceof HTMLElement)) return;
        const btn = el.querySelector(".et-cursor-summary");
        const dropdown = el.querySelector(".et-cursor-dropdown");
        if (btn instanceof HTMLElement) btn.setAttribute("aria-expanded", "false");
        if (dropdown instanceof HTMLElement) dropdown.hidden = true;
      });
    }, "onDocumentClickCloseCursors");
    onLoad() {
      pingInstall("editor-tweaks");
      pingActive("editor-tweaks");
      syncPluginVersionOnLoad(this, PLUGIN_VERSION);
      this._handlerIds = [];
      this._settingsStyleEl = null;
      this._commandItem = null;
      this._panelEl = null;
      this._passthroughClick = false;
      this._pressPoint = null;
      this._configSaveDirty = false;
      this._configSaveInFlight = false;
      this._configSaveQueued = false;
      this._configFlushTimer = 0;
      this._isUnloading = false;
      this._passRaf = 0;
      this._domObs = null;
      this._styleObs = null;
      this.settings = this.loadSettings();
      this.cleanupPredecessorState();
      document.body.classList.add(BODY_CLASS);
      this.cleanupInjectedStyles();
      this.ui.injectCSS(PANEL_CSS);
      this.ui.injectCSS(this.getCSS());
      this.applySettingsToDom();
      this._commandItem = this.ui.addCommandPaletteCommand({
        label: "Plugin: Editor Tweaks",
        icon: "ruler",
        onSelected: /* @__PURE__ */ __name(() => this._openPanel(), "onSelected")
      });
      this.ui.registerCustomPanelType(PANEL_TYPE, (pluginPanel) => {
        try {
          pluginPanel.setTitle("Editor Tweaks Settings");
        } catch {
        }
        const root = pluginPanel.getElement();
        if (!root) return;
        this._panelEl = root;
        this._renderPanel();
      });
      document.addEventListener("click", this.onClickCapture, true);
      document.addEventListener("pointerdown", this.onPointerDownCapture, true);
      document.addEventListener("pointerup", this.onPointerUpCapture, true);
      document.addEventListener("pointercancel", this.onPointerUpCapture, true);
      document.addEventListener("pointerover", this.onPointerOverCapture, true);
      document.addEventListener("keydown", this.onKeyDownCapture, true);
      document.addEventListener("keyup", this.onKeyUpCapture, true);
      window.addEventListener("blur", this.onWindowBlur);
      document.addEventListener("click", this.onDocumentClickCloseCursors, false);
      this._installObservers();
      this._handlerIds.push(this.events.on("panel.closed", () => this.flushConfigSave()));
      this._pageLifecycleListener = () => this.flushConfigSave();
      try {
        window.addEventListener("pagehide", this._pageLifecycleListener);
      } catch {
      }
      try {
        document.addEventListener("visibilitychange", this._pageLifecycleListener);
      } catch {
      }
      this._schedulePass();
      setTimeout(() => this._schedulePass(), 120);
      setTimeout(() => this._schedulePass(), 500);
      setTimeout(() => this._schedulePass(), 1200);
      this.saveSettings();
    }
    onUnload() {
      this._isUnloading = true;
      void this.flushConfigSave();
      for (const id of this._handlerIds || []) {
        try {
          this.events.off(id);
        } catch {
        }
      }
      this._handlerIds = [];
      document.removeEventListener("click", this.onClickCapture, true);
      document.removeEventListener("pointerdown", this.onPointerDownCapture, true);
      document.removeEventListener("pointerup", this.onPointerUpCapture, true);
      document.removeEventListener("pointercancel", this.onPointerUpCapture, true);
      document.removeEventListener("pointerover", this.onPointerOverCapture, true);
      document.removeEventListener("keydown", this.onKeyDownCapture, true);
      document.removeEventListener("keyup", this.onKeyUpCapture, true);
      window.removeEventListener("blur", this.onWindowBlur);
      document.removeEventListener("click", this.onDocumentClickCloseCursors, false);
      this._teardownObservers();
      try {
        window.removeEventListener("pagehide", this._pageLifecycleListener);
      } catch {
      }
      try {
        document.removeEventListener("visibilitychange", this._pageLifecycleListener);
      } catch {
      }
      if (this._configFlushTimer) {
        clearTimeout(this._configFlushTimer);
        this._configFlushTimer = 0;
      }
      this._restoreNativeGuides();
      this._restoreControlMargins();
      this._settingsStyleEl?.remove();
      this._settingsStyleEl = null;
      if (this._commandItem) {
        this._commandItem.remove();
        this._commandItem = null;
      }
      this._panelEl = null;
      document.body.classList.remove(BODY_CLASS);
      document.body.classList.remove(INDENT_BODY_CLASS);
      delete document.body.dataset.etPersistentCaret;
      delete document.body.dataset.etExpandedCaret;
      delete document.body.dataset.etHoverBg;
      delete document.body.dataset.etAlt;
      delete document.body.dataset.etAltClickMenu;
      delete document.body.dataset.etPressing;
      for (const name of ["--et-cursor-zoom", "--et-cursor-menu"]) {
        document.body.style.removeProperty(name);
      }
    }
    /**
     * This slot's lineage: hover-controls → hover-tweaks → merged here. Sweep
     * any state either predecessor could have left behind (all no-ops on a
     * clean install).
     */
    cleanupPredecessorState() {
      document.body.classList.remove("hc-enabled");
      document.body.classList.remove("ht-debug-hover");
      document.body.classList.remove("ht-debug-visible");
      document.body.classList.remove("ht-debug-native-handle");
      document.body.classList.remove("ht-enabled");
      document.body.classList.remove("plg-et-outline");
      delete document.body.dataset.hcAlt;
      delete document.body.dataset.hcPersistentCaret;
      for (const key of Object.keys(document.body.dataset)) {
        if (key.startsWith("ht")) delete document.body.dataset[key];
      }
      for (const name of Array.from(document.body.style)) {
        if (name.startsWith("--hcd-") || name.startsWith("--ht-") || name.startsWith("--et")) {
          document.body.style.removeProperty(name);
        }
      }
      document.getElementById("hc-settings-style")?.remove();
      document.getElementById("ht-settings-style")?.remove();
      document.querySelectorAll(".hc-current, .hc-live, .hc-row-folded").forEach((el) => {
        el.classList.remove("hc-current", "hc-live", "hc-row-folded");
      });
      document.querySelectorAll(".ht-debug-row-picker, .ht-debug-handle").forEach((el) => el.remove());
      document.querySelectorAll(CHEVRON_SELECTOR).forEach((el) => {
        if (!(el instanceof HTMLElement)) return;
        el.style.removeProperty("--ht-c-auto-y");
        el.removeAttribute("data-ht-ready");
      });
      for (const handle of document.querySelectorAll(`.listview-overlaybuttons ${HANDLE_SELECTOR}`)) {
        if (!(handle instanceof HTMLElement)) continue;
        for (const prop of ["position", "left", "top", "right", "bottom", "inset", "transform", "translate", "margin", "width", "height", "z-index"]) {
          if (handle.style.getPropertyPriority(prop) === "important") {
            handle.style.removeProperty(prop);
          }
        }
        handle.removeAttribute("data-ht-ready");
        handle.removeAttribute("data-et-text");
      }
    }
    // ------------------------------------------------------------------
    // Layout pass — guides always; control geometry only when opted in.
    // ------------------------------------------------------------------
    _geometryActive() {
      return Boolean(this.settings?.alignControlsToTopLine);
    }
    _schedulePass() {
      if (this._passRaf) return;
      this._passRaf = requestAnimationFrame(() => {
        this._passRaf = 0;
        if (document.body.dataset.etPressing === "true") return;
        this._fixIndentGuides();
        this._syncControlGeometry();
      });
    }
    _installObservers() {
      this._onScroll = () => this._schedulePass();
      this._onResize = () => this._schedulePass();
      try {
        window.addEventListener("scroll", this._onScroll, true);
        window.addEventListener("resize", this._onResize);
      } catch {
      }
      try {
        this._domObs = new MutationObserver((mutations) => {
          for (const m of mutations) {
            const t = m.target;
            if (t instanceof Element && t.closest(INLINE_REF_GUARD)) continue;
            if (m.type === "attributes" && m.attributeName === "class") {
              const cls = String(
                /** @type {Element} */
                t.className || ""
              );
              if (cls.includes("lineitem-") || cls.includes("is-hover")) continue;
            }
            this._schedulePass();
            return;
          }
        });
        this._domObs.observe(document.body, {
          subtree: true,
          childList: true,
          attributes: true,
          // `style` is handled by the dedicated observer below.
          attributeFilter: ["class", "aria-expanded", "data-guid"]
        });
      } catch {
        this._domObs = null;
      }
      try {
        this._styleObs = new MutationObserver((mutations) => {
          for (const m of mutations) {
            const t = m.target;
            if (t instanceof HTMLElement && t.classList.contains("listitem-indentline")) {
              this._schedulePass();
              return;
            }
          }
        });
        this._styleObs.observe(document.body, { subtree: true, attributes: true, attributeFilter: ["style"] });
      } catch {
        this._styleObs = null;
      }
    }
    _teardownObservers() {
      try {
        window.removeEventListener("scroll", this._onScroll, true);
      } catch {
      }
      try {
        window.removeEventListener("resize", this._onResize);
      } catch {
      }
      try {
        this._domObs?.disconnect();
      } catch {
      }
      this._domObs = null;
      try {
        this._styleObs?.disconnect();
      } catch {
      }
      this._styleObs = null;
      if (this._passRaf) {
        cancelAnimationFrame(this._passRaf);
        this._passRaf = 0;
      }
    }
    isEditorRow(row) {
      return row instanceof HTMLElement && row.matches(".listitem[data-guid]") && !row.closest(INLINE_REF_GUARD);
    }
    /**
     * Normalize Thymer's indent guides (.listitem-indentline):
     * 1. Column alignment — canonical marker-slot column per level
     *    (rowX + 30·(L−1) + 8), killing the per-parent-type left kink.
     * 2. Wrapped re-anchor — Thymer writes `top: 28px` (one line), so a guide
     *    under a wrapped parent starts alongside its continuation lines.
     *    Re-anchor to the full parent line-div height, height compensated so
     *    the bottom end stays put.
     * `top === 28` distinguishes a fresh native write (record native height)
     * from our own adjustment (reuse the recorded one).
     */
    _fixIndentGuides() {
      const s = this.settings;
      if (!s.alignGuideColumns && !s.fixWrappedGuides) return;
      if (document.hidden) return;
      const guides = document.querySelectorAll(".listitem[data-guid] .line-div > .listitem-indentline");
      const writes = [];
      for (const g of guides) {
        if (!(g instanceof HTMLElement)) continue;
        const lineDiv = g.parentElement;
        const row = lineDiv?.closest?.(".listitem[data-guid]");
        if (!(lineDiv instanceof HTMLElement) || !(row instanceof HTMLElement)) continue;
        const rowRect = row.getBoundingClientRect();
        if (rowRect.width === 0 || rowRect.bottom < -400 || rowRect.top > window.innerHeight + 400) continue;
        const w = { g, left: (
          /** @type {number|null} */
          null
        ), top: (
          /** @type {number|null} */
          null
        ), height: (
          /** @type {number|null} */
          null
        ) };
        if (s.alignGuideColumns) {
          const level = parseInt(g.dataset.indentLevel || "", 10);
          if (Number.isFinite(level) && level > 0) {
            const desiredX = rowRect.x + INDENT_STEP * (level - 1) + GUIDE_COLUMN_OFFSET;
            const shift = desiredX - g.getBoundingClientRect().x;
            if (Math.abs(shift) > 0.75) {
              const left = parseFloat(g.style.left || "0") || 0;
              if (g.dataset.etNativeLeft === void 0) g.dataset.etNativeLeft = String(left);
              w.left = left + shift;
            }
          }
        }
        if (s.fixWrappedGuides) {
          const styleTop = parseFloat(g.style.top || "");
          let nativeH = NaN;
          if (styleTop === NATIVE_GUIDE_TOP) {
            nativeH = parseFloat(g.style.height || "");
            if (Number.isFinite(nativeH)) g.dataset.etNativeH = String(nativeH);
          } else {
            nativeH = parseFloat(g.dataset.etNativeH || "");
          }
          if (Number.isFinite(nativeH)) {
            const delta = Math.max(0, Math.round(lineDiv.getBoundingClientRect().height) - NATIVE_GUIDE_TOP);
            if (delta >= 2 || styleTop !== NATIVE_GUIDE_TOP) {
              const top = NATIVE_GUIDE_TOP + delta;
              const height = Math.max(0, nativeH - delta);
              if (parseFloat(g.style.top) !== top) w.top = top;
              if (parseFloat(g.style.height) !== height) w.height = height;
            }
          }
        }
        if (w.left !== null || w.top !== null || w.height !== null) writes.push(w);
      }
      for (const w of writes) {
        if (w.left !== null) w.g.style.left = `${w.left}px`;
        if (w.top !== null) w.g.style.top = `${w.top}px`;
        if (w.height !== null) w.g.style.height = `${w.height}px`;
      }
    }
    /** Undo our guide adjustments so an unload/reload starts from native state. */
    _restoreNativeGuides() {
      const guides = document.querySelectorAll(".listitem-indentline[data-et-native-h], .listitem-indentline[data-et-native-left]");
      for (const g of guides) {
        if (!(g instanceof HTMLElement)) continue;
        const nativeH = parseFloat(g.dataset.etNativeH || "");
        if (Number.isFinite(nativeH)) {
          g.style.top = `${NATIVE_GUIDE_TOP}px`;
          g.style.height = `${nativeH}px`;
        }
        const nativeLeft = parseFloat(g.dataset.etNativeLeft || "");
        if (Number.isFinite(nativeLeft)) g.style.left = `${nativeLeft}px`;
        delete g.dataset.etNativeH;
        delete g.dataset.etNativeLeft;
      }
    }
    /**
     * First-line text box for vertical centering. Uses `.line-div` (text column,
     * not bullet/number chrome). When text wraps, only the TOP-MOST line box is
     * used. Headers still center to their (taller) first-line box.
     * @returns {{ top: number, height: number } | null}
     */
    getLineTextRect(row) {
      if (!(row instanceof HTMLElement)) return null;
      const line = row.querySelector(":scope > .line-div") || row.querySelector(".line-div");
      if (!(line instanceof HTMLElement)) return null;
      const lineBox = line.getBoundingClientRect();
      if (lineBox.width < 1 && lineBox.height < 1) return null;
      try {
        const range = document.createRange();
        range.selectNodeContents(line);
        const rects = Array.from(range.getClientRects()).filter((r) => r.width > 0.5 && r.height > 0.5);
        if (rects.length) {
          let top = Infinity;
          for (const r of rects) top = Math.min(top, r.top);
          let bottom = top;
          for (const r of rects) {
            if (Math.abs(r.top - top) <= 1.25) bottom = Math.max(bottom, r.bottom);
          }
          const height = bottom - top;
          if (height >= 1) return { top, height };
        }
      } catch {
      }
      const cs = getComputedStyle(line);
      let lh = Number.parseFloat(cs.lineHeight);
      if (!Number.isFinite(lh) || lh <= 0) {
        const fs = Number.parseFloat(cs.fontSize);
        lh = Number.isFinite(fs) ? fs * 1.2 : Math.min(lineBox.height || 20, NATIVE_GUIDE_TOP);
      }
      return { top: lineBox.top, height: Math.min(lh, lineBox.height || lh) };
    }
    /** Row the singleton handle is currently bound to (if any). */
    resolveLiveHandleRow(handle) {
      const el = handle || document.querySelector(LIVE_HANDLE_SELECTOR);
      if (!(el instanceof HTMLElement)) return null;
      const guid = el.getAttribute("data-guid");
      if (!guid) return null;
      const panelRoot = this.getPanelRoot(el);
      const row = panelRoot?.querySelector?.(`.listitem[data-guid="${CSS.escape(guid)}"]`);
      return row instanceof HTMLElement && this.isEditorRow(row) ? row : null;
    }
    /**
     * Optional: center the caret and drag handle on the row's FIRST text line
     * (native centers on the whole wrapped row). OFF by default — native
     * placement is trusted. Applied as element margin-top so hit targets move
     * with the glyphs; when off, clears any margins we previously applied.
     */
    _syncControlGeometry() {
      if (!this.settings.alignControlsToTopLine) {
        this._restoreControlMargins(true);
        return;
      }
      const writes = [];
      const measure = /* @__PURE__ */ __name((el, row) => {
        const rect = el.getBoundingClientRect();
        if (rect.height < 1) return;
        const curMt = parseFloat(el.style.marginTop || "0") || 0;
        const text = this.getLineTextRect(row);
        if (!text) return;
        const delta = text.top + text.height / 2 - (rect.top + rect.height / 2);
        const mt = Math.round((curMt + delta) * 4) / 4;
        if (Math.abs(mt - curMt) > 0.25) writes.push({ el, mt });
      }, "measure");
      for (const chev of document.querySelectorAll(`.listitem[data-guid] > ${CHEVRON_SELECTOR}`)) {
        if (!(chev instanceof HTMLElement)) continue;
        const row = chev.parentElement;
        if (!(row instanceof HTMLElement) || !this.isEditorRow(row)) continue;
        const rr = row.getBoundingClientRect();
        if (rr.width === 0 || rr.bottom < -200 || rr.top > window.innerHeight + 200) continue;
        measure(chev, row);
      }
      const handle = document.querySelector(LIVE_HANDLE_SELECTOR);
      if (handle instanceof HTMLElement) {
        const row = this.resolveLiveHandleRow(handle);
        if (row) measure(handle, row);
      }
      for (const w of writes) {
        if (w.mt) w.el.style.marginTop = `${w.mt}px`;
        else w.el.style.removeProperty("margin-top");
      }
    }
    /** Clear caret/handle margins we applied. */
    _restoreControlMargins(onlyIfPresent = false) {
      const els = document.querySelectorAll(`${CHEVRON_SELECTOR}, ${HANDLE_SELECTOR}`);
      for (const el of els) {
        if (!(el instanceof HTMLElement)) continue;
        if (onlyIfPresent && !el.style.marginTop && !el.style.marginLeft) continue;
        el.style.removeProperty("margin-top");
        el.style.removeProperty("margin-left");
      }
    }
    // ------------------------------------------------------------------
    // Native-handle click semantics: plain click = zoom, ⌥-click = menu.
    // ------------------------------------------------------------------
    /** @param {MouseEvent | PointerEvent} event */
    getHandleFromEvent(event) {
      const target = event.target;
      if (!(target instanceof Element)) return null;
      if (target.closest(INLINE_REF_GUARD)) return null;
      const handle = target.closest(HANDLE_SELECTOR);
      if (!(handle instanceof HTMLElement)) return null;
      if (handle.classList.contains("is-br")) return null;
      return handle;
    }
    /** @param {PointerEvent} event */
    handlePointerDownCapture(event) {
      const handle = this.getHandleFromEvent(event);
      if (!handle) {
        this._pressPoint = null;
        this.setHandlePressing(false);
        return;
      }
      if (this.chevronUnderPoint(event.clientX, event.clientY, handle)) {
        this._pressPoint = null;
        this.setHandlePressing(false);
        return;
      }
      this._pressPoint = { x: event.clientX, y: event.clientY };
      this.setHandlePressing(true);
      this.syncAltFromEvent(event);
    }
    /**
     * True when a fold chevron (not the handle) is the real target under (x,y).
     * Temporarily clears handle pointer-events so overlay stacking doesn't lie.
     * @returns {Element | null} the chevron element, or null
     */
    chevronUnderPoint(x, y, handle) {
      if (!Number.isFinite(x) || !Number.isFinite(y)) return null;
      const el = handle instanceof HTMLElement ? handle : null;
      const prev = el ? el.style.getPropertyValue("pointer-events") : "";
      const prevPri = el ? el.style.getPropertyPriority("pointer-events") : "";
      try {
        if (el) el.style.setProperty("pointer-events", "none", "important");
        const under = document.elementFromPoint(x, y);
        if (!(under instanceof Element)) return null;
        return under.closest(CHEVRON_SELECTOR);
      } catch {
        return null;
      } finally {
        if (el) {
          if (prev) el.style.setProperty("pointer-events", prev, prevPri || "");
          else el.style.removeProperty("pointer-events");
        }
      }
    }
    /** @param {PointerEvent} event */
    handlePointerUpCapture(_event) {
      this.setHandlePressing(false);
    }
    /** @param {KeyboardEvent | MouseEvent | PointerEvent} event */
    syncAltFromEvent(event) {
      this.setAltHeld(Boolean(event.altKey));
    }
    setAltHeld(held) {
      if (held) {
        if (document.body.dataset.etAlt !== "true") document.body.dataset.etAlt = "true";
      } else if (document.body.dataset.etAlt) {
        delete document.body.dataset.etAlt;
      }
    }
    setHandlePressing(pressing) {
      if (pressing) {
        if (document.body.dataset.etPressing !== "true") document.body.dataset.etPressing = "true";
      } else if (document.body.dataset.etPressing) {
        delete document.body.dataset.etPressing;
      }
    }
    /** @param {MouseEvent} event */
    handleClickCapture(event) {
      const handle = this.getHandleFromEvent(event);
      if (!handle) return;
      const chev = this.chevronUnderPoint(event.clientX, event.clientY, handle);
      if (chev) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation?.();
        try {
          chev.dispatchEvent(new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            composed: true,
            view: window,
            button: 0,
            clientX: event.clientX,
            clientY: event.clientY
          }));
        } catch {
        }
        return;
      }
      if (this._passthroughClick) {
        this._passthroughClick = false;
        return;
      }
      const press = this._pressPoint;
      this._pressPoint = null;
      if (press && Number.isFinite(event.clientX)) {
        const dx = event.clientX - press.x;
        const dy = event.clientY - press.y;
        if (dx * dx + dy * dy > DRAG_TRAVEL_PX * DRAG_TRAVEL_PX) return;
      }
      if (this.settings?.altClickOpensMenu !== true) return;
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation?.();
      if (event.altKey) {
        this._passthroughClick = true;
        try {
          handle.dispatchEvent(new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            composed: true,
            view: window,
            button: 0,
            clientX: event.clientX,
            clientY: event.clientY
          }));
        } finally {
          this._passthroughClick = false;
        }
        return;
      }
      const guid = handle.getAttribute("data-guid");
      if (guid) this.zoomViaPanel(guid, this.getPanelRoot(handle));
    }
    /** The `.panel` element a control lives in (or `document.body` if none). */
    getPanelRoot(el) {
      return (el instanceof Element ? el.closest(PANEL_SELECTOR) : null) || document.body;
    }
    /**
     * The SDK panel whose DOM element contains the control's panel, so zoom
     * navigates the panel the user actually clicked in — not merely the focused
     * one (which may be the other split).
     */
    getSdkPanelForRoot(panelRoot) {
      const active = this.ui?.getActivePanel?.() || null;
      if (!panelRoot || panelRoot === document.body) return active;
      try {
        const panels = this.ui?.getPanels?.() || [];
        const match = panels.find((p) => {
          const el = p?.getElement?.();
          return el instanceof Element && (el.contains(panelRoot) || panelRoot.contains(el));
        });
        if (match) return match;
      } catch {
      }
      return active;
    }
    zoomViaPanel(guid, panelRoot) {
      const sdkPanel = this.getSdkPanelForRoot(panelRoot);
      if (!sdkPanel?.navigateTo) return false;
      const navigation = sdkPanel.getNavigation?.() || {};
      const workspaceGuid = navigation.workspaceGuid || this.getWorkspaceGuid?.() || null;
      try {
        const result = sdkPanel.navigateTo({
          type: "edit_panel",
          rootId: guid,
          subId: null,
          workspaceGuid
        });
        if (result?.catch) result.catch(() => {
        });
        return true;
      } catch {
        return false;
      }
    }
    // ------------------------------------------------------------------
    // Settings — localStorage is the live store; synced config seeds it.
    // ------------------------------------------------------------------
    getWorkspaceGuidSafe() {
      try {
        const guid = this.getWorkspaceGuid?.();
        if (guid) return guid;
      } catch {
      }
      return "default";
    }
    settingsStorageKey() {
      return `editor-tweaks/${this.getWorkspaceGuidSafe()}/settings`;
    }
    loadSettings() {
      const custom = this.readCustomSettings();
      const imported = this.readRetiredHoverStores();
      const local = this.readLocalSettings(this.settingsStorageKey());
      return this.normalizeSettings(this.mergeSettings(this.mergeSettings(custom, imported), local));
    }
    /**
     * One-way import of the retired standalone Hover Tweaks stores
     * (`hover-tweaks/${ws}/…/settings`). Read-only — the keys stay untouched
     * for as long as that plugin remains installed anywhere. Cursor and
     * layout-debug keys are deliberately dropped: this plugin ships new
     * defaults for both, and the old offsets are meaningless post-rewrite.
     */
    readRetiredHoverStores() {
      const prefix = `hover-tweaks/${this.getWorkspaceGuidSafe()}/`;
      let legacy = {};
      let byGuid = {};
      try {
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (!key || !key.startsWith(prefix) || !key.endsWith("settings")) continue;
          const parsed = this.readLocalSettings(key);
          if (key === `${prefix}settings`) legacy = parsed;
          else byGuid = { ...byGuid, ...parsed };
        }
      } catch {
      }
      const merged = { ...legacy, ...byGuid };
      delete merged.zoomCursor;
      delete merged.menuCursor;
      delete merged.layoutDebug;
      return merged;
    }
    /** Shallow merge; later argument wins. */
    mergeSettings(base, overlay) {
      const a = base && typeof base === "object" ? base : {};
      const b = overlay && typeof overlay === "object" ? overlay : {};
      return { ...a, ...b };
    }
    readLocalSettings(key) {
      try {
        const parsed = JSON.parse(localStorage.getItem(key) || "{}") || {};
        return parsed && typeof parsed === "object" ? parsed : {};
      } catch {
        return {};
      }
    }
    readCustomSettings() {
      try {
        const conf = this.getConfiguration?.();
        const custom = conf && conf.custom;
        const settings = custom && typeof custom === "object" ? custom.settings : null;
        return settings && typeof settings === "object" ? settings : null;
      } catch {
        return null;
      }
    }
    normalizeSettings(raw) {
      const s = raw && typeof raw === "object" ? raw : {};
      const indentMode = "indentMode" in s || !("outlineMode" in s) ? s.indentMode !== false : s.outlineMode !== false;
      return {
        indentMode,
        alignGuideColumns: s.alignGuideColumns !== false,
        fixWrappedGuides: s.fixWrappedGuides !== false,
        hideUnfoldIndicator: s.hideUnfoldIndicator !== false,
        hideCollapsedLineBackground: s.hideCollapsedLineBackground !== false,
        showPersistentCollapsedCaret: s.showPersistentCollapsedCaret !== false,
        hidePersistentExpandedCaret: s.hidePersistentExpandedCaret === true,
        hideHoverBackground: s.hideHoverBackground !== false,
        altClickOpensMenu: this.normalizeAltClickOpensMenu(s),
        zoomCursor: normalizeCursorId(s.zoomCursor, DEFAULT_SETTINGS.zoomCursor),
        menuCursor: normalizeCursorId(s.menuCursor, DEFAULT_SETTINGS.menuCursor),
        alignControlsToTopLine: s.alignControlsToTopLine === true,
        alignHandleToCaret: s.alignHandleToCaret !== false,
        handleAlignTop: this.normalizeQuarter(s.handleAlignTop, HANDLE_ALIGN_DEFAULTS.handleAlignTop),
        handleAlignLeft: this.normalizeQuarter(s.handleAlignLeft, HANDLE_ALIGN_DEFAULTS.handleAlignLeft)
      };
    }
    normalizeQuarter(value, fallback) {
      const n = Number.parseFloat(
        /** @type {any} */
        value
      );
      return Number.isFinite(n) ? Math.round(n * 4) / 4 : fallback;
    }
    normalizeAltClickOpensMenu(s) {
      if (typeof s.altClickOpensMenu === "boolean") return s.altClickOpensMenu;
      if (typeof s.swapAltClick === "boolean") return s.swapAltClick !== true;
      return DEFAULT_SETTINGS.altClickOpensMenu;
    }
    updateSetting(key, value) {
      if (!Object.prototype.hasOwnProperty.call(DEFAULT_SETTINGS, key)) return;
      const def = DEFAULT_SETTINGS[key];
      let next = value;
      if (typeof def === "boolean") next = Boolean(value);
      else if (typeof def === "string") next = String(value);
      this.settings = { ...this.settings, [key]: next };
      this.saveSettings();
      this.applySettingsToDom();
      if (key === "altClickOpensMenu" || key === "alignHandleToCaret") this._renderPanel();
    }
    /** Live per-tick handle-offset edit: save + re-inject the rule, NO re-render. */
    updateHandleAlign(key, rawValue) {
      if (!(key in HANDLE_ALIGN_DEFAULTS)) return;
      const n = Number.parseFloat(rawValue);
      if (!Number.isFinite(n)) return;
      this.settings = { ...this.settings, [key]: Math.round(n * 4) / 4 };
      this.saveSettings();
      this.writeSettingsStyle();
    }
    saveSettings() {
      const normalized = this.normalizeSettings(this.settings);
      this.settings = normalized;
      try {
        localStorage.setItem(this.settingsStorageKey(), JSON.stringify(normalized));
      } catch {
      }
      this._configSaveDirty = true;
      this.scheduleConfigFlush();
    }
    scheduleConfigFlush() {
      if (this._configFlushTimer) clearTimeout(this._configFlushTimer);
      this._configFlushTimer = setTimeout(() => {
        this._configFlushTimer = 0;
        void this.flushConfigSave();
      }, 900);
    }
    async flushConfigSave() {
      if (this._configFlushTimer) {
        clearTimeout(this._configFlushTimer);
        this._configFlushTimer = 0;
      }
      if (this._configSaveInFlight) {
        this._configSaveQueued = true;
        return;
      }
      if (!this._configSaveDirty) return;
      this._configSaveInFlight = true;
      try {
        const plugin = this.resolveGlobalPluginApi();
        if (!plugin || typeof plugin.saveConfiguration !== "function") return;
        const conf = plugin.getConfiguration ? plugin.getConfiguration() : {};
        const settings = this.normalizeSettings(this.settings);
        const current = conf && conf.custom && typeof conf.custom === "object" ? conf.custom.settings : null;
        if (JSON.stringify(current || {}) === JSON.stringify(settings)) {
          this._configSaveDirty = false;
          return;
        }
        await plugin.saveConfiguration(configWithPluginVersion(conf, { settings }, PLUGIN_VERSION));
        this._configSaveDirty = false;
      } catch {
      } finally {
        this._configSaveInFlight = false;
        if (this._configSaveQueued && !this._isUnloading) {
          this._configSaveQueued = false;
          void this.flushConfigSave();
        }
      }
    }
    resolveGlobalPluginApi() {
      try {
        const guid = this.getGuid?.();
        if (guid && this.data && typeof this.data.getPluginByGuid === "function") {
          const byGuid = this.data.getPluginByGuid(guid);
          if (byGuid && typeof byGuid.saveConfiguration === "function") return byGuid;
        }
      } catch {
      }
      return typeof this.saveConfiguration === "function" ? this : null;
    }
    // ------------------------------------------------------------------
    // Applying settings to the DOM
    // ------------------------------------------------------------------
    applySettingsToDom() {
      const settings = this.normalizeSettings(this.settings);
      this.settings = settings;
      document.body.classList.toggle(INDENT_BODY_CLASS, settings.indentMode);
      document.body.dataset.etPersistentCaret = String(settings.showPersistentCollapsedCaret);
      document.body.dataset.etExpandedCaret = settings.hidePersistentExpandedCaret ? "false" : "true";
      document.body.dataset.etHoverBg = settings.hideHoverBackground ? "false" : "true";
      document.body.dataset.etAltClickMenu = settings.altClickOpensMenu ? "true" : "false";
      this.writeSettingsStyle();
      if (!settings.alignGuideColumns || !settings.fixWrappedGuides) this._restoreNativeGuides();
      if (!this._geometryActive()) this._restoreControlMargins(true);
      this._schedulePass();
    }
    ensureSettingsStyle() {
      let style = this._settingsStyleEl;
      if (!(style instanceof HTMLStyleElement)) {
        style = document.getElementById(SETTINGS_STYLE_ID);
      }
      if (!(style instanceof HTMLStyleElement)) {
        style = document.createElement("style");
        style.id = SETTINGS_STYLE_ID;
      }
      document.querySelectorAll(`#${CSS.escape(SETTINGS_STYLE_ID)}`).forEach((candidate) => {
        if (candidate !== style) candidate.remove();
      });
      document.head.appendChild(style);
      this._settingsStyleEl = style;
      return style;
    }
    writeSettingsStyle() {
      const settings = this.settings;
      document.body.style.setProperty("--et-cursor-zoom", cursorCssValue(settings.zoomCursor));
      document.body.style.setProperty("--et-cursor-menu", cursorCssValue(settings.menuCursor));
      const rules = [
        `body.${BODY_CLASS} {
	--et-cursor-zoom: ${cursorCssValue(settings.zoomCursor)};
	--et-cursor-menu: ${cursorCssValue(settings.menuCursor)};
}`
      ];
      if (settings.hideUnfoldIndicator) {
        rules.push(`
				body.${BODY_CLASS} .lineitem-btn-unfold {
					display: none !important;
				}
			`);
      }
      if (settings.alignHandleToCaret) {
        rules.push(`
				body.${BODY_CLASS} .item-drag-handle {
					top: ${settings.handleAlignTop}px !important;
					left: ${settings.handleAlignLeft}px !important;
				}
			`);
      }
      if (settings.hideCollapsedLineBackground) {
        rules.push(`
				body.${BODY_CLASS} {
					--ed-folded-bg-color: transparent !important;
					--line-collapsed-bg-color: transparent !important;
				}
				body.${BODY_CLASS} .listitem-folded,
				body.${BODY_CLASS} .listitem-peeking,
				body.${BODY_CLASS} .listitem-fold-blocked {
					background: transparent !important;
					background-color: transparent !important;
				}
			`);
      }
      this.ensureSettingsStyle().textContent = rules.join("\n");
    }
    // ------------------------------------------------------------------
    // Stale-CSS cleanup (retired standalone Hover Tweaks + hover-controls)
    // ------------------------------------------------------------------
    cleanupInjectedStyles() {
      const isStaleSheet = /* @__PURE__ */ __name((sheet) => {
        let rules;
        try {
          rules = Array.from(sheet.cssRules || []);
        } catch {
          return false;
        }
        let sawOurs = false;
        for (const rule of rules) {
          const text = rule.cssText || "";
          if (text.includes("--et-css-version") && text.includes(PLUGIN_VERSION)) return false;
          if (!sawOurs && (text.includes(`body.${BODY_CLASS}`) || text.includes("body.ht-enabled") || text.includes("body.hc-enabled") || text.includes(".hc-popup") || // Pre-0.1.0 editor-tweaks ghosts (indent/outline mode rules
          // nudging the caret/handle via --et-caret-nudge).
          text.includes(`body.${INDENT_BODY_CLASS}`) || text.includes("body.plg-et-outline") || text.includes("--et-caret-nudge"))) sawOurs = true;
        }
        return sawOurs;
      }, "isStaleSheet");
      try {
        const adopted = document.adoptedStyleSheets;
        if (adopted && adopted.length) {
          const keep = Array.from(adopted).filter((sheet) => !isStaleSheet(sheet));
          if (keep.length !== adopted.length) document.adoptedStyleSheets = keep;
        }
      } catch {
      }
      try {
        for (const sheet of Array.from(document.styleSheets)) {
          const node = sheet.ownerNode;
          if (!(node instanceof HTMLStyleElement)) continue;
          if (node === this._settingsStyleEl) continue;
          const text = node.textContent || "";
          if (text.trim()) {
            const isOursText = (text.includes(`body.${BODY_CLASS} `) || text.includes("body.ht-enabled ") || text.includes("body.hc-enabled ") || text.includes(".hc-popup") || text.includes(`body.${INDENT_BODY_CLASS}`) || text.includes("body.plg-et-outline") || text.includes("--et-caret-nudge")) && (text.includes(".line-fold-chevron") || text.includes(".item-drag-handle") || text.includes(".hc-popup") || text.includes(".line-div"));
            if (isOursText && !text.includes(ET_CSS_VERSION_MARKER)) node.remove();
          } else if (isStaleSheet(sheet)) {
            node.remove();
          }
        }
      } catch {
      }
    }
    // ------------------------------------------------------------------
    // Settings panel
    // ------------------------------------------------------------------
    async _openPanel() {
      if (this._panelEl && document.contains(this._panelEl)) return;
      const active = this.ui.getActivePanel && this.ui.getActivePanel();
      const created = await this.ui.createPanel(active ? { afterPanel: active } : void 0);
      if (created) created.navigateToCustomType(PANEL_TYPE);
    }
    _renderPanel() {
      if (!this._panelEl) return;
      const s = this.settings;
      const check = /* @__PURE__ */ __name((name, label, desc) => optionRow({
        type: "checkbox",
        name,
        label,
        desc,
        checked: Boolean(s[name]),
        onChange: /* @__PURE__ */ __name((event) => this.updateSetting(
          name,
          /** @type {HTMLInputElement} */
          event.target.checked
        ), "onChange")
      }), "check");
      this._panelEl.replaceChildren(panel({ pluginClass: `${ROOT_CLASS}-panel` }, [
        pluginHeader({
          title: "Editor Tweaks",
          lede: "Uniform line geometry \u2014 indent mode, aligned guide columns \u2014 plus Thymer\u2019s hover controls tuned: click-to-zoom, cursors, and collapsed-line cleanups.",
          icon: "ti-ruler",
          version: PLUGIN_VERSION
        }),
        section({
          label: "Indent Mode",
          body: [
            check(
              "indentMode",
              "Indent mode",
              "Indent regular text lines to the bulleted text column (bullets hang left). Off = native text alignment."
            )
          ]
        }),
        section({
          label: "Indent Guides",
          body: [
            check(
              "alignGuideColumns",
              "Align guide columns",
              "Keep every indent guide on the same column per depth instead of shifting between bullet and text parents."
            ),
            check(
              "fixWrappedGuides",
              "Re-anchor guides under wrapped rows",
              "Start a guide below the full wrapped parent row rather than alongside its continuation lines."
            )
          ]
        }),
        section({
          label: "Hover Modifications",
          body: [
            check("hideUnfoldIndicator", "Hide [...] at the end of collapsed lines"),
            check("hideCollapsedLineBackground", "Hide background shading for collapsed lines"),
            // Stored as showPersistentCollapsedCaret (kept for settings
            // migration); the UI reads as "Hide …" to match its siblings.
            optionRow({
              type: "checkbox",
              name: "hidePersistentCollapsedCaret",
              label: "Hide persistent caret for collapsed lines",
              checked: !s.showPersistentCollapsedCaret,
              onChange: /* @__PURE__ */ __name((event) => this.updateSetting("showPersistentCollapsedCaret", !/** @type {HTMLInputElement} */
              event.target.checked), "onChange")
            }),
            check("hidePersistentExpandedCaret", "Hide persistent caret for expanded lines"),
            check("hideHoverBackground", "No hover background on handle & chevron"),
            check("altClickOpensMenu", "Click handle to zoom (\u2325-click opens menu)"),
            check(
              "alignControlsToTopLine",
              "Align hover controls to top line",
              "Center the caret and drag handle on the first text line of wrapped rows (native centers on the whole row)."
            ),
            check(
              "alignHandleToCaret",
              "Align drag handle to caret",
              "Scoot the drag handle over so it lines up with the fold caret."
            ),
            ...s.alignHandleToCaret ? [
              numberRow({
                label: "Handle \xB7 top",
                value: this.settings.handleAlignTop,
                min: -40,
                max: 40,
                step: 0.25,
                unit: "px",
                defaultValue: HANDLE_ALIGN_DEFAULTS.handleAlignTop,
                onChange: /* @__PURE__ */ __name((v) => this.updateHandleAlign("handleAlignTop", v), "onChange")
              }),
              numberRow({
                label: "Handle \xB7 left",
                value: this.settings.handleAlignLeft,
                min: -40,
                max: 40,
                step: 0.25,
                unit: "px",
                defaultValue: HANDLE_ALIGN_DEFAULTS.handleAlignLeft,
                onChange: /* @__PURE__ */ __name((v) => this.updateHandleAlign("handleAlignLeft", v), "onChange")
              })
            ] : []
          ]
        }),
        section({
          label: "Hover Cursors",
          hint: s.altClickOpensMenu ? "Hover uses zoom; \u2325 uses menu; press-and-hold still grabs for drag." : "Thymer default: hover uses menu; \u2325 uses zoom; press-and-hold still grabs for drag.",
          body: [
            this.buildCursorSelect({ name: "zoomCursor", label: "Zoom cursor", value: s.zoomCursor }),
            this.buildCursorSelect({ name: "menuCursor", label: "Menu cursor", value: s.menuCursor })
          ]
        })
      ]));
    }
    /** Kept as an alias — ported hover-tweaks call sites use this name. */
    renderSettingsPanel() {
      this._renderPanel();
    }
    /** @param {'zoomCursor' | 'menuCursor'} name @param {string} id */
    selectCursorSetting(name, id) {
      this.updateSetting(name, id);
      this._renderPanel();
    }
    /** @param {HTMLElement} panelEl */
    firstVisibleCursorOption(panelEl) {
      for (const btn of panelEl.querySelectorAll(".et-cursor-option")) {
        if (btn instanceof HTMLElement && !btn.hidden) return btn;
      }
      return null;
    }
    /** Click-to-open cursor dropdown: search + multi-column previews. */
    buildCursorSelect({ name, label, value }) {
      const currentId = normalizeCursorId(value, DEFAULT_SETTINGS[name] || "zoomin");
      const current = CURSOR_BY_ID[currentId] || CURSOR_BY_ID.zoomin;
      const listId = `et-cursor-list-${name}`;
      const preview = /* @__PURE__ */ __name((id, cls) => h("img", {
        class: cls,
        src: `${CURSOR_PNG_BASE}/${id}.png`,
        alt: "",
        draggable: "false",
        decoding: "async"
      }), "preview");
      const setOpen = /* @__PURE__ */ __name((picker, open) => {
        const btn = picker.querySelector(".et-cursor-summary");
        const dropdown2 = picker.querySelector(".et-cursor-dropdown");
        if (!(btn instanceof HTMLElement) || !(dropdown2 instanceof HTMLElement)) return;
        btn.setAttribute("aria-expanded", open ? "true" : "false");
        dropdown2.hidden = !open;
        if (open) {
          const search2 = dropdown2.querySelector(".et-cursor-search");
          if (search2 instanceof HTMLInputElement) {
            search2.value = "";
            this.filterCursorOptions(dropdown2, "");
            setTimeout(() => search2.focus(), 0);
          }
        }
      }, "setOpen");
      const summary = h(
        "button",
        {
          type: "button",
          class: "et-cursor-summary",
          "aria-expanded": "false",
          "aria-controls": listId,
          onClick: /* @__PURE__ */ __name((event) => {
            event.stopPropagation();
            const btn = (
              /** @type {HTMLButtonElement} */
              event.currentTarget
            );
            const picker = btn.closest(".et-cursor-picker");
            if (!(picker instanceof HTMLElement)) return;
            const willOpen = btn.getAttribute("aria-expanded") !== "true";
            this._panelEl?.querySelectorAll?.(".et-cursor-picker").forEach((el) => {
              if (el instanceof HTMLElement && el !== picker) setOpen(el, false);
            });
            setOpen(picker, willOpen);
          }, "onClick")
        },
        preview(current.id, "et-cursor-preview et-cursor-preview--lg"),
        h(
          "span",
          { class: "et-cursor-summary-text" },
          h("span", { class: "et-cursor-summary-name" }, current.label),
          h("span", { class: "et-cursor-summary-meta" }, current.css || "custom")
        ),
        h("span", { class: "et-cursor-summary-chev", "aria-hidden": "true" }, "\u25BE")
      );
      const search = h("input", {
        type: "search",
        class: "et-cursor-search",
        placeholder: "Search cursors\u2026",
        autocomplete: "off",
        spellcheck: "false",
        onInput: /* @__PURE__ */ __name((event) => {
          const input = (
            /** @type {HTMLInputElement} */
            event.target
          );
          const dropdown2 = input.closest(".et-cursor-dropdown");
          if (dropdown2 instanceof HTMLElement) this.filterCursorOptions(dropdown2, input.value);
        }, "onInput"),
        onKeydown: /* @__PURE__ */ __name((event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            const picker = (
              /** @type {HTMLElement | null} */
              /** @type {HTMLElement} */
              event.currentTarget.closest(".et-cursor-picker")
            );
            if (picker) setOpen(picker, false);
            return;
          }
          if (event.key !== "Enter") return;
          const input = (
            /** @type {HTMLInputElement} */
            event.currentTarget
          );
          const dropdown2 = input.closest(".et-cursor-dropdown");
          if (!(dropdown2 instanceof HTMLElement)) return;
          const first = this.firstVisibleCursorOption(dropdown2);
          if (!first) return;
          event.preventDefault();
          const id = first.dataset.cursorId;
          if (id) this.selectCursorSetting(name, id);
        }, "onKeydown"),
        onClick: /* @__PURE__ */ __name((event) => event.stopPropagation(), "onClick")
      });
      const grid = h("div", {
        id: listId,
        class: "et-cursor-grid",
        role: "listbox",
        "aria-label": label
      }, ...CURSOR_OPTIONS.map((opt) => h(
        "button",
        {
          type: "button",
          class: `et-cursor-option${opt.id === currentId ? " is-selected" : ""}`,
          role: "option",
          "aria-selected": opt.id === currentId ? "true" : "false",
          "data-cursor-id": opt.id,
          "data-cursor-label": `${opt.id} ${opt.label} ${opt.css || "custom"}`,
          title: opt.css ? `${opt.label} (${opt.css})` : opt.label,
          onMousedown: /* @__PURE__ */ __name((event) => {
            if (event.button !== 0) return;
            event.preventDefault();
            event.stopPropagation();
            this.selectCursorSetting(name, opt.id);
          }, "onMousedown"),
          onClick: /* @__PURE__ */ __name((event) => {
            event.preventDefault();
            event.stopPropagation();
          }, "onClick")
        },
        preview(opt.id, "et-cursor-preview et-cursor-preview--tile"),
        h("span", { class: "et-cursor-option-name" }, opt.label)
      )));
      const dropdown = h("div", {
        class: "et-cursor-dropdown",
        hidden: true,
        onClick: /* @__PURE__ */ __name((event) => event.stopPropagation(), "onClick")
      }, search, grid);
      return h(
        "div",
        { class: "et-cursor-row" },
        h("div", { class: "et-cursor-label" }, label),
        h("div", { class: "et-cursor-picker" }, summary, dropdown)
      );
    }
    /** @param {HTMLElement} panelEl @param {string} query */
    filterCursorOptions(panelEl, query) {
      const q = String(query || "").trim().toLowerCase();
      for (const btn of panelEl.querySelectorAll(".et-cursor-option")) {
        if (!(btn instanceof HTMLElement)) continue;
        const hay = String(btn.dataset.cursorLabel || "").toLowerCase();
        btn.hidden = Boolean(q) && !hay.includes(q);
      }
    }
    // ------------------------------------------------------------------
    // CSS
    // ------------------------------------------------------------------
    getCSS() {
      return `
			${ET_CSS_VERSION_MARKER}
			body.${BODY_CLASS} {
				--et-css-version: ${PLUGIN_VERSION};
			}

			/* ============================================================
			   Indent mode \u2014 chrome-less text rows get the 26px marker slot
			   bullet rows have, so text aligns to the bulleted column.
			   ============================================================ */

			body.${INDENT_BODY_CLASS} .panel .listitem-text > .line-div {
				padding-left: 26px;
			}

			/* ============================================================
			   Caret color \u2014 expanded \u25BC wears the indent guide's own color
			   token (the bright native glyph reads as noise); folded \u25B8
			   stays solid text color. Geometry stays native.
			   ============================================================ */

			body.${BODY_CLASS} .listitem:not(.listitem-folded) > ${CHEVRON_SELECTOR},
			body.${BODY_CLASS} .listitem > ${CHEVRON_SELECTOR}[aria-expanded="true"] {
				opacity: 1 !important;
				color: var(--ed-indent-line-color, rgba(255, 255, 255, 0.3)) !important;
			}
			body.${BODY_CLASS} .listitem-folded > ${CHEVRON_SELECTOR},
			body.${BODY_CLASS} .listitem > ${CHEVRON_SELECTOR}[aria-expanded="false"] {
				opacity: 1 !important;
				color: var(--text-default, currentColor) !important;
			}
			body.${BODY_CLASS} .listitem > ${CHEVRON_SELECTOR}:hover {
				color: var(--text-default, currentColor) !important;
			}

			body.${BODY_CLASS}[data-et-persistent-caret="false"] .listitem-folded:not(:hover) > ${CHEVRON_SELECTOR} {
				opacity: 0 !important;
			}

			body.${BODY_CLASS}[data-et-expanded-caret="false"] .listitem:not(.listitem-folded):not(:hover) > ${CHEVRON_SELECTOR} {
				opacity: 0 !important;
			}


			/* ============================================================
			   Hover wash \u2014 off by default (toggle re-enables the native
			   background); color can still light up.
			   ============================================================ */

			body.${BODY_CLASS}[data-et-hover-bg="false"] .listitem > ${CHEVRON_SELECTOR},
			body.${BODY_CLASS}[data-et-hover-bg="false"] .listitem > ${CHEVRON_SELECTOR}:hover,
			body.${BODY_CLASS}[data-et-hover-bg="false"] .listitem > ${CHEVRON_SELECTOR}:active {
				background: transparent !important;
				background-color: transparent !important;
			}
			body.${BODY_CLASS}[data-et-hover-bg="false"] ${LIVE_HANDLE_SELECTOR},
			body.${BODY_CLASS}[data-et-hover-bg="false"] ${LIVE_HANDLE_SELECTOR}:hover,
			body.${BODY_CLASS}[data-et-hover-bg="false"] ${LIVE_HANDLE_SELECTOR}:active,
			body.${BODY_CLASS}[data-et-hover-bg="false"] ${LIVE_HANDLE_SELECTOR}::before,
			body.${BODY_CLASS}[data-et-hover-bg="false"] ${LIVE_HANDLE_SELECTOR}:hover::before,
			body.${BODY_CLASS}[data-et-hover-bg="false"] ${LIVE_HANDLE_SELECTOR}:active::before {
				background: transparent !important;
				background-color: transparent !important;
			}

			/* ============================================================
			   Tooltip suppression \u2014 JS strips tooltip attrs at hover time;
			   this catches anything that still materializes.
			   ============================================================ */

			body.${BODY_CLASS} .tooltip-element.tooltip-drag-handle,
			body.${BODY_CLASS} .tooltip-drag-handle {
				display: none !important;
			}

			/* ============================================================
			   Handle cursors \u2014 match click semantics per mode/alt state.
			   ============================================================ */

			body.${BODY_CLASS}:not([data-et-alt-click-menu="true"]) ${LIVE_HANDLE_SELECTOR},
			body.${BODY_CLASS}:not([data-et-alt-click-menu="true"]) ${LIVE_HANDLE_SELECTOR}:hover,
			body.${BODY_CLASS}:not([data-et-alt-click-menu="true"]) ${LIVE_HANDLE_SELECTOR} * {
				cursor: var(--et-cursor-menu, pointer) !important;
			}
			body.${BODY_CLASS}:not([data-et-alt-click-menu="true"])[data-et-alt="true"] ${LIVE_HANDLE_SELECTOR},
			body.${BODY_CLASS}:not([data-et-alt-click-menu="true"])[data-et-alt="true"] ${LIVE_HANDLE_SELECTOR}:hover,
			body.${BODY_CLASS}:not([data-et-alt-click-menu="true"])[data-et-alt="true"] ${LIVE_HANDLE_SELECTOR} * {
				cursor: var(--et-cursor-zoom, zoom-in) !important;
			}
			body.${BODY_CLASS}[data-et-alt-click-menu="true"] ${LIVE_HANDLE_SELECTOR},
			body.${BODY_CLASS}[data-et-alt-click-menu="true"] ${LIVE_HANDLE_SELECTOR}:hover,
			body.${BODY_CLASS}[data-et-alt-click-menu="true"] ${LIVE_HANDLE_SELECTOR} * {
				cursor: var(--et-cursor-zoom, zoom-in) !important;
			}
			body.${BODY_CLASS}[data-et-alt-click-menu="true"][data-et-alt="true"] ${LIVE_HANDLE_SELECTOR},
			body.${BODY_CLASS}[data-et-alt-click-menu="true"][data-et-alt="true"] ${LIVE_HANDLE_SELECTOR}:hover,
			body.${BODY_CLASS}[data-et-alt-click-menu="true"][data-et-alt="true"] ${LIVE_HANDLE_SELECTOR} * {
				cursor: var(--et-cursor-menu, pointer) !important;
			}
			body.${BODY_CLASS}[data-et-pressing="true"] ${LIVE_HANDLE_SELECTOR},
			body.${BODY_CLASS}[data-et-pressing="true"] ${LIVE_HANDLE_SELECTOR}:hover,
			body.${BODY_CLASS}[data-et-pressing="true"] ${LIVE_HANDLE_SELECTOR} * {
				cursor: grabbing !important;
			}

			/* ============================================================
			   Settings panel (shared settings-ui handles the rest).
			   ============================================================ */

			.${ROOT_CLASS}-panel .tps-section-body { gap: 0; }
			.${ROOT_CLASS}-panel .tps-opt {
				align-items: center;
				padding: 8px 10px;
			}
			.${ROOT_CLASS}-panel .tps-opt > input[type="checkbox"] {
				align-self: center;
				width: 16px;
				height: 16px;
			}
			.${ROOT_CLASS}-panel .tps-num-grid {
				padding: 6px 10px;
			}
			.${ROOT_CLASS}-panel .et-cursor-row {
				display: grid;
				grid-template-columns: minmax(0, 1fr);
				gap: 6px;
				padding: 10px 2px;
				border-bottom: 1px solid var(--border-default, rgba(127, 127, 127, 0.1));
			}
			.${ROOT_CLASS}-panel .et-cursor-row:last-child { border-bottom: none; }
			.${ROOT_CLASS}-panel .et-cursor-label {
				font-size: 12.5px;
				line-height: 1.35;
				font-weight: 600;
			}
			.${ROOT_CLASS}-panel .et-cursor-picker {
				position: relative;
				display: flex;
				flex-direction: column;
				gap: 6px;
				min-width: 0;
			}
			.${ROOT_CLASS}-panel .et-cursor-summary {
				display: grid;
				grid-template-columns: 36px minmax(0, 1fr) auto;
				gap: 10px;
				align-items: center;
				width: 100%;
				box-sizing: border-box;
				padding: 8px 10px;
				border: 1px solid var(--border-default, rgba(127, 127, 127, 0.16));
				border-radius: 8px;
				background: transparent;
				color: inherit;
				cursor: pointer;
				text-align: left;
			}
			.${ROOT_CLASS}-panel .et-cursor-summary-text {
				display: flex;
				flex-direction: column;
				gap: 1px;
				min-width: 0;
			}
			.${ROOT_CLASS}-panel .et-cursor-summary-name,
			.${ROOT_CLASS}-panel .et-cursor-option-name {
				font-size: 12px;
				line-height: 1.25;
			}
			.${ROOT_CLASS}-panel .et-cursor-summary-meta {
				font-size: 10.5px;
				color: var(--text-muted, color-mix(in srgb, currentColor 62%, transparent));
			}
			.${ROOT_CLASS}-panel .et-cursor-summary-chev {
				opacity: 0.55;
				font-size: 11px;
			}
			.${ROOT_CLASS}-panel .et-cursor-dropdown {
				display: flex;
				flex-direction: column;
				gap: 8px;
				padding: 8px;
				border: 1px solid var(--border-default, rgba(127, 127, 127, 0.16));
				border-radius: 10px;
				background: var(--panel-bg-color, var(--bg-default, transparent));
				box-shadow: 0 10px 28px rgba(0, 0, 0, 0.28);
				z-index: 5;
			}
			.${ROOT_CLASS}-panel .et-cursor-dropdown[hidden] { display: none !important; }
			.${ROOT_CLASS}-panel .et-cursor-search {
				width: 100%;
				box-sizing: border-box;
				padding: 7px 10px;
				font-size: 12.5px;
				border: 1px solid var(--border-default, rgba(127, 127, 127, 0.16));
				border-radius: 7px;
				background: transparent;
				color: inherit;
			}
			.${ROOT_CLASS}-panel .et-cursor-search::placeholder {
				color: var(--text-muted, color-mix(in srgb, currentColor 55%, transparent));
			}
			.${ROOT_CLASS}-panel .et-cursor-grid {
				display: grid;
				grid-template-columns: repeat(4, minmax(0, 1fr));
				gap: 6px;
				max-height: 280px;
				overflow: auto;
				padding: 2px;
			}
			.${ROOT_CLASS}-panel .et-cursor-option {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 5px;
				width: 100%;
				box-sizing: border-box;
				padding: 8px 4px 6px;
				border: 1px solid transparent;
				border-radius: 8px;
				background: transparent;
				color: inherit;
				cursor: pointer;
				text-align: center;
			}
			.${ROOT_CLASS}-panel .et-cursor-option:hover,
			.${ROOT_CLASS}-panel .et-cursor-option.is-selected {
				border-color: var(--border-default, rgba(127, 127, 127, 0.22));
				background: var(--bg-hover, rgba(127, 127, 127, 0.08));
			}
			.${ROOT_CLASS}-panel .et-cursor-option[hidden] {
				display: none !important;
				pointer-events: none !important;
			}
			.${ROOT_CLASS}-panel .et-cursor-option-name {
				max-width: 100%;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				font-size: 10.5px;
				opacity: 0.82;
			}
			.${ROOT_CLASS}-panel .et-cursor-preview {
				width: 28px;
				height: 28px;
				object-fit: contain;
				image-rendering: auto;
				background: transparent;
				border-radius: 0;
				padding: 0;
				box-sizing: border-box;
			}
			.${ROOT_CLASS}-panel .et-cursor-preview--lg {
				width: 32px;
				height: 32px;
			}
			.${ROOT_CLASS}-panel .et-cursor-preview--tile {
				width: 36px;
				height: 36px;
			}
		`;
    }
  };
  return __toCommonJS(plugin_exports);
})();
var Plugin = plugins.Plugin;
