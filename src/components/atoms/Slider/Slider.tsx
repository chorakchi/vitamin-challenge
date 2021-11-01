import { SliderStyled } from "./Slider.styled";
import { SliderProps } from "./Slider.interface";
import { Typography } from "../Typography/Typography";
export const Slider: React.FC<SliderProps> = ({
  label = "Url:",
  error,
  ...props
}: SliderProps) => {
  return (
    <span>
      <Typography as="label" htmlFor={props.id}>
        {label}
        <br/>
        <SliderStyled type="range" {...props} />
      </Typography>
    </span>
  );
};
