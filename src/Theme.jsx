import { createTheme } from "@mui/material";
import { useGlobalContext } from "./Context";

export const theme = () =>
  createTheme({
    palette: {
      blue: {
        main: "rgb(0,0,255)",
        sub: "rgba(0,0,255,0.5)",
      },
      red: {
        main: "rgb(255,0,0)",
      },
      mode: "light",
    },
    typography: {
      fontSize: "10px",
    },
  });
