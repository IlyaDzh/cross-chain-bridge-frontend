import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
    palette: {
        primary: {
            main: "#1885ea"
        },
        secondary: {
            main: "#17e3b2"
        },
        text: {
            primary: "#071c2f",
            secondary: "#484d51"
        },
        background: {
            main: "#deeff7"
        },
        error: {
            main: "#f33f17"
        },
        success: {
            main: "#17e3b2"
        }
    },
    typography: {
        h1: {
            fontSize: "40px",
            fontWeight: 700
        },
        h2: {
            fontSize: "24px",
            fontWeight: 400
        },
        h3: {
            fontSize: "22px"
        },
        subtitle1: {
            fontWeight: "bold"
        },
        body2: {
            fontSize: "16px"
        },
        caption: {
            color: "#484d51"
        },
        fontFamily: "Overpass"
    }
});