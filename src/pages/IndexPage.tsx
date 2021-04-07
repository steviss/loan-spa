import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { LoanForm } from '../components/LoanForm';

export const IndexPage: React.FC = () => {
    return (
        <Box>
            <Box>
                <Typography component="h1">Calculate and Compare Your Loans</Typography>
                <Typography component="h5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                </Typography>
            </Box>
            <Box>
                <Box>
                    <LoanForm />
                </Box>
                <Box></Box>
            </Box>
        </Box>
    );
};
