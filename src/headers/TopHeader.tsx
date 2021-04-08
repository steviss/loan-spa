import React from 'react';
import { AppBar, Box, Button, Grid, Toolbar, Typography } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';

export const TopHeader: React.FC = () => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Grid container alignItems="center" justify="space-between">
                    <Box>
                        <Typography component="h1">LoanAid.AI</Typography>
                    </Box>
                    <div>
                        <Button variant="outlined" color="inherit" disableElevation style={{ marginRight: '1rem' }}>
                            <Typography component="span" style={{ padding: '0 1rem' }}>
                                Login
                            </Typography>
                        </Button>
                        <Button variant="contained" color="primary" disableElevation>
                            <LanguageIcon />
                            <Typography component="span" style={{ marginLeft: '0.5rem' }}>
                                EN
                            </Typography>
                        </Button>
                    </div>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};
