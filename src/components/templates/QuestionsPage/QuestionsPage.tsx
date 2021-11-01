import { QuestionsPageProps } from "./QuestionsPage.interface";
import { PageLayout, Questions, Chart, Stack, Typography } from "components";
import { useCallback, useState } from "react";
import useInvestment from "helpers/investment";
import { shares } from "helpers/shares";

// Create our number formatter.
var formatter = (num) => (num.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
}))

export const QuestionsPage: React.FC<QuestionsPageProps> = ({
  data,
  description,
  ...props
}) => {
  const [name, setName] = useState("");
  const [earn, setEarn] = useState();
  const [risk, setRisk] = useState(6);
  const shareVales = shares({
    risk: risk,
    contribution: ((earn || 0) / 100) * 15,
  });
  const [result,calcInvestment] = useInvestment();

  const onChangeName = useCallback(
    (e) => {
        // Set the component's new state based on the user's input
        setName(e.target.value);
    },
    [
        /* necessary deps */
        name,
    ]
);

const onChangeEarn = useCallback(
  ({ target }) => {
      // Set the component's new state based on the user's input
      setEarn(target.value);
      calcInvestment({ data, shareVales })
  },
  [
      /* necessary deps */
      earn,
  ]
);

const onChangeRisk = useCallback(
  ({ target }) => {
      // Set the component's new state based on the user's input
      setRisk(target.value);
      calcInvestment({ data, shareVales })
  },
  [
      /* necessary deps */
      risk,
  ]
);

  return (
    <PageLayout {...props} description={<>{description}</>}>
      <Stack direction="column">
        <Questions
          nameProps={{
            onChange: onChangeName
          }}
          earnProps={{
            onChange: onChangeEarn
          }}
          riskProps={{
            onChange: onChangeRisk
          }}
        />
        {earn && (
          <>
            <Typography bold>Risk Level: {risk}</Typography>
            <Typography bold>
              Monthly contribution: {(((earn || 0) / 100) * 15).toFixed(2)}
            </Typography>
            <br />
            {result.map((item) => (
              <Typography>
                {item.name + " : " + formatter(item.data[item.data.length - 1][1])}
              </Typography>
            ))}
          </>
        )}
      </Stack>
      {earn ? <Chart items={result} /> : ""}
    </PageLayout>
  );
};
