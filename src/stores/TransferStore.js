import { observable, action } from "mobx";

const TRANSFER_FORM = {
    mainnet_type_from: "",
    wallet_from: "",
    mainnet_type_to: "",
    wallet_to: ""
};

export class TransferStore {
    @observable
    transferForm = TRANSFER_FORM;

    @observable
    transferDialogOpen = false;

    @action
    doTransfer = () => {
        console.log(this.transferForm);
        this.transferDialogOpen = true;
    };

    @action
    setFormValue = (key, value) => {
        this.transferForm[key] = value;
    };

    @action
    setTransferDialogOpen = transferDialogOpen => {
        this.transferDialogOpen = transferDialogOpen;
    };

    @action
    resetTransferForm = () => {
        this.transferForm = TRANSFER_FORM;
    };
}
