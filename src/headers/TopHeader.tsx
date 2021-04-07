import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';

export const TopHeader: React.FC = () => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography component="h1">LoanAid.AI</Typography>
                <Button variant="outlined" color="inherit">
                    <Typography component="span">Login</Typography>
                </Button>
                <Button variant="outlined" color="inherit">
                    <LanguageIcon />
                    <Typography component="span">EN</Typography>
                </Button>
            </Toolbar>
        </AppBar>
    );
};
