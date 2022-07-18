import { createTheme, ThemeProvider } from "@mui/material";




const AppTheme = ({ children, type }) => {
    let theme = null;
    if (type === "mui") {  //process.env.REACT_APP_TYPE.trim() === "mui" for env 
        theme = createTheme({
            palette: {
                primary: {
                    main: "#eb0014",
                },
            },
            components: {
                MuiAppBar: {
                    styleOverrides: {
                        root: {
                            // background:'#00000087'
                        }
                    }
                },
                MuiButton: {
                    defaultProps: {
                        variant: 'contained'
                    }
                }
            }

        });
    } else if (type === "helix") {
        theme = createTheme({
            palette: {
                primary: {
                    main: "#0000c9",
                },
            },
            components: {
                MuiButton: {
                    styleOverrides: {
                        root: {
                            borderRadius: '20px'
                        }
                    },
                    defaultProps: {
                        variant: 'outlined'
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
                }, MuiBottomNavigation: {
                    styleOverrides: {
                        root: {
                            background: "#0000C9",
                        },

                    }
                },
                MuiBottomNavigationAction: {
                    styleOverrides: {
                        root: {
                            color: "#ffffffbf",
                            "&.Mui-selected": {
                                "color": "#fff"
                            }
                        },


                    }
                },
                MuiCard: {
                    styleOverrides: {
                        root: {
                            border: '1px solid #0000001a'
                        }
                    }
                }

            }
        });
    }
    return <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
}

export default AppTheme;