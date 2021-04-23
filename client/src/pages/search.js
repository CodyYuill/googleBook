import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SearchBar from "../components/SearchBar";
import SearchedBook from "../components/SearchedBook";
import API from "../utils/API";

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

    const [searchValue, setSearchValue] = useState("");
    const [bookList, setBookList] = useState([]);

    const handleInputChange = (event) => {
        let value = event.target.value;
        setSearchValue(value);
    };

    const handleSearch = () => {
        API.getBooks(searchValue).then((res) => {
            let books = res.data.items;
            setBookList(books);
            setSearchValue("");
        });
    };

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <h1>(React) Google Books Search</h1>
                        <h2>Search and Save Books of Interest</h2>
                    </Paper>
                    <Paper className={classes.paper}>
                        <SearchBar
                            handleInputChange={handleInputChange}
                            handleSearch={handleSearch}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        {bookList.map((value, index) => {
                            return (
                                <div key={index}>
                                    <Grid
                                        container
                                        spacing={3}
                                        item
                                        xs={12}
                                    >
                                        <SearchedBook
                                            title={value.volumeInfo.title}
                                            authors={value.volumeInfo.authors}
                                            link={value.volumeInfo.infoLink}
                                            cover={
                                                value.volumeInfo.imageLinks
                                                    .thumbnail
                                            }
                                            description={
                                                value.volumeInfo.description
                                            }
                                        />
                                    </Grid>
                                    <hr />
                                </div>
                            );
                        })}
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
}

export default Search;
