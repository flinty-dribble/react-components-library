import React from "react";
import { ComponentMeta } from "@storybook/react";

import Heading from ".";

export default {
  title: "Example/MyHeading",
  component: Heading,
} as ComponentMeta<typeof Heading>;

export const Primary = () => <Heading />;
