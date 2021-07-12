import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
    education: {
        height: "100vh",
    },
});
const Education = () => {
    const classes = useStyles();
    return (
        <div id="education" className={classes.education}>
            Education
        </div>
    );
};

export default Education;
