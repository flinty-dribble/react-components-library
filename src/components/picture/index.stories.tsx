import React from "react";
import { ComponentMeta } from "@storybook/react";

import Picture from ".";

export default {
  title: "Example/MyPicture",
  component: Picture,
} as ComponentMeta<typeof Picture>;

export const Primary = () => <Picture />;
