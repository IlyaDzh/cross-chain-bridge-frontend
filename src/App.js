import React from "react";

import {
    Header,
    Footer,
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
            <Footer />
        </div>

        <TransferDialog />
    </div>
);
