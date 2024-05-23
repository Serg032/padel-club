import { createTheme } from "@mui/material";
import { grey, red, deepPurple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
      dark: red[200],
      //   contrastText: deepPurple[900],
      light: grey[700],
    },
    secondary: {
      main: "#000000",
    },
  },
});

export default theme;
