import { Grid, makeStyles, Typography } from "@material-ui/core";

interface IProps {
    id: string;
    position: string;
    company: string;
    description: string;
    date: string;
}

const useStyles = makeStyles({
    InfoContainer: {
        paddingTop: 24,
        paddingLeft: 26,
        paddingRight: 24,
        "@media (max-width:600px)": {
            paddingTop: 8,
            paddingLeft: 16,
            paddingRight: 14,
        },
    },
    positionTxt: {
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
        color: "#ffffff",
        fontWeight: 500,
    },
    descriptionTxt: {
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
                        className={classes.positionTxt}
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
                        className={classes.companyTxt}
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
                        className={classes.descriptionTxt}
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
                alignItems="center"
            >
                <Typography variant="caption" className={classes.dateTxt}>
                    {props.date}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Records;
