import {
    Container,
    Grid,
    Hidden,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Toolbar,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { Link as RouterDom, NavLink } from "react-router-dom";
//RouterDom must not be removed even if not used,without it component doesn't recognize "activeClassName"
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";

const Header = () => {
    return (
        <AppBar position="static" className="appBar">
            <Toolbar className="appBar">
                <Container maxWidth="lg" className="appBar">
                    <Grid container alignItems="center" className="appBar">
                        <List component="nav" className="appBar">
                            <Grid
                                container
                                justify="space-between"
                                className="appBar"
                                alignItems="center"
                            >
                                <Grid item>
                                    <ListItem
                                        component={NavLink}
                                        to="/"
                                        className=""
                                    >
                                        <img
                                            src="../Images/Goo.svg"
                                            className="logoImg"
                                            alt="Logo"
                                        />
                                    </ListItem>
                                </Grid>
                                <Hidden smUp>
                                    <Grid item sm>
                                        <IconButton edge="end" color="inherit">
                                            <MenuIcon />
                                        </IconButton>
                                    </Grid>
                                </Hidden>
                                <Hidden xsDown>
                                    <Grid item>
                                        <ListItem
                                            component={NavLink}
                                            to=""
                                            activeClassName="activeLink"
                                            className="navText"
                                        >
                                            <ListItemText primary="Stuff$" />
                                        </ListItem>
                                    </Grid>
                                    <Grid item>
                                        <ListItem
                                            component={NavLink}
                                            to=""
                                            activeClassName="activeLink"
                                            className="navText"
                                        >
                                            <ListItemText primary="Stuff$" />
                                        </ListItem>
                                    </Grid>
                                    <Grid item>
                                        <ListItem
                                            component={NavLink}
                                            to=""
                                            activeClassName="activeLink"
                                            className="navText"
                                        >
                                            <ListItemText primary="Stuff$" />
                                        </ListItem>
                                    </Grid>
                                </Hidden>
                            </Grid>
                        </List>
                    </Grid>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
