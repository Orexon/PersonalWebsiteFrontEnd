import { Grid, makeStyles, Typography } from "@material-ui/core";
import { RecordOne, RecordTwo } from "./data";
import Particles from "react-particles-js";
import Records from "./Records";

const useStyles = makeStyles({
    experience: {
        position: "relative",
        overflow: "hidden",
        background: "#0c0c0c",
        height: "100vh",
        paddingTop: "10vh",
        paddingBottom: "10vh",
        transition: "1.0s all ease",
        "@media (max-width:900px)": {
            paddingTop: "5vh",
            paddingBottom: "5vh",
        },
        "@media (max-width:600px)": {
            minHeight: "600px",
            paddingTop: "calc(3vh + 45px)",
            paddingBottom: "3vh",
            paddingRight: "7vw",
            paddingLeft: "7vw",
        },
        "@media (max-width: 450px)": {
            minHeight: "600px",
            paddingTop: "calc(3vh + 45px)",
            paddingBottom: "3vh",
            paddingRight: "10px",
            paddingLeft: "10px",
        },
    },
    expContainer: {
        background: "#0c0c0c",
        zIndex: 3,
        border: "1px solid #FFFFFF",
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
        color: "#ffffff",
        fontWeight: 500,
        textShadow: "1px 2px #FF8C00",
        "@media (max-width:600px)": {
            fontSize: "2rem",
            transition: "1.0s all ease",
        },
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
                                value: 200,
                            },
                            size: {
                                value: 5,
                                random: true,
                            },
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#FFA500",
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
                <Records {...RecordTwo} />
                {/* add additional experiece here */}
            </Grid>
        </Grid>
    );
};

export default Experience;
