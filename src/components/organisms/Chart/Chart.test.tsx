import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { Chart } from "./Chart";
import { mockData } from "./Chart.mock";

describe("Chart", () => {
  it("should render the Chart", () => {
    const subject = shallow(
      <Chart {...mockData}/>
    );
    expect(subject).toHaveLength(1);
  });

  it("should render correctly and match to the Snapshot", () => {
    const subject = renderer
      .create(
        <Chart {...mockData}/>
      )
      .toJSON();
    expect(subject).toMatchSnapshot();
  });
});
