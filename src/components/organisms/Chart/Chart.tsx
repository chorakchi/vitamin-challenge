import { StyledWrapper } from "./Chart.styled";
import { ChartProps } from "./Chart.interface";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartMore from "highcharts/highcharts-more";
import React, { useState } from "react";
import { optionsProvider } from "./Chart.helper";

export const Chart: React.FC<ChartProps> = ({
  items,
  ...props
}: ChartProps) => {
  const [highchartMoreLoaded, setHighchartMoreLoaded] = useState(false);
  setTimeout(() => {
    HighchartMore(Highcharts);
    setHighchartMoreLoaded(true);
  }, 0);
console.log('dd',optionsProvider(items))
  return (
    <StyledWrapper hidden= {!items.length}>
      {highchartMoreLoaded && (
        <HighchartsReact {...props} highcharts={Highcharts} options={optionsProvider(items)} />
      )}
    </StyledWrapper>
  );
};
