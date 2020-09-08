import { observable, action } from "mobx";

export class TransferStore {
    @observable
    transferFrom = "";

    @observable
    transferTo = "";

    @action
    resetTransferForm = () => {
        this.transferFrom = "";
        this.transferTo = "";
    };
}