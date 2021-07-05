import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./HelperComponents/MuiTheme";
import { CssBaseline } from "@material-ui/core";

ReactDOM.render(
    <React.StrictMode>
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <App />
        </MuiThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
