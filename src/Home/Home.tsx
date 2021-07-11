import {
    Button,
    Container,
    Grid,
    makeStyles,
    Typography,
} from "@material-ui/core";
import React, { useRef } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Video from "../videos/video2.mp4";
import "./Home.css";

const useStyles = makeStyles({
    home: {
        background: "#0c0c0c",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 45px)",
        zIndex: 1,
        flexGrow: 1,
    },
    homeBg: {
        overflow: "hidden",
        width: "100%",
        height: "100%",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        position: "absolute",
    },
    videoBg: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        background: "#232a34",
    },
    homeContent: {
        zIndex: 3,
        alignItems: "center",
    },
    homeTextheading: {
        color: "white",
        textAlign: "center",
        fontWeight: 600,
        "@media only screen and (min-width:1312px)": {
            fontSize: "3.5em",
            transition: "1.0s all ease",
        },
        "@media only screen and (max-width:1312px)": {
            wordSpacing: 20,
            fontSize: "3em",
            transition: "1.0s all ease",
        },
        "@media (max-width:1024px)": {
            wordSpacing: 20,
            fontSize: "2.3rem",
            transition: "1.0s all ease",
        },
        "@media (max-width:960px)": {
            wordSpacing: 10,
        },
        "@media (max-width:600px)": {
            wordSpacing: 5,
            fontSize: "2rem",
            transition: "1.0s all ease",
        },
    },
    homeTextbody: {
        color: "#FFFFFF",
        textAlign: "center",
        fontWeight: 600,
        paddingTop: 16,
        "@media only screen and (min-width:1312px)": {
            fontSize: "1.5em",
            transition: "1.0s all ease",
        },
        "@media only screen and (max-width:1312px)": {
            fontSize: "1.3em",
            transition: "1.0s all ease",
        },
        "@media (max-width:1024px)": {
            fontSize: "1.1rem",
            transition: "1.0s all ease",
        },
        // "@media (min-width:960px)": {
        //     paddingRight: 25,
        // },
        "@media (max-width:600px)": {
            fontSize: "1.2rem",
            transition: "1.0s all ease",
            paddingRight: 5,
            paddingLeft: 5,
        },
    },
    btnContainer: {
        transition: "0.6s all ease",
    },
    btnOuter: {
        paddingTop: 20,
        marginLeft: 5,
        marginRight: 5,
    },
    btnTo: {
        minWidth: 136,
        color: "#FFFFFF",
        borderColor: "#FFFFFF",
        "&:hover": {
            color: "#FFA500",
            borderColor: "#FFA500",
        },
    },
});

const Home = () => {
    const classes = useStyles();
    const video = useRef<HTMLVideoElement>();
    const playVideo = (event: any) => {
        video.current && video.current.play();
    };

    return (
        <Grid className={classes.home} id="home">
            <div className={classes.homeBg}>
                <video
                    className={classes.videoBg}
                    autoPlay
                    loop
                    muted
                    src={Video}
                />
            </div>

            <Grid
                container
                justify="center"
                alignItems="center"
                className={classes.homeContent}
                xl={8}
                lg={8}
                md={8}
                sm={10}
                xs={10}
            >
                <Grid
                    item
                    xl={7}
                    lg={10}
                    md={10}
                    sm={12}
                    xs={12}
                    justify="center"
                    alignItems="center"
                    container
                >
                    <Grid item xl={10} lg={10} md={12} sm={12} xs={12}>
                        <Typography
                            variant="h2"
                            id="HeadingTxt"
                            className={classes.homeTextheading}
                        >
                            Mindaugas Kriauciunas
                        </Typography>
                    </Grid>
                    <Grid item xl={10} lg={9} md={10} sm={10} xs={12}>
                        <Typography
                            variant="h6"
                            id="TxtTxt"
                            className={classes.homeTextbody}
                        >
                            I am experienced in stock text frameworks to provide
                            a robust synopsis for high level stock text.
                            Iterative approaches to corporate stock text stock
                            text to further
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xl={2}
                    lg={10}
                    md={12}
                    sm={12}
                    xs={12}
                    justify="center"
                    alignItems="center"
                    container
                >
                    <Grid
                        item
                        xl={3}
                        lg={10}
                        md={12}
                        sm={8}
                        xs={10}
                        justify="center"
                        alignItems="center"
                        container
                        className={classes.btnContainer}
                    >
                        <Grid item className={classes.btnOuter}>
                            <Button
                                variant="outlined"
                                color="primary"
                                size="large"
                                className={classes.btnTo}
                                startIcon={<LinkedInIcon />}
                            >
                                LinkedIn
                            </Button>
                        </Grid>
                        <Grid item className={classes.btnOuter}>
                            <Button
                                variant="outlined"
                                color="primary"
                                size="large"
                                startIcon={<GitHubIcon />}
                                className={classes.btnTo}
                            >
                                GitHub
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Home;
