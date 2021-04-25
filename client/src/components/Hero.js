import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.primary,
    }
}));

function Hero() {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <h1>(React) Google Books Search</h1>
            <h2>Search and Save Books of Interest</h2>
        </Paper>
    );
}

export default Hero;
