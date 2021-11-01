import { HTMLAttributes } from "react";

type inputProps = {
  onChange: ({ target: any }) => void;
};

export interface QuestionsProps extends HTMLAttributes<HTMLElement> {
  nameProps?: inputProps;
  earnProps?: inputProps;
  riskProps?: inputProps;
}
