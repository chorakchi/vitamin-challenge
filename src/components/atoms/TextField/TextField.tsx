import { TextFieldStyled } from './TextField.styled';
import { TextFieldProps } from './TextField.interface';
import { Typography } from '../Typography/Typography';
import { Stack } from 'components';
export const TextField: React.FC<TextFieldProps> = ({
  label="Label:",
  error,
    ...props
}: TextFieldProps) => {
    return (
        <Stack direction="column">
            <Typography as="label" htmlFor={props.id}>
                {label}
                <br/>
                <TextFieldStyled
                error={error}
                {...props}
                />
            </Typography>
        </Stack>
    );
};
