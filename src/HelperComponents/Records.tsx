import { Grid, makeStyles, Typography } from "@material-ui/core";
interface IProps {
    id: string;
    position: string;
    company: string;
    description: string;
    date: string;
    dataset: string;
}

const useStyles = makeStyles({
    InfoContainer: {
        paddingTop: 12,
        paddingLeft: 26,
        paddingRight: 24,
        paddingBottom: 12,
        "@media (max-width:600px)": {
            paddingTop: 8,
            paddingLeft: 16,
            paddingRight: 14,
        },
    },
    positionTxt: {
        color: "#000",
        fontSize: "1.4rem",
        paddingTop: 16,
        paddingRight: 12,
        fontWeight: 600,
        textShadow: "1px 1px #3BE2EA",
        "@media (max-width:600px)": {
            fontSize: "0.9rem",
            transition: "1.0s all ease",
            paddingTop: 8,
            paddingRight: 6,
        },
    },
    educationPosTxt: {
        color: "#ffffff",
        fontSize: "1.4rem",
        paddingTop: 16,
        paddingRight: 12,
        fontWeight: 500,
        textShadow: "1px 1px #FF8C00",
        "@media (max-width:600px)": {
            fontSize: "0.9rem",
            transition: "1.0s all ease",
            paddingTop: 8,
            paddingRight: 6,
        },
    },
    companyTxt: {
        color: "#000",
        fontSize: "1.1rem",
        paddingTop: 16,
        paddingRight: 12,
        fontWeight: 600,
        textShadow: "1px 1px #3BE2EA",
        "@media (max-width:600px)": {
            fontSize: "0.9rem",
            transition: "1.0s all ease",
            paddingTop: 8,
            paddingRight: 6,
        },
    },
    companyEduTxt: {
        color: "#ffffff",
        fontSize: "1.1rem",
        paddingTop: 16,
        paddingRight: 12,
        fontWeight: 500,
        "@media (max-width:600px)": {
            fontSize: "0.9rem",
            transition: "1.0s all ease",
            paddingTop: 8,
            paddingRight: 6,
        },
    },
    dateTxt: {
        color: "#000",
        textShadow: "1px 1px #3BE2EA",
        fontWeight: 600,
    },
    eduDateTxt: {
        color: "#ffffff",
        fontWeight: 500,
    },
    descriptionTxt: {
        color: "#000",
        fontSize: "0.9rem",
        alignSelf: "center",
        paddingTop: 16,
        paddingRight: 12,
        paddingBottom: 12,
        fontWeight: 600,
        textShadow: "0 1px #3BE2EA",
        "@media (max-width:600px)": {
            fontSize: "0.8rem",
            transition: "1.0s all ease",
            paddingTop: 8,
            paddingRight: 6,
        },
    },
    eduDescriptionTxt: {
        color: "#ffffff",
        fontSize: "0.9rem",
        alignSelf: "center",
        paddingTop: 16,
        paddingRight: 12,
        paddingBottom: 12,
        fontWeight: 500,
        "@media (max-width:600px)": {
            fontSize: "0.8rem",
            transition: "1.0s all ease",
            paddingTop: 8,
            paddingRight: 6,
        },
    },
    dateTimeCont: {
        color: "#ffffff",
        alignSelf: "center",
        textAlign: "center",
        fontWeight: 500,
    },
});

const Records = (props: IProps) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.InfoContainer} id={props.id}>
            <Grid item xs={9} sm={10} md={10} lg={10} xl={10}>
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                        className={
                            props.dataset === "Education"
                                ? classes.educationPosTxt
                                : classes.positionTxt
                        }
                    >
                        {props.position}
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                        className={
                            props.dataset === "Education"
                                ? classes.companyEduTxt
                                : classes.companyTxt
                        }
                    >
                        {props.company}
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                        className={
                            props.dataset === "Education"
                                ? classes.eduDescriptionTxt
                                : classes.descriptionTxt
                        }
                    >
                        {props.description}
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                xs={3}
                sm={2}
                md={2}
                lg={2}
                xl={2}
                className={classes.dateTimeCont}
            >
                <Typography
                    variant="caption"
                    className={
                        props.dataset === "Education"
                            ? classes.eduDateTxt
                            : classes.dateTxt
                    }
                >
                    {props.date}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Records;
