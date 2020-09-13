import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
    overrides: {
        MuiButton: {
            disableElevation: true,
            outlinedPrimary: {
                border: "1px solid #FF5C01"
            },
            contained: {
                boxShadow: "none",
                "&:hover": {
                    boxShadow: "none"
                },
                "&:active": {
                    boxShadow: "none"
                }
            },
            containedPrimary: {
                color: "#fff"
            },
            sizeLarge: {
                maxWidth: "220px",
                width: "100%",
                height: "60px",
                fontSize: "24px"
            },
            sizeSmall: {
                maxWidth: "82px",
                width: "100%",
                height: "32px",
                fontSize: "15px"
            }
        }
    },
    palette: {
        primary: {
            main: "#fb6c1c"
        },
        secondary: {
            main: "#131315"
        },
        text: {
            primary: "#fb6c1c",
            secondary: "#7a7a81"
        },
        border: {
            main: "#7a7a81",
            light: "#e9e9e9"
        },
        background: {
            main: "#b5b5b5"
        }
    },
    typography: {
        allVariants: {
            color: "#131315"
        },
        button: {
            textTransform: "none"
        },
        h1: {
            fontSize: "40px",
            lineHeight: "52px",
            "@media (max-width: 960px)": {
                fontSize: "28px"
            }
        },
        h2: {
            fontSize: "24px",
            lineHeight: "31px"
        },
        h3: {
            fontSize: "22px"
        },
        h4: {
            fontSize: "18px"
        },
        body2: {
            fontSize: "15px",
            lineHeight: "18px",
            "@media (max-width: 960px)": {
                fontSize: "14px"
            }
        },
        caption: {
            fontSize: "12px",
            color: "#7a7a81"
        },
        fontFamily: "Suisse Intl Regular"
    }
});
