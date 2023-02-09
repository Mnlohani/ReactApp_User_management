import Box from "@mui/material/Box";

interface Props {
  children: React.ReactNode;
}

export const ContentContainer: React.FC<Props> = ({ children }) => (
  <Box display={"flex"} height="100vh">
    {children}
  </Box>
);
