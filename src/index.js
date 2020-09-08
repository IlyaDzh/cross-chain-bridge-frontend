import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { MuiThemeProvider } from "@material-ui/core";

import * as serviceWorker from "@/serviceWorker";
import { store } from "@/stores";
import { App } from "@/App";
import { main } from "@/styles/material";
import "@/styles/index.scss";

ReactDOM.render(
    <Provider {...store}>
        <MuiThemeProvider theme={main}>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();
