import { useState } from "react";
import { theme } from "@/theme";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ContentContainer, Container } from "@/shared/component/container";
import { Drawer } from "@/shared/component/drawer";
import { Navigation } from "@/shared/component/navigation";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props): JSX.Element => {
  const [mode] = useState("light");
  const customTheme = theme(mode);

  return (
    <ThemeProvider theme={customTheme}>
      <ContentContainer>
        <Drawer />
        <Container>
          <Navigation />
          <CssBaseline />
          {children}
        </Container>
      </ContentContainer>
    </ThemeProvider>
  );
};
