import { gql } from '@apollo/client';

export const GET_MORTGAGES = gql`
    query GetMortgages {
        mortgages @client {
            id
            amount
            rate
        }
    }
`;
