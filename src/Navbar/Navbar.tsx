import React, { useState } from "react";
import {
    Container,
    Grid,
    Hidden,
    IconButton,
    List,
    ListItem,
    ListItemText,
    makeStyles,
    Toolbar,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { Link as RouterDom, NavLink } from "react-router-dom";
//RouterDom must not be removed even if not used,without it component doesn't recognize "activeClassName"
import { Link as LinkS } from "react-scroll";
import MenuIcon from "@material-ui/icons/Menu";
import "./Navbar.css";

const useStyles = makeStyles((theme) => ({
    text: {
        color: "white",
    },
    listItem: {
        paddingLeft: 8,
        paddingRight: 8,
        paddingBottom: 5,
        paddingTop: 5,
        "&:hover": {
            borderBottom: "2px solid white",
        },
        "&:focus": {
            borderBottom: "2px solid white",
        },
        [theme.breakpoints.down(1365)]: {
            paddingBottom: 4,
            paddingTop: 4,
        },
        [theme.breakpoints.down(1024)]: {
            paddingBottom: 3.5,
            paddingTop: 3.5,
        },
        [theme.breakpoints.down(768)]: {
            paddingBottom: 3,
            paddingTop: 3,
        },
        [theme.breakpoints.down(600)]: {
            paddingBottom: 2,
            paddingTop: 2,
        },
    },
}));

interface IProps {
    toggleSidebarModal: (open: boolean) => void;
    openSidebar: boolean;
}
const Navbar = (props: IProps) => {
    const classes = useStyles();
    return (
        <AppBar position="static" className="appBar">
            <Toolbar className="appBar">
                <Container maxWidth="xl" className="appBar">
                    <List component="nav" className="appBar no-padding">
                        <Grid
                            container
                            alignItems="center"
                            className="appBar"
                            justify="space-between"
                        >
                            <Grid item>
                                <ListItem
                                    component={NavLink}
                                    to="/"
                                    className="appBar no-padding"
                                >
                                    <img
                                        src="../Images/GooWhite.svg"
                                        className="logoImg"
                                        alt="Logo"
                                    />
                                </ListItem>
                            </Grid>
                            <Grid item className="appBar">
                                <Grid
                                    container
                                    className="appBar"
                                    alignItems="center"
                                >
                                    <Hidden smUp>
                                        <Grid item sm>
                                            <IconButton
                                                edge="end"
                                                color="inherit"
                                                className="no-padding"
                                                onClick={(e) =>
                                                    props.toggleSidebarModal(
                                                        !props.openSidebar
                                                    )
                                                }
                                            >
                                                <MenuIcon />
                                            </IconButton>
                                        </Grid>
                                    </Hidden>
                                    <Hidden xsDown>
                                        <Grid item>
                                            <ListItem
                                                component={LinkS}
                                                to="about"
                                                className={classes.listItem}
                                            >
                                                <ListItemText
                                                    primary="About"
                                                    className={classes.text}
                                                />
                                            </ListItem>
                                        </Grid>
                                        <Grid item>
                                            <ListItem
                                                component={LinkS}
                                                to="experience"
                                                className={classes.listItem}
                                            >
                                                <ListItemText
                                                    className={classes.text}
                                                    primary="Experience"
                                                />
                                            </ListItem>
                                        </Grid>
                                        <Grid item>
                                            <ListItem
                                                component={LinkS}
                                                to="education"
                                                className={classes.listItem}
                                            >
                                                <ListItemText
                                                    primary="Education"
                                                    className={classes.text}
                                                />
                                            </ListItem>
                                        </Grid>
                                        <Grid item>
                                            <ListItem
                                                component={LinkS}
                                                to="skills"
                                                className={classes.listItem}
                                            >
                                                <ListItemText
                                                    primary="Skills"
                                                    className={classes.text}
                                                />
                                            </ListItem>
                                        </Grid>
                                        <Grid item>
                                            <ListItem
                                                component={LinkS}
                                                to="interests"
                                                className={classes.listItem}
                                            >
                                                <ListItemText
                                                    primary="Interests"
                                                    className={classes.text}
                                                />
                                            </ListItem>
                                        </Grid>
                                    </Hidden>
                                </Grid>
                            </Grid>
                        </Grid>
                    </List>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
