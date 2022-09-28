import React from "react";
import { ComponentMeta } from "@storybook/react";

import HideBlock from ".";

export default {
  title: "Example/MyBlock",
  component: HideBlock,

  parameters: {
    actions: {
      handles: ["click"],
    },
  },
} as ComponentMeta<typeof HideBlock>;

export const Primary = () => <HideBlock />;
