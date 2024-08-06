import type { Preview } from "@storybook/react";

import "../src/app/globals.css";
import withLocalizationProvider from "../src/providers/withLocalizationProvider";
import withTheme from "../src/providers/withTheme";

const preview: Preview = {
  decorators: [withTheme, withLocalizationProvider],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    backgrounds: {
      default: "black",
      values: [
        {
          name: "black",
          value: "#181818"
        },
        {
          name: "white",
          value: "#ffffff"
        }
      ]
    }
  }
};

export default preview;
