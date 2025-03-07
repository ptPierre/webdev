import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss"
import extratorUna from '@una-ui/extractor-vue-script'

import presetUna from '@una-ui/preset'
import prefixes from '@una-ui/preset/prefixes'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
      scale: 1.2,
      warn: true,
    }),
    presetUna(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: "DM Sans",
        serif: "DM Serif Display",
        mono: "DM Mono",
      },
    }),
  ],
  shortcuts: {
    "btn": "rounded px-4 py-2 m-2 border border-white",
    "btn-primary": "btn bg-primary text-white",
    "btn-secondary": "btn bg-secondary text-white",
    "btn-tertiary": "btn bg-tertiary text-white",
    "btn-accent": "btn bg-accent text-white",
    "btn-danger": "btn bg-danger text-white",
    "btn-warning": "btn bg-warning text-white",
    "btn-success": "btn bg-success text-white",
    "btn-info": "btn bg-info text-white",
    "btn-light": "btn bg-light text-black",
    "btn-dark": "btn bg-dark text-white",
    "btn-link": "btn text-link",
    "btn-sm": "btn text-sm",
    "btn-md": "btn text-md",
    "btn-lg": "btn text-lg",
    "btn-xl": "btn text-xl",
    "btn-2xl": "btn text-2xl",
    "btn-3xl": "btn text-3xl",
    "btn-4xl": "btn text-4xl",
  },
  extractors: [
    extratorUna({
      prefixes,
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: "prose m-auto text-left".split(" "),
})
