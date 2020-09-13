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
                Our support will be glad to help you if any problems occurred. Make
                sure to supply us with as much detail about the problem as possible.
                Please contact us via{" "}
                <Link href="mailto:info@prometeus.io">email</Link> ,{" "}
                <Link
                    href="http://prometeus.io/contacts"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    website contact form
                </Link>{" "}
                or{" "}
                <Link
                    href="https://telegram.me/promnetwork"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    telegram
                </Link>
                .
            </Typography>
        </footer>
    );
};
