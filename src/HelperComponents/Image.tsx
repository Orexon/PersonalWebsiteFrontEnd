import { Grid, makeStyles } from "@material-ui/core";
import React from "react";

interface IProps {
    src: string;
}

const useStyles = makeStyles({
    eduPic: {
        maxWidth: 350,
        "@media only screen and (min-width:1312px)": {
            maxWidth: 350,
            transition: "ease-in-out 1.5s",
        },
        "@media only screen and (max-width:1312px)": {
            maxWidth: 300,
            transition: "ease-in-out 1.5s",
        },
        "@media (max-width:1024px)": {
            maxWidth: 250,
            transition: "ease-in-out 1.5s",
        },
        "@media (max-width:600px)": {
            maxWidth: 250,
            transition: "ease-in-out 1.5s",
        },
        "@media (max-width:400px)": {
            maxWidth: 150,
            transition: "ease-in-out 1.5s",
        },
    },
});
const ImageS = (props: IProps) => {
    const classes = useStyles();
    return <img src={props.src} className={classes.eduPic} />;
};

export default ImageS;
