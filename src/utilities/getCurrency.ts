import { CurrenciesType } from '../types/Currency';

const currencies = {
    USD: '$',
    EUR: '€',
    GBP: '£',
};
export const getCurrency = (currency: CurrenciesType) => currencies[currency];
