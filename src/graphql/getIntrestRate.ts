import { gql } from '@apollo/client';

export const GET_INTEREST_RATE = gql`
    query GetIntrestRate {
        intrestRate @client {
            id
            amount
        }
    }
`;
