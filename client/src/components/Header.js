import React from "react";
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    Google Books 
                </Typography>
                <Button color="inherit" href="/search">Search</Button>
                <Button color="inherit" href="/saved">Saved</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
