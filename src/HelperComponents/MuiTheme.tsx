//Solving material-ui not keeping up with react:
import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
    typography: {
        fontFamily: ['"Encode Sans Expanded"', "Open Sans"].join(","),
        button: {
            textTransform: "none",
        },
    },
    overrides: {
        MuiButtonBase: { root: { margin: "" } },
    },
});
