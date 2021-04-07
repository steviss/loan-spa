import { Box, Button, FormControl, InputLabel, Link, MenuItem, Select, Tab, Tabs, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';

type CurrenciesType = 'USD' | 'EUR' | 'GBP';
type LoanType = 'Standard' | 'Premium' | 'Deluxe';

export const LoanForm: React.FC = () => {
    const [currency, setCurrency] = useState<CurrenciesType>('USD');
    const [loanType, setLoanType] = useState<LoanType>('Standard');
    const hangleCurrencyChange = (event: React.ChangeEvent<{}>, newValue: CurrenciesType) => {
        setCurrency(newValue);
    };
    const handleLoanChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setLoanType(event.target.value as LoanType);
    };
    return (
        <Formik initialValues={{ loanType: loanType, currency: currency, homePrice: 10000, downPayment: 20000, dim: 24 }} onSubmit={async (values, { setErrors }) => {}}>
            {({ isSubmitting }) => (
                <Form>
                    <Box component="header">
                        <Box>
                            <PhonelinkSetupIcon />
                        </Box>
                        <Typography component="h3">New Loan Application</Typography>
                    </Box>
                    <Box>
                        <Box>
                            <FormControl>
                                <InputLabel id="loan-type-label">Type of Loan</InputLabel>
                                <Select labelId="loan-type-label" id="loan-type-select" value={loanType} onChange={handleLoanChange}>
                                    <MenuItem value={'Standard'}>Standard</MenuItem>
                                    <MenuItem value={'Premium'}>Premium</MenuItem>
                                    <MenuItem value={'Deluxe'}>Deluxe</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box>
                            <Tabs value={currency} onChange={hangleCurrencyChange} aria-label="currency tabs">
                                <Tab label="USD" value="USD" />
                                <Tab label="EUR" value="EUR" />
                                <Tab label="GBP" value="GBP" />
                            </Tabs>
                        </Box>
                    </Box>
                    <Box component="footer">
                        <Button variant="outlined" color="inherit">
                            <Typography component="span">Get real mortgage offer</Typography>
                        </Button>
                        <Box>
                            <Typography component="span">
                                Not looking for a loan? You're a service provider? (bank, notary, appraiser, loan officer, etc).
                                <Link>Sign up here</Link>
                            </Typography>
                        </Box>
                    </Box>
                </Form>
            )}
        </Formik>
    );
};
