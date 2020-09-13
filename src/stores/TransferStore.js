import { observable, action } from "mobx";
import { axiosInstance } from "@/api/axios-instance";

const TRANSFER_FORM = {
    fromNode: "ETH",
    addressFrom: "",
    toNode: "BSC",
    addressTo: ""
};

const TRANSFER_DATA = {
    id: "",
    poolAddress: ""
};

export class TransferStore {
    @observable
    transferForm = TRANSFER_FORM;

    @observable
    tempTransferForm = TRANSFER_FORM;

    @observable
    transferData = TRANSFER_DATA;

    @observable
    transactions = null;

    @observable
    transferDialogOpen = false;

    intervalTransactions = undefined;

    @action
    doTransfer = () => {
        axiosInstance
            .post("/transfers", this.transferForm)
            .then(({ data }) => {
                this.tempTransferForm = { ...this.transferForm };
                this.resetTransactions();
                this.transferData = data;
                this.transferDialogOpen = true;
            })
            .catch(() => {});
    };

    @action
    checkTransactionStatus = () => {
        this.intervalTransactions = setInterval(() => {
            axiosInstance
                .get(`/transfers/${this.transferData.id}`)
                .then(({ data }) => {
                    this.transactions = data;
                });
        }, 5000);
    };

    @action
    setFormValue = (key, value) => {
        this.transferForm[key] = value;
    };

    @action
    setTransferDialogOpen = transferDialogOpen => {
        this.transferDialogOpen = transferDialogOpen;
        if (!transferDialogOpen) {
            this.checkTransactionStatus();
        }
    };

    @action
    resetTransactions = () => {
        this.transferForm = TRANSFER_FORM;
        clearInterval(this.intervalTransactions);
        this.transactions = null;
    };
}
