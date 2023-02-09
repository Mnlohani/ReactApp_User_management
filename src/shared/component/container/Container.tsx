import Box from "@mui/material/Box";

interface Props {
  children: React.ReactNode;
}

export const Container: React.FC<Props> = ({ children }: Props) => (
  <Box width={0.9}>{children}</Box>
);
