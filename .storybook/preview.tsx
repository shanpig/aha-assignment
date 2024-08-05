import type { Preview } from "@storybook/react";

import "../src/app/globals.css";
import withTheme from "../src/providers/withTheme";

const preview: Preview = {
  decorators: [(story) => withTheme(story)],
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
