import { QuestionsPage } from "components";
import { mockData as data } from "../src/components/templates/QuestionsPage/QuestionsPage.mock";
import { formatter } from "helpers/formatter";
const keyAPI = process.env.REACT_APP_AUTHORIZATION_TOKEN;
const url = (index) =>
  `https://financialmodelingprep.com/api/v3/historical-price-full/${index}?from=2017-01-01&to=2021-06-01&apikey=${keyAPI}`;

export default function Home(props) {
  return <QuestionsPage {...data} data={props.data} />;
}

// This function gets called at build time on server-side.
// It won't be called on client-side.
export async function getServerSideProps() {
  // Call an external API endpoint to get posts.
  let [resEATData, resCAKEData, resPZZAData] = await Promise.all([
    fetch(url("EAT")),
    fetch(url("CAKE")),
    fetch(url("PZZA")),
  ]);

  let [EATData, CAKEData, PZZAData] = await Promise.all([
    resEATData.json(),
    resCAKEData.json(),
    resPZZAData.json(),
  ]);

  const data = {
    EAT: formatter(EATData["historical"]),
    CAKE: formatter(CAKEData["historical"]),
    PZZA: formatter(PZZAData["historical"]),
  };

  // will receive `data` as a prop at build time
  return {
    props: {
      data,
    },
  };
}
