import React from 'react';
import { Grid, CircularProgress, Typography } from '@material-ui/core';

export const LoadingPage: React.FC = () => {
    return (
        <Grid container alignItems="center" justify="center" style={{ flex: '1 1 100%' }}>
            <Grid style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <CircularProgress size={32} style={{ marginBottom: '2rem' }} />
                <Typography>Please wait, loading.</Typography>
            </Grid>
        </Grid>
    );
};
