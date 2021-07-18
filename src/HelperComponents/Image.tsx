import { makeStyles } from "@material-ui/core";

interface IProps {
    src: string;
}

const useStyles = makeStyles({
    eduPic: {
        maxWidth: 350,
        width: "100%",
        height: "auto",
        "@media only screen and (min-width:1312px)": {
            maxWidth: 350,
            transition: "ease-in-out 1.5s",
        },
        "@media only screen and (max-width:1312px)": {
            maxWidth: 300,
            transition: "ease-in-out 1.5s",
        },
        "@media (max-width:1023px)": {
            maxWidth: 250,
            transition: "ease-in-out 1.5s",
        },

        "@media (max-width:900px)": {
            maxWidth: 230,
            transition: "ease-in-out 1.5s",
        },
        "@media (max-width:599px)": {
            maxWidth: 200,
            transition: "ease-in-out 1.5s",
        },
        "@media (max-width:420px)": {
            paddingTop: 0,
            maxWidth: 170,
            transition: "ease-in-out 1.5s",
        },
    },
});
const ImageS = (props: IProps) => {
    const classes = useStyles();
    return <img src={props.src} className={classes.eduPic} alt="svGstockImg" />;
};

export default ImageS;
