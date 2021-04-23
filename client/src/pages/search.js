import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SearchBar from "../components/SearchBar";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.primary,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    textField: {
        width: "50%",
    },
}));

function Search() {
    const classes = useStyles();
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <h1>(React) Google Books Search</h1>
                        <h2>Search and Save Books of Interest</h2>
                    </Paper>
                    <Paper className={classes.paper}>
                        <SearchBar />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <h1>LIST GO HERE</h1>
                    </Paper>

                </Grid>
            </Grid>
        </>
    );
}

export default Search;
