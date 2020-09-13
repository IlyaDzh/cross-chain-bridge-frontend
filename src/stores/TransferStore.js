import { observable, action } from "mobx";
import { axiosInstance } from "@/api/axios-instance";

const TRANSFER_FORM = {
    fromNode: "ETH",
    addressFrom: "",
    toNode: "BSC",
    addressTo: ""
};

const TRANSFER_FORM_ERRORS = {
    addressFrom: "",
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
    transferFormErrors = TRANSFER_FORM_ERRORS;

    @observable
    tempTransferForm = TRANSFER_FORM;

    @observable
    transferData = TRANSFER_DATA;

    @observable
    transactions = null;

    @observable
    transferDialogOpen = false;

    @observable
    pending = false;

    intervalTransactionId = undefined;
    intervalTransactions = undefined;

    @action
    doTransfer = () => {
        this.pending = true;
        this.transferFormErrors = TRANSFER_FORM_ERRORS;

        axiosInstance
            .post("/transfers", this.transferForm)
            .then(({ data }) => {
                this.tempTransferForm = { ...this.transferForm };
                this.resetTransactions();
                this.transferData = data;
                this.checkTransactionId();
                this.transferDialogOpen = true;
            })
            .catch(({ response }) => {
                if (response.data) {
                    this.transferFormErrors[response.data.field] =
                        response.data.message;
                }
            })
            .finally(() => {
                this.pending = false;
            });
    };

    @action
    checkTransactionId = () => {
        this.intervalTransactionId = setInterval(() => {
            axiosInstance
                .post("/transfers", this.tempTransferForm)
                .then(({ data }) => {
                    this.transferData = data;
                });
        }, 2500);
    };

    @action
    checkTransactionStatus = () => {
        this.intervalTransactions = setInterval(() => {
            if (this.transferData.id) {
                clearInterval(this.intervalTransactionId);
                axiosInstance
                    .get(`/transfers/${this.transferData.id}`)
                    .then(({ data }) => {
                        this.transactions = data;
                    });
            }
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
        this.transferFormErrors = TRANSFER_FORM_ERRORS;
        this.transferForm = TRANSFER_FORM;
        clearInterval(this.intervalTransactions);
        this.transactions = null;
    };
}
