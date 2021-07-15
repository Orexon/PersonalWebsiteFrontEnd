import { Grid, Icon, makeStyles, Typography } from "@material-ui/core";
import Video from "../videos/video.mp4";
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaSass,
    FaNpm,
    FaGithub,
} from "react-icons/fa";

const useStyles = makeStyles({
    skills: {
        minHeight: "100vh",
        height: "100%",
        color: "#ffffff",
    },
    skillsCont: {
        zIndex: 5,
        paddingRight: 24,
        paddingLeft: 24,
    },
    homeBg: {
        overflow: "hidden",
        width: "100%",
        height: "100%",
        position: "absolute",
    },
    videoBg: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        background: "#232a34",
    },
    eduContainer: {
        zIndex: 3,
        transition: "1.0s all ease",
    },
    icons: {
        height: "64px",
        width: "64px",
    },
    iconRoot: {
        textAlign: "center",
    },
    imageIcon: {
        height: "70px",
    },
    langAndTools: {
        paddingTop: 24,
    },
    iconContainer: {
        paddingTop: 24,
    },
    skillTxt: {
        fontWeight: 500,
    },
});

const Skills = () => {
    const classes = useStyles();
    return (
        <Grid
            container
            id="skills"
            className={classes.skills}
            justify="center"
            alignItems="center"
        >
            <div className={classes.homeBg}>
                <video
                    className={classes.videoBg}
                    autoPlay
                    loop
                    muted
                    src={Video}
                />
            </div>

            <Grid container justify="center" className={classes.skillsCont}>
                <Grid
                    item
                    xs={12}
                    sm={10}
                    md={8}
                    lg={8}
                    xl={6}
                    className={classes.eduContainer}
                >
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography variant="h2" className={classes.skillTxt}>
                            Skills{" "}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                        className={classes.langAndTools}
                    >
                        <Typography
                            variant="subtitle1"
                            className={classes.skillTxt}
                        >
                            Programming languages and tools
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                        className={classes.iconContainer}
                        justify="space-evenly"
                        container
                    >
                        <Grid item>
                            {" "}
                            <FaHtml5 color="white" size={70} />{" "}
                        </Grid>
                        <Grid item>
                            {" "}
                            <FaCss3Alt color="white" size={70} />
                        </Grid>
                        <Grid item>
                            {" "}
                            <FaJsSquare color="white" size={70} />
                        </Grid>
                        <Grid item>
                            {" "}
                            <FaReact color="white" size={70} />
                        </Grid>
                        <Grid item>
                            {" "}
                            <FaSass color="white" size={70} />
                        </Grid>
                        <Grid item>
                            {" "}
                            <FaNpm color="white" size={70} />
                        </Grid>
                        <Grid item>
                            {" "}
                            <FaGithub color="white" size={70} />
                        </Grid>
                        <Grid item>
                            {" "}
                            <Icon classes={{ root: classes.iconRoot }}>
                                <img
                                    className={classes.imageIcon}
                                    src="../Images/cSharp.svg"
                                />
                            </Icon>
                        </Grid>
                        <Grid item>
                            {" "}
                            <Icon classes={{ root: classes.iconRoot }}>
                                <img
                                    className={classes.imageIcon}
                                    src="../Images/MCNET.svg"
                                />
                            </Icon>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Skills;
