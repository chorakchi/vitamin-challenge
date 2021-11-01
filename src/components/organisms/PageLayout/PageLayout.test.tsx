import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { PageLayout } from "./PageLayout";

describe("PageLayout", () => {
  it("should render the PageLayout", () => {
    const subject = shallow(<PageLayout />);
    expect(subject).toHaveLength(1);
  });

  it("should render correctly and match to the Snapshot", () => {
    const subject = renderer
      .create(<PageLayout onChangeRoute={() => {}} currentPath="" />)
      .toJSON();
    expect(subject).toMatchSnapshot();
  });
});
