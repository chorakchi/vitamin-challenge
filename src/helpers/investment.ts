
  import { useState } from "react";

export const investment = ({data, shareVales}) => {
    let sum = 0;
    return Object.keys(data).map((k0) => {
      sum = 0;
      return {
        name: k0,
        data: Object.keys(data[k0]).map((k) => {
          sum = sum + shareVales[k0] / data[k0][k];
          return [ k,  parseFloat ((sum * data[k0][k]).toFixed(2)) ];
        }),
      };
    })
  };


export default function useInvestment(
) {
  const [result, setResult] = useState(null);

  return [
    result,
    (props) => {
      const resultTemp = investment(props);
      setResult(resultTemp);
    },
  ];
}