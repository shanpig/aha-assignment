import "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    disabled: PaletteColor;
    default: PaletteColor;
  }
  interface PaletteOptions {
    disabled?: PaletteColorOptions;
    default?: PaletteColorOptions;
  }
}
