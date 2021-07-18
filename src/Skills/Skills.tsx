import { Grid, Icon, makeStyles, Typography } from "@material-ui/core";

import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaSass,
    FaGithub,
} from "react-icons/fa";

const useStyles = makeStyles({
    skills: {
        minHeight: "100vh",
        height: "100vh",
        color: "#ffffff",
        background: "#0c0c0c",
        backgroundImage: `url(${"../Images/bgfinal.jpg"})`,
        backgroundSize: "cover",
        top: 0,
    },
    skillsCont: {
        zIndex: 5,
        paddingRight: 24,
        paddingLeft: 24,
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
    IconItemContainer: {
        paddingTop: 10,
        paddingLeft: 2,
        paddingRight: 2,
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
                        <Grid item className={classes.IconItemContainer}>
                            {" "}
                            <FaHtml5
                                color="white"
                                size={70}
                                className={classes.imageIcon}
                            />{" "}
                        </Grid>
                        <Grid item className={classes.IconItemContainer}>
                            {" "}
                            <FaCss3Alt
                                color="white"
                                size={70}
                                className={classes.imageIcon}
                            />
                        </Grid>
                        <Grid item className={classes.IconItemContainer}>
                            {" "}
                            <FaJsSquare
                                color="white"
                                size={70}
                                className={classes.imageIcon}
                            />
                        </Grid>
                        <Grid item className={classes.IconItemContainer}>
                            {" "}
                            <FaReact
                                color="white"
                                size={70}
                                className={classes.imageIcon}
                            />
                        </Grid>
                        <Grid item className={classes.IconItemContainer}>
                            {" "}
                            <FaSass
                                color="white"
                                size={70}
                                className={classes.imageIcon}
                            />
                        </Grid>
                        <Grid item className={classes.IconItemContainer}>
                            {" "}
                            <FaGithub
                                color="white"
                                size={70}
                                className={classes.imageIcon}
                            />
                        </Grid>
                        <Grid item className={classes.IconItemContainer}>
                            {" "}
                            <Icon classes={{ root: classes.iconRoot }}>
                                <img
                                    className={classes.imageIcon}
                                    src="../Images/cSharp.svg"
                                    alt="C sharp logo"
                                />
                            </Icon>
                        </Grid>
                        <Grid item className={classes.IconItemContainer}>
                            {" "}
                            <Icon classes={{ root: classes.iconRoot }}>
                                <img
                                    className={classes.imageIcon}
                                    src="../Images/MCNET.svg"
                                    alt="C sharp logo"
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
