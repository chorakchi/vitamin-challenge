import { NextApiRequest, NextApiResponse } from "next";
import { formatter } from "helpers/formatter";
// import EATData from "./EAT.json";
// import CAKEData from "./CAKE.json";
// import PZZAData from "./PZZA.json";
const keyAPI = process.env.REACT_APP_AUTHORIZATION_TOKEN;
const url = (index) =>
  `https://financialmodelingprep.com/api/v3/historical-price-full/${index}?from=2017-01-01&to=2021-06-01&apikey=${keyAPI}`;

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
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

  const mappedData = {
    EAT: formatter(EATData["historical"]),
    CAKE: formatter(CAKEData["historical"]),
    PZZA: formatter(PZZAData["historical"]),
  };

  res.status(200).json(mappedData);
};

export default handler;
