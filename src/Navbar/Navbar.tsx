import {
    Container,
    Grid,
    Hidden,
    IconButton,
    List,
    ListItem,
    makeStyles,
    Toolbar,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { Link as NavLink } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import MenuIcon from "@material-ui/icons/Menu";
import { animateScroll as scroll } from "react-scroll";
import "./Navbar.css";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
    navBar: {
        height: "45px",
        marginTop: "-45px",
        transition: "0.5s all ease",
        zIndex: 10,
        top: 0,
    },
    text: {
        color: "white",
    },
    barsIcon: {
        color: "white",
        maxWidth: 36,
        maxHeight: 36,
        fontSize: 32,
    },
    linkS: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 8,
        paddingLeft: 8,
        fontSize: "1rem",
        color: "#FFFFFF",
        cursor: "pointer",
        "&:hover": {
            color: "#FFA500",
        },
    },
}));

interface IProps {
    toggleSidebarModal: (open: boolean) => void;
    openSidebar: boolean;
}
const Navbar = (props: IProps) => {
    const classes = useStyles();
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 46) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <AppBar
            position="sticky"
            style={{
                backgroundColor: scrollNav ? "#000" : "transparent",
            }}
            className={classes.navBar}
        >
            <Toolbar className="appBar">
                <Container maxWidth={false} className="appBar">
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
                                    onClick={toggleHome}
                                    className="appBar no-padding logoImg"
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
                                                className={classes.barsIcon}
                                                onClick={(e) =>
                                                    props.toggleSidebarModal(
                                                        !props.openSidebar
                                                    )
                                                }
                                            >
                                                <MenuIcon
                                                    className={classes.barsIcon}
                                                />
                                            </IconButton>
                                        </Grid>
                                    </Hidden>
                                    <Hidden xsDown>
                                        <Grid item className="activeBorder">
                                            <ListItem
                                                component={LinkS}
                                                to="about"
                                                smooth={true}
                                                duration={500}
                                                spy={true}
                                                offset={-43}
                                                className={classes.linkS}
                                                activeClass="active"
                                            >
                                                About
                                            </ListItem>
                                        </Grid>
                                        <Grid item className="activeBorder">
                                            <ListItem
                                                component={LinkS}
                                                to="experience"
                                                smooth={true}
                                                duration={500}
                                                spy={true}
                                                offset={-43}
                                                className={classes.linkS}
                                                activeClass="active"
                                            >
                                                Experience
                                            </ListItem>
                                        </Grid>
                                        <Grid item className="activeBorder">
                                            <ListItem
                                                component={LinkS}
                                                to="education"
                                                smooth={true}
                                                duration={500}
                                                spy={true}
                                                offset={-43}
                                                activeClass="active"
                                                className={classes.linkS}
                                            >
                                                Education
                                            </ListItem>
                                        </Grid>
                                        <Grid item className="activeBorder">
                                            <ListItem
                                                component={LinkS}
                                                to="skills"
                                                smooth={true}
                                                duration={500}
                                                spy={true}
                                                offset={-43}
                                                activeClass="active"
                                                className={classes.linkS}
                                            >
                                                Skills
                                            </ListItem>
                                        </Grid>
                                        <Grid item className="activeBorder">
                                            <ListItem
                                                component={LinkS}
                                                to="interests"
                                                smooth={true}
                                                duration={500}
                                                spy={true}
                                                offset={-43}
                                                activeClass="active"
                                                className={classes.linkS}
                                            >
                                                Interests
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
