import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Slider } from "./Slider";

export default {
  title: "Atoms/Slider",
  component: Slider,
  parameters: {
    docs: {
      description: {
        component:
          `Slider let users enter and edit range number.They typically appear in forms and dialogs.
                <br/>` +
          `The Slider  component is a complete form control including a label, input. <br/>` +
          `<br/> <br/> <h5> Form props:</h5>` +
          " Standard form attributes are supported e.g. ```required```, ```disabled```, ```type```, etc. <br/> <br/>"
      },
    },
    backgrounds: {
      default: "light",
    },
  },
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => (
  <Slider {...args} />
);

export const Slider_ = Template.bind({});
Slider_.args = {};
