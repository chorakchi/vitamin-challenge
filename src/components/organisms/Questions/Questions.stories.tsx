import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Questions } from "./Questions";
export default {
  title: "Organisms/Questions",
  component: Questions,
} as ComponentMeta<typeof Questions>;

const Template: ComponentStory<typeof Questions> = (args) => (
  <Questions {...args} />
);

export const Questions_ = Template.bind({});
Questions_.args = {};
