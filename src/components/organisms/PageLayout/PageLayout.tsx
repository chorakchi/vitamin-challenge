import { StyledWrapper } from "./PageLayout.styled";
import { PageLayoutProps } from "./PageLayout.interface";
import { Stack, Typography } from "components";
export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  title,
  description,
  onChangeRoute,
  currentPath,
  ...props
}: PageLayoutProps) => {
  return (
    <StyledWrapper {...props}>
      <Stack direction="column" className="">
        <Typography variant="headline_xl">{title}</Typography>
        <Typography>{description}</Typography>
        <Stack direction="row" className="mainBlock">
          {children}
        </Stack>
      </Stack>
    </StyledWrapper>
  );
};
