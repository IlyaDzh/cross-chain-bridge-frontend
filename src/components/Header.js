import React from "react";
import { Typography, Link, makeStyles } from "@material-ui/core";

import { PrometeusIcon } from "@/icons/PrometeusIcon";
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
    headerInner: {
        textAlign: "center"
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
            <div className={classes.headerInner}>
                <Link
                    href="http://prometeus.io/"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <PrometeusIcon />
                </Link>
                <Typography variant="h1" className={classes.headerTitle}>
                    Cross-chain Bridge
                </Typography>
            </div>
        </header>
    );
};
