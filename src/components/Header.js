import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

import headerBackground from "@/images/background.jpg";

const useStyles = makeStyles(theme => ({
    header: {
        background: `url(${headerBackground})`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down("xs")]: {
            height: "436px"
        }
    },
    headerTitle: {
        color: "#fff",
        [theme.breakpoints.down("xs")]: {
            lineHeight: "36px"
        }
    }
}));

export const Header = () => {
    const classes = useStyles();

    return (
        <header className={classes.header}>
            <Typography variant="h1" className={classes.headerTitle}>
                Cross-chain Bridge
            </Typography>
        </header>
    );
};
