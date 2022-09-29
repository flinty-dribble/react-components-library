import React from "react";
import { ComponentMeta } from "@storybook/react";

import Whitespace from ".";

export default {
  title: "Example/MyWhitespace",
  component: Whitespace,
} as ComponentMeta<typeof Whitespace>;

export const Primary = () => <Whitespace />;
