import React from "react";
import { Typography, Link, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    footer: {
        padding: "25px 0"
    },
    footerDesc: {}
}));

export const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography variant="h4" className={classes.footerDesc}>
                In case of any problems, write to the{" "}
                <Link
                    href="https://telegram.me/ilyadz"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    telegram
                </Link>{" "}
                or to the{" "}
                <Link
                    href="http://prometeus.io/"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    prometeus.io
                </Link>
            </Typography>
        </footer>
    );
};
