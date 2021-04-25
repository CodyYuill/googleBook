import React from "react";
import { ButtonGroup, Grid, Button } from "@material-ui/core";

function SavedBook(props) {
    return (
        <>
            <Grid item xs={12} sm={6}>
                <h3>{props.title}</h3>
                <h3>{props.authors}</h3>
            </Grid>
            <Grid item xs={12} sm={6}>
                <ButtonGroup
                    color="primary"
                    aria-label="text primary button group"
                >
                    <Button href={props.link} target="_blank">
                        View
                    </Button>
                    <Button onClick={()=> props.handleDelete(props.id)}>Delete</Button>
                </ButtonGroup>
            </Grid>
            <Grid item xs={12} sm={3}>
                <img src={props.cover} alt="cover image"></img>
            </Grid>
            <Grid item xs={12} sm={9}>
                <p>{props.description}</p>
            </Grid>
        </>
    );
}

export default SavedBook;
