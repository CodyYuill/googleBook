import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import Hero from "../components/Hero";
import API from "../utils/API";
import SavedBook from "../components/SavedBook";

const useStyles = makeStyles((theme) => ({}));

function Saved() {
    const classes = useStyles();

    const [savedBooks, setSavedBooks] = useState([]);

    useEffect(() => {
        getSaved();
    }, []);

    const handleDelete = (id) => {
        API.deleteBook(id);
        getSaved();
    };

    const getSaved = () => {
        API.getSaved().then((res) => {
            setSavedBooks(res.data);
            //console.log(res.data[0]._id);
        });
    };

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Hero />
                </Grid>
                <Grid item xs={12}>
                    <Paper>
                        {savedBooks.map((value, index) => {
                            return (
                                <div key={index}>
                                    <Grid container spacing={3} item xs={12}>
                                        <SavedBook
                                            title={value.title}
                                            authors={value.authors}
                                            link={value.link}
                                            cover={value.image}
                                            description={value.description}
                                            handleDelete={handleDelete}
                                            id={value._id}
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

export default Saved;
