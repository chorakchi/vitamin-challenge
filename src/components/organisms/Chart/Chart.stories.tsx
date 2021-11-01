import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Chart } from "./Chart";
import {mockData } from './Chart.mock'

export default {
  title: "Organisms/Chart",
  component: Chart,
} as ComponentMeta<typeof Chart>;

const Template: ComponentStory<typeof Chart> = (args) => (
  <Chart {...args} />
);

export const Chart_ = Template.bind({});
Chart_.args = {
  ...mockData
}