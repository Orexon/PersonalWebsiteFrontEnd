import {
    Container,
    Dialog,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    makeStyles,
    Slide,
} from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import CloseIcon from "@material-ui/icons/Close";
import { Link as LinkS } from "react-scroll";
import React from "react";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement },
    ref: React.Ref<unknown>
) {
    return <Slide direction="down" ref={ref} {...props} />;
});

interface IProps {
    openSidebar: boolean;
    toggleSidebarModal: (open: boolean) => void;
}

const useStyles = makeStyles({
    btnColor: {
        color: "#ffffff",
    },
    IconSize: {
        fontSize: "40px",
    },
    listItemText: {
        fontSize: "1.6em",
        color: "white",
        "&:hover": {
            color: "#0000CD",
        },
        "&:focus": {
            color: "#00BFFF",
        },
    },
    listItemC: {
        paddingLeft: 8,
        paddingRight: 8,
        paddingBottom: 16,
        paddingTop: 16,
        textAlign: "center",
    },
});

const Sidebar = (props: IProps) => {
    const classes = useStyles();
    const handleClose = () => {
        props.toggleSidebarModal(!props.openSidebar);
    };

    return (
        <Dialog
            PaperProps={{
                style: {
                    background: "#000000",
                },
            }}
            fullScreen
            open={props.openSidebar}
            onClick={handleClose}
            TransitionComponent={Transition}
        >
            <Grid container justify="flex-end">
                <Grid item>
                    <IconButton
                        onClick={handleClose}
                        aria-label="close"
                        className={classes.btnColor}
                    >
                        <CloseIcon className={classes.IconSize} />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid
                container
                xs={12}
                sm={12}
                justify="center"
                alignItems="center"
            >
                <List>
                    <ListItem
                        component={LinkS}
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        to="about"
                        className={classes.listItemC}
                    >
                        <ListItemText
                            primary="About"
                            classes={{ primary: classes.listItemText }}
                        />
                    </ListItem>
                    <ListItem
                        component={LinkS}
                        spy={true}
                        smooth={true}
                        to="experience"
                        className={classes.listItemC}
                    >
                        <ListItemText
                            primary="Experience"
                            classes={{ primary: classes.listItemText }}
                        />
                    </ListItem>
                    <ListItem
                        component={LinkS}
                        spy={true}
                        smooth={true}
                        to="education"
                        className={classes.listItemC}
                    >
                        <ListItemText
                            primary="Education"
                            classes={{ primary: classes.listItemText }}
                        />
                    </ListItem>
                    <ListItem
                        component={LinkS}
                        spy={true}
                        smooth={true}
                        to="skills"
                        className={classes.listItemC}
                    >
                        <ListItemText
                            primary="Skills"
                            classes={{ primary: classes.listItemText }}
                        />
                    </ListItem>
                    <ListItem
                        component={LinkS}
                        spy={true}
                        smooth={true}
                        to="interests"
                        className={classes.listItemC}
                    >
                        <ListItemText
                            primary="Interests"
                            classes={{ primary: classes.listItemText }}
                        />
                    </ListItem>
                </List>
            </Grid>
        </Dialog>
    );
};

export default Sidebar;
