import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(2, 2),
        marginTop: "auto",
        backgroundColor: "#0c0c0c",
    },
    textFooter: {
        color: "#ffffff",
        textAlign: "center",
        fontWeight: 500,
    },
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Container maxWidth="sm">
                <Typography variant="body2" className={classes.textFooter}>
                    {"Copyright © "}
                    <Link color="inherit" href="https://mindkriauciunas.com/">
                        mindkriauciunas
                    </Link>{" "}
                    {new Date().getFullYear()}
                    {"."}
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;
