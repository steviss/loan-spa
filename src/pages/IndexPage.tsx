import { useQuery } from '@apollo/client';
import { Grid, Container, Typography } from '@material-ui/core';
import React from 'react';
import { LoanForm } from '../components/LoanForm';
import { GET_INTEREST_RATE } from '../graphql/getIntrestRate';
import { LoadingPage } from './LoadingPage';

export const IndexPage: React.FC = () => {
    const { data, loading } = useQuery(GET_INTEREST_RATE);
    if (loading) return <LoadingPage />;
    console.log(data);
    return (
        <Container style={{ flex: '1 1 100%', padding: '4rem' }}>
            <Grid style={{ padding: '1rem 3rem 4rem 3rem' }}>
                <Typography component="h1" variant="h3" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    Calculate and Compare Your Loans
                </Typography>
                <Typography component="h5" variant="subtitle1" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                </Typography>
                <Typography component="h5" variant="subtitle1" style={{ textAlign: 'center' }}>
                    Intrest rate: {data.intrestRate.amount}%
                </Typography>
            </Grid>
            <LoanForm />
        </Container>
    );
};
