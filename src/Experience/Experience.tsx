import { Grid, makeStyles, Typography, Divider } from "@material-ui/core";
import { RecordOne, RecordTwo } from "./data";
import ImageS from "../HelperComponents/Image";
import { experieceImg } from "../HelperComponents/imgData";
import ExpRecords from "../HelperComponents/experienceRecords";

const useStyles = makeStyles({
    skillTxt: {
        fontWeight: 500,
    },
    experience: {
        color: "#ffffff",
        background: "#0c0c0c",
        minHeight: "100vh",
        paddingTop: "10vh",
        paddingBottom: "10vh",
        transition: "1.0s all ease",
        "@media (max-width:900px)": {
            minHeight: "100vh",
            paddingTop: "3vh",
            paddingBottom: "3vh",
        },
        "@media (max-width:600px)": {
            minHeight: "100vh",
            paddingTop: "calc(3vh + 45px)",
            paddingBottom: "3vh",
        },
        "@media (max-width: 450px)": {
            minHeight: "100vh",
            paddingTop: "calc(20px + 45px)",
            paddingBottom: "3vh",
        },
        "@media (max-width: 350px)": {
            minHeight: "100vh",
            paddingTop: "calc(20px + 45px)",
            paddingBottom: "3vh",
        },
    },
    expContainer: {
        paddingLeft: "24px",
        paddingRight: "24px",
        zIndex: 3,
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
        fontWeight: 600,
        textShadow: "1px 2px #FFA500",
        "@media only screen and (min-width:1312px)": {
            fontSize: "3.5rem",
            transition: "1.0s all ease",
        },
        "@media only screen and (max-width:1312px)": {
            fontSize: "3rem",
            transition: "1.0s all ease",
        },
        "@media (max-width:1024px)": {
            fontSize: "2.7rem",
            transition: "1.0s all ease",
        },
        "@media (max-width:900px)": {
            fontSize: "2.5rem",
            transition: "1.0s all ease",
        },
        "@media (max-width:600px)": {
            fontSize: "2.3rem",
            transition: "1.0s all ease",
        },
        "@media (max-width:450px)": {
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
            display: "block",
            paddingTop: 8,
            paddingLeft: 16,
            paddingRight: 14,
            transition: "1.0s all ease",
        },
    },
    divider: {
        background: "#ffffff",
    },
});

const Experience = () => {
    const classes = useStyles();
    return (
        <Grid
            id="experience"
            justify="center"
            alignItems="center"
            className={classes.experience}
            container
        >
            <Grid
                item
                xs={12}
                sm={10}
                md={8}
                lg={8}
                xl={8}
                className={classes.expContainer}
            >
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} container>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography
                            variant="h2"
                            className={classes.mainHeadingTxt}
                        >
                            Experience{" "}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={8}
                        xl={8}
                        justify="center"
                        alignContent="center"
                        container
                    >
                        <ExpRecords {...RecordOne} />
                        <Divider variant="middle" className={classes.divider} />
                        <ExpRecords {...RecordTwo} />
                        <Divider variant="middle" className={classes.divider} />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={4}
                        xl={4}
                        className={classes.imgContainer}
                    >
                        <ImageS {...experieceImg} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Experience;
