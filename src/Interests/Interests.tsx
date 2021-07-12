import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
    interests: {
        height: "100vh",
    },
});

const Interests = () => {
    const classes = useStyles();
    return (
        <div id="interests" className={classes.interests}>
            interests
        </div>
    );
};

export default Interests;
