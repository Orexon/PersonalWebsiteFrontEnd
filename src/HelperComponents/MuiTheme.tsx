//Solving material-ui not keeping up with react:
import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
    typography: {
        button: {
            textTransform: "none",
        },
    },
    overrides: {
        MuiButtonBase: { root: { margin: "" } },
    },
});
