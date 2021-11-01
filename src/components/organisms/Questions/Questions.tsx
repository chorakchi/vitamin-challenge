import { StyledWrapper } from "./Questions.styled";
import { QuestionsProps } from "./Questions.interface";
import { TextField, Slider } from "components";

export const Questions: React.FC<QuestionsProps> = ({
  nameProps,
  earnProps,
  riskProps,
  ...props
}: QuestionsProps) => {
  return (
    <StyledWrapper {...props}>
      <TextField type="text" label="What’s your name?" {...nameProps} />
      <TextField type="number" label="How much do you earn per month?" {...earnProps} />
      <Slider min="2" max="10" step="2" label="What is your risk tolerance level?" {...riskProps} />
    </StyledWrapper>
  );
};
