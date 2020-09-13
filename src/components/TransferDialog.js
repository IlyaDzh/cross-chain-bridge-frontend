import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
    Button,
    Dialog,
    DialogContent,
    DialogActions,
    DialogTitle,
    IconButton,
    Typography,
    makeStyles
} from "@material-ui/core";

import { CloseIcon } from "@/icons/CloseIcon";
import qrcode from "@/images/qrcode.jpg";

const useStyles = makeStyles(theme => ({
    dialogPaper: {
        margin: "15px",
        maxWidth: "460px",
        width: "100%"
    },
    transferDialog: {
        position: "relative",
        padding: "24px 32px 48px"
    },
    transferDialogCloseBtn: {
        position: "absolute",
        top: 0,
        right: 0,
        width: "40px",
        height: "40px",
        margin: "8px",
        lineHeight: 0
    },
    transferDialogTitle: {
        padding: 0
    },
    transferDialogContent: {
        padding: "15px 0 0"
    },
    textDescription: {
        marginBottom: "32px"
    },
    copyWrapper: {
        display: "flex",
        marginBottom: "32px"
    },
    disabledField: {
        padding: "6px 16px",
        border: `1px solid ${theme.palette.border.light}`,
        borderRadius: "5px 0 0 5px",
        overflow: "hidden"
    },
    copyBtn: {
        borderRadius: "0 5px 5px 0"
    },
    qrcodeWrapper: {
        maxWidth: "220px",
        margin: "0 auto 32px",
        "& > img": {
            width: "100%"
        }
    },
    dialogActionsButton: {
        display: "block",
        textAlign: "center",
        padding: 0
    }
}));

const _TransferDialog = ({ transferDialogOpen, setTransferDialogOpen }) => {
    const classes = useStyles();
    const [copied, setCopied] = useState(false);

    const hadleCloseDialog = () => {
        setTransferDialogOpen(false);
        setCopied(false);
    };

    return (
        <Dialog
            open={transferDialogOpen}
            onClose={hadleCloseDialog}
            classes={{
                paper: classes.dialogPaper
            }}
        >
            <div className={classes.transferDialog}>
                <IconButton
                    onClick={hadleCloseDialog}
                    className={classes.transferDialogCloseBtn}
                >
                    <CloseIcon />
                </IconButton>
                <DialogTitle
                    className={classes.transferDialogTitle}
                    disableTypography
                >
                    <Typography variant="h1" color="textSecondary">
                        Transfer
                    </Typography>
                </DialogTitle>
                <DialogContent className={classes.transferDialogContent}>
                    <Typography
                        classes={{ root: classes.textDescription }}
                        variant="body2"
                    >
                        Please copy wallet address or use QR code to make a
                        transaction
                    </Typography>
                    <div className={classes.copyWrapper}>
                        <div className={classes.disabledField}>
                            <Typography color="textSecondary" variant="body2" noWrap>
                                0xE082e567E35D8930DafEC2FBaa96fd88418718De
                            </Typography>
                        </div>
                        <CopyToClipboard
                            text="0xE082e567E35D8930DafEC2FBaa96fd88418718De"
                            onCopy={() => setCopied(true)}
                        >
                            <Button
                                classes={{ root: classes.copyBtn }}
                                color="primary"
                                variant="contained"
                                size="small"
                                disabled={copied}
                                disableElevation
                            >
                                {copied ? "Copied" : "Copy"}
                            </Button>
                        </CopyToClipboard>
                    </div>
                    <div className={classes.qrcodeWrapper}>
                        <img src={qrcode} alt="QR code" />
                    </div>
                </DialogContent>
                <DialogActions className={classes.dialogActionsButton}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={hadleCloseDialog}
                    >
                        Ok
                    </Button>
                </DialogActions>
            </div>
        </Dialog>
    );
};

const mapMobxToProps = ({ transfer }) => ({
    transferDialogOpen: transfer.transferDialogOpen,
    setTransferDialogOpen: transfer.setTransferDialogOpen
});

export const TransferDialog = inject(mapMobxToProps)(observer(_TransferDialog));
