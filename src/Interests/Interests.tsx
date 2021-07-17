import { Grid, makeStyles, Typography } from "@material-ui/core";

import ImageS from "../HelperComponents/Image";
import { interestImg } from "../HelperComponents/imgData";

const useStyles = makeStyles({
    interests: {
        height: "100vh",
        background: "#0c0c0c",
        color: "#ffffff",
        zIndex: 5,
        paddingRight: 24,
        paddingLeft: 24,
    },
    eduContainer: {
        zIndex: 3,
        transition: "1.0s all ease",
    },
    skillTxt: {
        fontWeight: 500,
    },
    langAndTools: {
        paddingTop: 24,
    },
    imgContainer: {
        textAlign: "center",
        paddingLeft: 24,
    },
});

const Interests = () => {
    const classes = useStyles();
    return (
        <Grid
            id="interests"
            justify="center"
            alignItems="center"
            className={classes.interests}
            container
        >
            <Grid
                item
                xs={12}
                sm={10}
                md={8}
                lg={8}
                xl={6}
                className={classes.eduContainer}
            >
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} container>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography variant="h2" className={classes.skillTxt}>
                            Interests{" "}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={8}
                        xl={8}
                        className={classes.langAndTools}
                        justify="center"
                        alignContent="center"
                        container
                    >
                        <Typography
                            variant="subtitle1"
                            className={classes.skillTxt}
                        >
                            Apart from being a developer, I enjoy most of my
                            time reading books and playing games. I also enjoy
                            workouts, such as a biking, which is a daily routine
                            for me. When indoors, I follow a number of sci-fi
                            and fantasy genre movies and television shows, I am
                            an aspiring chef - enjoy not only tasting, but
                            making the food aswell, and I spend a large amount
                            of my free time exploring the latest technology
                            advancements.
                        </Typography>
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
                        <ImageS {...interestImg} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Interests;
