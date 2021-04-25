import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Input, InputLabel, InputAdornment, FormControl } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import clsx from "clsx";

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

function Search(props) {
    const classes = useStyles();
    return (
        <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel>Search</InputLabel>
            <Input
                className={classes.input}
                onChange={props.handleInputChange}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            type="submit"
                            className={classes.iconButton}
                            aria-label="search"
                            onClick={props.handleSearch}
                        >
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    );
}

export default Search;
