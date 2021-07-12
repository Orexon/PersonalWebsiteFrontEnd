import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    experience: {
        height: "100vh",
    },
});

const Experience = () => {
    const classes = useStyles();
    return (
        <Grid container id="experience" className={classes.experience}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={10}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography>Experience</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Experience;
