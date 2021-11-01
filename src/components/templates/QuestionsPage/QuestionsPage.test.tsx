import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { QuestionsPage } from "./QuestionsPage";
import { mockData } from "./QuestionsPage.mock";

describe("QuestionsPage", () => {
  it("should render the QuestionsPage", () => {
    const subject = shallow(
      <QuestionsPage {...mockData}
      />
    );
    expect(subject).toHaveLength(1);
  });

  it("should render correctly and match to the Snapshot", () => {
    const subject = renderer
      .create(
        <QuestionsPage {...mockData}
        />
      )
      .toJSON();
    expect(subject).toMatchSnapshot();
  });
});
