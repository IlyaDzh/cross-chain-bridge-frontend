import React from "react";
import { inject, observer } from "mobx-react";
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

const _TransactionDetails = ({ transactions, tempTransferForm }) => {
    const classes = useStyles();

    return (
        transactions && (
            <>
                <Typography variant="h1" align="center">
                    Transaction Details
                </Typography>
                <div className={classes.transactionDetailsList}>
                    <DetailsItem
                        title="Source Blockchain"
                        data={transactions.txOut}
                        linkTo={tempTransferForm.fromNode}
                    />
                    <DetailsItem
                        title="Target Blockchain"
                        data={transactions.txIn}
                        linkTo={tempTransferForm.toNode}
                    />
                </div>
            </>
        )
    );
};

const mapMobxToProps = ({ transfer }) => ({
    transactions: transfer.transactions,
    tempTransferForm: transfer.tempTransferForm
});

export const TransactionDetails = inject(mapMobxToProps)(
    observer(_TransactionDetails)
);
