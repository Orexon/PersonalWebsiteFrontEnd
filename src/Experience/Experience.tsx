import { Grid, makeStyles, Typography, Divider } from "@material-ui/core";
import { RecordOne, RecordTwo } from "./data";
import Particles from "react-particles-js";
import Records from "../HelperComponents/Records";
import ImageS from "../HelperComponents/Image";
import { experieceImg } from "../HelperComponents/imgData";

const useStyles = makeStyles({
    experience: {
        position: "relative",
        overflow: "hidden",
        background: "#ffffff",
        minHeight: "100vh",
        paddingTop: "10vh",
        paddingBottom: "10vh",
        transition: "1.0s all ease",
        "@media (max-width:900px)": {
            minHeight: "950px",
            paddingTop: "5vh",
            paddingBottom: "5vh",
        },
        "@media (max-width:600px)": {
            minHeight: "900px",
            paddingTop: "calc(3vh + 45px)",
            paddingBottom: "3vh",
            paddingRight: "7vw",
            paddingLeft: "7vw",
        },
        "@media (max-width: 450px)": {
            minHeight: "700px",
            paddingTop: "calc(3vh + 45px)",
            paddingBottom: "3vh",
            paddingRight: "10px",
            paddingLeft: "10px",
        },
        "@media (max-width: 350px)": {
            minHeight: "600px",
            paddingTop: "calc(3vh + 45px)",
            paddingBottom: "3vh",
            paddingRight: "10px",
            paddingLeft: "10px",
        },
    },
    expContainer: {
        background: "#ffffff",
        zIndex: 3,
        border: "3px solid #000000",
        borderRadius: "15px",
        transition: "1.0s all ease",
    },
    mainHeading: {
        paddingTop: 24,
        paddingRight: 24,
        paddingLeft: 24,
        "@media (max-width:600px)": {
            paddingTop: 16,
            paddingLeft: 16,
            paddingRight: 14,
            transition: "1.0s all ease",
        },
    },
    mainHeadingTxt: {
        color: "#000",
        fontWeight: 600,
        textShadow: "1px 2px #3BE2EA",
        "@media (max-width:600px)": {
            fontSize: "2rem",
            transition: "1.0s all ease",
        },
    },
    imgContainer: {
        textAlign: "center",
        paddingTop: 24,
        paddingRight: 24,
        paddingLeft: 24,
        "@media (max-width:600px)": {
            paddingTop: 16,
            paddingLeft: 16,
            paddingRight: 14,
            transition: "1.0s all ease",
        },
    },
    divider: {
        background: "#0c0c0c",
    },
});

const Experience = () => {
    const classes = useStyles();
    return (
        <Grid
            container
            id="experience"
            className={classes.experience}
            justify="center"
        >
            <div style={{ position: "absolute", top: 0 }}>
                <Particles
                    height="calc(100vh)"
                    width="100vw"
                    params={{
                        particles: {
                            number: {
                                value: 160,
                            },
                            size: {
                                value: 5,
                                random: true,
                            },
                            color: {
                                value: "#34EAB6",
                            },
                            links: {
                                color: "#3BE2EA",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outMode: "bounce",
                                random: false,
                                speed: 3,
                                straight: false,
                            },
                            shape: {
                                type: "circle",
                            },
                        },
                        interactivity: {
                            detectsOn: "canvas",
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: "grab",
                                },
                                onclick: {
                                    enable: true,
                                    mode: "push",
                                },
                                resize: true,
                            },
                            modes: {
                                bubble: {
                                    distance: 400,
                                    duration: 2,
                                    opacity: 0.8,
                                    size: 40,
                                },
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                                grab: {
                                    distance: 140,
                                    links: {
                                        opacity: 1,
                                    },
                                },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            </div>
            <Grid
                item
                xs={12}
                sm={10}
                md={8}
                lg={8}
                xl={6}
                className={classes.expContainer}
            >
                <Grid container className={classes.mainHeading}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography
                            variant="h2"
                            className={classes.mainHeadingTxt}
                        >
                            Experience
                        </Typography>
                    </Grid>
                </Grid>
                <Records {...RecordOne} />
                <Divider variant="middle" className={classes.divider} />
                <Records {...RecordTwo} />
                <Divider variant="middle" className={classes.divider} />
                {/* add additional experiece here */}
                <Grid className={classes.imgContainer}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <ImageS {...experieceImg} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Experience;
