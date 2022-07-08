import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#0000c9",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
            }
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: { minWidth: '35px' }
            }
        }
    }
});

export default theme;