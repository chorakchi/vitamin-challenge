import { ComponentStory, ComponentMeta } from "@storybook/react";
import { mockData } from "./QuestionsPage.mock";
import { QuestionsPage } from "./QuestionsPage";
// @ts-ignore
import readme from "./README.md";

export default {
  title: "templates/QuestionsPage",
  component: QuestionsPage,
  parameters: {
    backgrounds: {
      default: "light",
    },
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as ComponentMeta<typeof QuestionsPage>;

const Template: ComponentStory<typeof QuestionsPage> = (args) => <QuestionsPage {...args} />;

export const QuestionsPage_ = Template.bind({});
QuestionsPage_.args = mockData;
