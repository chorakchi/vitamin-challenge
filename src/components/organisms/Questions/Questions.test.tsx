import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { Questions } from "./Questions";

describe("Questions", () => {
  it("should render the Questions", () => {
    const subject = shallow(<Questions />);
    expect(subject).toHaveLength(1);
  });

  it("should render correctly and match to the Snapshot", () => {
    const subject = renderer.create(<Questions />).toJSON();
    expect(subject).toMatchSnapshot();
  });
});
