import React from "react";
import { ComponentMeta } from "@storybook/react";

import Text from ".";

export default {
  title: "Example/MyText",
  component: Text,
} as ComponentMeta<typeof Text>;

export const Primary = () => <Text />;
