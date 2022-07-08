import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
      primary: {
        main: "#0000c9",
      },
    },
    components:{
        MuiButton:{
           styleOverrides:{           
           }
        }
    }
  });

  export default theme;