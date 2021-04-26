import React, {useEffect, useState } from "react";
import { ButtonGroup, Grid, Button } from "@material-ui/core";

function SavedBook(props) {

    const [authors, setAuthors] = useState("");

    let authorsList = "";

    useEffect(() => {
        props.authors.forEach((value, index)=> {
             if(props.authors.length === index + 1){
                authorsList += `${value}`;

             }else {
                authorsList += `${value}, `;
            }
        });
        setAuthors(authorsList);
    }, []);

    return (
        <>
            <Grid item xs={12} sm={6}>
                <h3>{props.title}</h3>
                <h3>{authors}</h3>
            </Grid>
            <Grid item xs={12} sm={6}>
                <ButtonGroup
                    color="primary"
                    aria-label="text primary button group"
                    style={{float: "right"}}
                >
                    <Button href={props.link} target="_blank">
                        View
                    </Button>
                    <Button onClick={()=> props.handleDelete(props.id)}>Delete</Button>
                </ButtonGroup>
            </Grid>
            <Grid item xs={12} sm={3} >
                <img src={props.cover} alt="cover of book" ></img>
            </Grid>
            <Grid item xs={12} sm={9}>
                <p>{props.description}</p>
            </Grid>
        </>
    );
}

export default SavedBook;
