import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
}));

function Saved() {
    const classes = useStyles();
    return (
        <>
            <h1>SAVED PAGE</h1>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </Grid>
                <Grid item lg={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item lg={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item lg={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item lg={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item lg={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item lg={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
            </Grid>
        </>
    );
}

export default Saved;
