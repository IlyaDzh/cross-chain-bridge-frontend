import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

import { DetailsItem } from "./DetailsItem";

const useStyles = makeStyles(theme => ({
    transactionDetailsList: {
        margin: "48px 0",
        [theme.breakpoints.down("xs")]: {
            margin: "25px 0"
        }
    }
}));

const _TransactionDetails = () => {
    const classes = useStyles();

    return (
        <>
            <Typography variant="h1" align="center">
                Transaction Details
            </Typography>
            <div className={classes.transactionDetailsList}>
                <DetailsItem title="Source Blockchain" />
                <DetailsItem title="Target Blockchain" />
            </div>
        </>
    );
};

export const TransactionDetails = _TransactionDetails;
