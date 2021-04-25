import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";
import SearchBar from "../components/SearchBar";
import SearchedBook from "../components/SearchedBook";
import Hero from "../components/Hero";
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

    const handleSave = (id) => {
        //maybe make saved notif alert("Saved!");
        console.log(bookList[id]);
        API.saveBook({
            authors: bookList[id].volumeInfo.authors,
            description: bookList[id].volumeInfo.description,
            image: bookList[id].volumeInfo.imageLinks.thumbnail,
            link: bookList[id].volumeInfo.infoLink,
            title: bookList[id].volumeInfo.title,
        }).catch(err => console.log(err));
    };

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Hero />
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
                                    <Grid container spacing={3} item xs={12} >
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
                                            handleSave={handleSave}
                                            id={index}
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
