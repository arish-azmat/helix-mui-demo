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
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    width: '90%',
                },
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    height: '30px',
                    fontSize: '14px'
                },
                multiline: {
                    height: 'unset'
                }

            }
        },
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: 'h1',
                    h2: 'h2',
                    h3: 'h3',
                    h4: 'h4',
                    h5: 'h5',
                    h6: 'h6',
                    title: 'h1',
                    subtitle: 'p',
                    label: 'p',

                },

            },
            styleOverrides: {
                label: {
                    marginBottom: '5px',
                    marginTop: '20px',
                    color: "gray",
                    fontSize: 13
                }
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    padding: '0px',
                    borderRadius: '20px'
                },

                inputRoot: {
                    padding: '0px !important',
                    borderRadius: '20px'
                },
                popupIndicator: {
                    background: '#fff'
                }
            }
        }

    }
});

export default theme;