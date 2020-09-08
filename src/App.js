import React from "react";

import {
    Header,
    TransferForm,
    TransactionDetails,
    TransferDialog
} from "@/components";

export const App = () => (
    <div>
        <Header />

        <div className="container">
            <TransferForm />
            <TransactionDetails />
        </div>

        <TransferDialog />
    </div>
);
