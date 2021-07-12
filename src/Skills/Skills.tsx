import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
    skills: {
        height: "100vh",
    },
});

const Skills = () => {
    const classes = useStyles();
    return (
        <div id="skills" className={classes.skills}>
            Skillz
        </div>
    );
};

export default Skills;
