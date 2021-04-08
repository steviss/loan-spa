import { Box, Button, Divider, FormControl, Grid, InputLabel, Link, List, ListItem, ListItemIcon, ListItemText, MenuItem, Paper, Select, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
import { useSlider } from '../hooks/useSlider';
import { CurrenciesType } from '../types/Currency';
import { LoanType } from '../types/Loan';
import { getLoanInYears } from '../utilities/getLoanInYears';
import { CustomSelectField } from './CustomInputFields';
import { CustomTabs } from './CustomTabs';
import { CustomTab } from './CustomTab';
import { getCurrency } from '../utilities/getCurrency';
import { GET_MORTGAGES } from '../graphql/getMortgages';
import { useQuery } from '@apollo/client';
import { Mortgage } from '../types/Mortgages';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

const homePriceMarks = [50000, 250000, 500000];
const downPaymentMarks = [10000, 50000, 100000];
const durationMonthsMarks = [20, 120, 240];

export const LoanForm: React.FC = () => {
    const { data } = useQuery(GET_MORTGAGES);
    //for simulation purposes
    const [complete, setComplete] = useState<boolean>(true);
    const [currency, setCurrency] = useState<CurrenciesType>('USD');
    const [loanType, setLoanType] = useState<LoanType>('Standard');
    const { value: hMValue, RenderSlider: HMSlider } = useSlider({
        id: 'homePrice',
        label: 'Home Price',
        min: 50000,
        max: 500000,
        defaultValue: 100000,
        valueLabel: getCurrency(currency) as string,
        marks: homePriceMarks,
    });
    const { value: dPsValue, RenderSlider: DPSlider } = useSlider({
        id: 'downPayment',
        label: 'Down Payment',
        min: 10000,
        max: 100000,
        defaultValue: 20000,
        valueLabel: getCurrency(currency) as string,
        marks: downPaymentMarks,
    });
    const { value: dMValue, RenderSlider: DMSlider } = useSlider({
        id: 'dim',
        label: 'Duration in months',
        defaultValue: 24,
        min: 20,
        max: 240,
        valueLabel: 'months',
        marks: durationMonthsMarks,
    });
    const hangleCurrencyChange = (event: React.ChangeEvent<{}>, newValue: CurrenciesType) => {
        setCurrency(newValue);
    };
    const handleLoanChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setLoanType(event.target.value as LoanType);
    };
    let perMonthValue = Math.round((hMValue - dPsValue) / (dMValue | 1));
    return (
        <Formik
            initialValues={{ loanType: loanType, currency: currency, homePrice: 50000, downPayment: 20000, dim: 24 }}
            onSubmit={async (values) => {
                console.log('form values:', values);
                setComplete(true);
            }}
        >
            {({ resetForm }) => (
                <Form>
                    {complete ? (
                        <Paper component="div" square elevation={15}>
                            <Grid component="div" container>
                                <Grid container direction="column" style={{ marginBottom: '4rem' }}>
                                    <List style={{ marginBottom: '4rem' }}>
                                        {data.mortgages.map((item: Mortgage) => {
                                            return (
                                                <>
                                                    <ListItem key={item.id}>
                                                        <ListItemIcon>
                                                            <AccountBalanceIcon />
                                                        </ListItemIcon>
                                                        <ListItemText>
                                                            <Typography>Bank ID: {item.id}</Typography>
                                                            <Typography>Mortgage: {item.amount}</Typography>
                                                            <Typography>Rate: {item.rate}</Typography>
                                                        </ListItemText>
                                                    </ListItem>
                                                    <Divider variant="inset" component="li" />
                                                </>
                                            );
                                        })}
                                    </List>
                                </Grid>
                                <Grid component="footer" container direction="column" alignItems="center" style={{ padding: '1rem' }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        style={{ alignSelf: 'stretch' }}
                                        onClick={() => {
                                            resetForm();
                                            setComplete(false);
                                        }}
                                    >
                                        <Typography component="span">Try again</Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    ) : (
                        <Paper component="div" square elevation={15}>
                            <Grid component="div" container>
                                <Grid direction="column" item container xs={12} md={8} style={{ padding: '2rem 3rem' }}>
                                    <Grid component="header" alignItems="center" container style={{ marginBottom: '4rem' }}>
                                        <Box
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius: '0.5rem',
                                                padding: '0.5rem',
                                                backgroundColor: '#3baf57',
                                            }}
                                        >
                                            <PhonelinkSetupIcon style={{ fill: '#fff' }} />
                                        </Box>
                                        <Typography component="h3" variant="h5" style={{ marginLeft: '1.5rem' }}>
                                            New Loan Application
                                        </Typography>
                                    </Grid>
                                    <Grid container alignItems="flex-end" style={{ marginBottom: '2rem' }}>
                                        <FormControl style={{ flex: 1, maxWidth: '15rem', marginRight: '2rem' }}>
                                            <InputLabel id="loan-type-label">Type of Loan</InputLabel>
                                            <Select labelId="loan-type-label" id="loan-type-select" value={loanType} onChange={handleLoanChange} input={<CustomSelectField />}>
                                                <MenuItem value={'Standard'}>Standard</MenuItem>
                                                <MenuItem value={'Premium'}>Premium</MenuItem>
                                                <MenuItem value={'Deluxe'}>Deluxe</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <Box style={{ padding: '0 1rem' }}>
                                            <CustomTabs value={currency} onChange={hangleCurrencyChange} aria-label="currency tabs">
                                                <CustomTab label="USD" value="USD" />
                                                <CustomTab label="EUR" value="EUR" />
                                                <CustomTab label="GBP" value="GBP" />
                                            </CustomTabs>
                                        </Box>
                                    </Grid>
                                    <Grid container direction="column" style={{ marginBottom: '4rem' }}>
                                        <HMSlider />
                                        <DPSlider />
                                        <DMSlider />
                                    </Grid>
                                    <Grid component="footer" container direction="column" alignItems="center" style={{ padding: '0 1rem' }}>
                                        <Button variant="contained" color="primary" style={{ alignSelf: 'stretch' }} type="submit">
                                            <Typography component="span">Get real mortgage offer</Typography>
                                        </Button>
                                        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem 0', maxWidth: '60%' }}>
                                            <Typography component="span">
                                                Not looking for a loan? You're a service provider? (bank, notary, appraiser, loan officer, etc). <Link>Sign up here</Link>
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Grid direction="column" item container xs={12} md={4} justify="space-evenly" style={{ backgroundColor: '#f9f9f9', padding: '4rem 2rem' }}>
                                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <Typography variant="h6" style={{ marginBottom: '1rem', color: '#aaadbd' }}>
                                            Estimated Payment
                                        </Typography>
                                        <Box style={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <Typography variant="h4">
                                                {getCurrency(currency)} {perMonthValue}
                                            </Typography>
                                            <Typography variant="body1" style={{ marginBottom: '0.25rem' }}>
                                                /month
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '2rem', borderBottom: '2px solid #ececf2' }}>
                                        <Typography variant="body1" style={{ marginBottom: '1rem', color: '#aaadbd' }}>
                                            Loan Amount
                                        </Typography>
                                        <Typography variant="h5">{getCurrency(currency)} 100.000</Typography>
                                    </Box>
                                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '2rem', borderBottom: '2px solid #ececf2' }}>
                                        <Typography variant="body1" style={{ marginBottom: '1rem', color: '#aaadbd' }}>
                                            Down Payment
                                        </Typography>
                                        <Typography variant="h5">{getCurrency(currency)} 20.000</Typography>
                                    </Box>
                                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '2rem', borderBottom: '2px solid #ececf2' }}>
                                        <Typography variant="body1" style={{ marginBottom: '1rem', color: '#aaadbd' }}>
                                            Loan term
                                        </Typography>
                                        <Typography variant="h5">{getLoanInYears(dMValue)}</Typography>
                                    </Box>
                                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '2rem', borderBottom: '2px solid #ececf2' }}>
                                        <Typography variant="body1" style={{ marginBottom: '1rem', color: '#aaadbd' }}>
                                            Propery Tax
                                        </Typography>
                                        <Typography variant="h5">1.2%/year</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Paper>
                    )}
                </Form>
            )}
        </Formik>
    );
};
