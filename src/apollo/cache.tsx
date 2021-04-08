import { InMemoryCache, ReactiveVar, makeVar } from '@apollo/client';
import { InterestRate } from '../types/IntrestRate';
import { Mortgages } from '../types/Mortgages';

export const cache: InMemoryCache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                mortgages: {
                    read() {
                        return mortgagesVar();
                    },
                },
                intrestRate: {
                    read() {
                        return intrestRateVar();
                    },
                },
            },
        },
    },
});

const mortgagesInitialValue: Mortgages = [
    {
        id: 0,
        rate: 3,
        amount: 20000,
    },
    {
        id: 1,
        rate: 4,
        amount: 10000,
    },
    {
        id: 2,
        rate: 2,
        amount: 5000,
    },
];

const intrestRateInitialValue: InterestRate = {
    id: 0,
    amount: 5,
};

export const mortgagesVar: ReactiveVar<Mortgages> = makeVar<Mortgages>(mortgagesInitialValue);

export const intrestRateVar = makeVar<InterestRate>(intrestRateInitialValue);
