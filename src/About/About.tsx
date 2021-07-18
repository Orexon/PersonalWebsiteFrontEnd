import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Video from "../videos/video2.mp4";
import "./About.css";

const useStyles = makeStyles({
    home: {
        background: "#0c0c0c",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        zIndex: 1,
        flexGrow: 1,
        "&::before": {
            content: '""',
            top: 0,
            background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%,rgba(0, 0, 0, 0.6) 100%),linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%)",
            zIndex: 2,
        },
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
        transition: "0.6s all ease",
        animation: "fadeIn 1s",
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
        animation: "fadeIn linear 1s",
        "@media only screen and (min-width:1312px)": {
            fontSize: "1.7em",
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
            fontSize: "1rem",
            transition: "1.0s all ease",
            paddingRight: 5,
            paddingLeft: 5,
        },
        "@media (max-width:400px)": {
            fontSize: "0.8rem",
            transition: "1.0s all ease",
        },
    },
    btnContainer: {
        transition: "0.6s all ease",
        animation: "fadeIn linear 1s",
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
    mainLogo: {
        cursor: "pointer",
        transition: "ease-in-out 1.5s",
        "@media only screen and (min-width:1312px)": {
            maxWidth: 550,
            transition: "ease-in-out 1.5s",
        },
        "@media only screen and (max-width:1312px)": {
            maxWidth: 400,
            transition: "ease-in-out 1.5s",
        },
        "@media (max-width:1024px)": {
            maxWidth: 320,
            transition: "ease-in-out 1.5s",
        },
        "@media (max-width:600px)": {
            maxWidth: 250,
            transition: "ease-in-out 1.5s",
        },
        "@media (max-width:400px)": {
            maxWidth: 200,
            transition: "ease-in-out 1.5s",
        },
    },
});

const About = () => {
    const classes = useStyles();
    const [logoVisible, setLogoVisible] = useState(false);
    const toggleLogoVisibility = () => {
        setLogoVisible(!logoVisible);
    };

    useEffect(() => {
        let inputValue = ((
            document.getElementById("myVideo") as HTMLVideoElement
        ).playbackRate = 0.7);
    });

    return (
        <Grid className={classes.home} id="about">
            <div className={classes.homeBg}>
                <video
                    id="myVideo"
                    className={classes.videoBg}
                    autoPlay
                    loop
                    muted
                    src={Video}
                />
            </div>

            <Grid
                item
                justify="center"
                alignItems="center"
                className={classes.homeContent}
                xl={8}
                lg={8}
                md={8}
                sm={10}
                xs={10}
                container
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
                    <Grid
                        item
                        xl={10}
                        lg={10}
                        md={12}
                        sm={12}
                        xs={12}
                        onClick={toggleLogoVisibility}
                    >
                        {logoVisible ? (
                            <Grid
                                container
                                justify="center"
                                alignItems="center"
                                className="fadeInAnimation"
                            >
                                <img
                                    className={classes.mainLogo}
                                    src="../Images/GooWhite.svg"
                                    alt="Logo"
                                />
                            </Grid>
                        ) : (
                            <Typography
                                variant="h2"
                                id="HeadingTxt"
                                className={classes.homeTextheading}
                            >
                                Mindaugas Kriaučiūnas
                            </Typography>
                        )}
                    </Grid>
                    <Grid item xl={10} lg={9} md={10} sm={10} xs={12}>
                        <Typography
                            variant="h6"
                            id="TxtTxt"
                            className={classes.homeTextbody}
                        >
                            I am a junior Full-Stack developer, always looking
                            for opportunities to expand my knowledge and apply
                            my skill into problem solving solutions. Passionate
                            in learning new things and eager to bring creative
                            ideas into the field of work I am assigned.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xl={10}
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
                        xl={10}
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
                                href="https://www.linkedin.com/in/mindaugas-kriau%C4%8Di%C5%ABnas-03a677131/"
                                target="_blank"
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
                                href="https://github.com/Orexon"
                                target="_blank"
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

export default About;
