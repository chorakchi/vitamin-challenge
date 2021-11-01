import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import {Slider} from "./Slider";

describe("Slider", () => {
  it("should render the Slider", () => {
    const subject = shallow(<Slider />);
    expect(subject).toHaveLength(1);
  });

  it("should render correctly and match to the Snapshot", () => {
    const subject = renderer.create(<Slider />).toJSON();
    expect(subject).toMatchSnapshot();
  });
});