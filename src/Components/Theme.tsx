import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    background: "#1F1F1F",
    surface: "#242424",
    primary: "#716fb2",
    onprimary: "#01001e",
  },
  fonts: "Inter",
  boxShadow: " 4px 12px 24px rgba(0, 0, 0, 0.25)",
};

interface Props {
  children: React.ReactNode;
}

const Theme: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
