import {
    Button,
    Container,
    Grid,
    makeStyles,
    Typography,
} from "@material-ui/core";
import React, { useRef } from "react";
import Video from "../videos/video.mp4";
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
        fontWeight: 500,
    },
    homeTextbody: {
        color: "#FFFFFF",
        textAlign: "center",
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
            >
                <Grid item sm={12}>
                    <Typography
                        variant="h2"
                        className={classes.homeTextheading}
                    >
                        Mindaugas Kriauciunas
                    </Typography>
                </Grid>
                <Grid item xl={8} lg={7} md={7} sm={6}>
                    <Typography variant="h6" className={classes.homeTextbody}>
                        I am experienced in stock text frameworks to provide a
                        robust synopsis for high level stock text. Iterative
                        approaches to corporate stock text stock text to further
                        the overall value stock text. AND more stock text. stock
                        text
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Home;
