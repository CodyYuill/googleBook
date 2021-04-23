import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import clsx from "clsx";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";

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
                        <FormControl
                            className={clsx(classes.margin, classes.textField)}
                        >
                            <InputLabel>Search</InputLabel>
                            <Input
                                className={classes.input}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            type="submit"
                                            className={classes.iconButton}
                                            aria-label="search"
                                        >
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
}

export default Search;
