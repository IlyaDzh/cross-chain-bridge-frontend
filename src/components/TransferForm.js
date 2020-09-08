import React from "react";
import { inject, observer } from "mobx-react";
import { Button, Hidden, makeStyles } from "@material-ui/core";

import { TransferWallet } from "./TransferWallet";
import { ArrowsRightIcon } from "@/icons/ArrowsRightIcon";
import { ArrowsBottomIcon } from "@/icons/ArrowsBottomIcon";

const useStyles = makeStyles(theme => ({
    transferForm: {
        padding: "90px 0",
        [theme.breakpoints.down("sm")]: {
            padding: "48px 0"
        }
    },
    transferFormWallets: {
        display: "flex",
        marginBottom: "32px",
        [theme.breakpoints.down("sm")]: {
            display: "block",
            marginBottom: "48px"
        }
    },
    transferFormDivider: {
        position: "relative",
        margin: "0 64px",
        borderRight: `1px solid ${theme.palette.border.main}`,
        [theme.breakpoints.down("sm")]: {
            margin: 0,
            borderRight: "unset",
            borderBottom: `1px solid ${theme.palette.border.main}`
        }
    },
    transferFormDividerArrows: {
        boxSizing: "border-box",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: `1px solid ${theme.palette.border.main}`,
        borderRadius: "50%",
        height: "52px",
        width: "52px",
        background: "#fff",
        [theme.breakpoints.down("sm")]: {
            height: "35px",
            width: "35px"
        }
    },
    transferFormButton: {
        textAlign: "center"
    }
}));

const _TransferForm = ({ transferForm, setFormValue, doTransfer }) => {
    const classes = useStyles();

    return (
        <div className={classes.transferForm}>
            <div className={classes.transferFormWallets}>
                <TransferWallet
                    walletValue={transferForm.wallet_from}
                    onChangeInput={e => setFormValue("wallet_from", e.target.value)}
                    inputLabel="Wallet 1 Address"
                    withCaption
                />
                <div className={classes.transferFormDivider}>
                    <div className={classes.transferFormDividerArrows}>
                        <Hidden smDown>
                            <ArrowsRightIcon />
                        </Hidden>
                        <Hidden mdUp>
                            <ArrowsBottomIcon />
                        </Hidden>
                    </div>
                </div>
                <TransferWallet
                    walletValue={transferForm.wallet_to}
                    onChangeInput={e => setFormValue("wallet_to", e.target.value)}
                    inputLabel="Wallet 2 Address"
                />
            </div>
            <div className={classes.transferFormButton}>
                <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    onClick={doTransfer}
                >
                    Transfer
                </Button>
            </div>
        </div>
    );
};

const mapMobxToProps = ({ transfer }) => ({
    transferForm: transfer.transferForm,
    setFormValue: transfer.setFormValue,
    doTransfer: transfer.doTransfer
});

export const TransferForm = inject(mapMobxToProps)(observer(_TransferForm));
