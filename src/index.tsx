import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { cache } from './apollo/cache';

const client = new ApolloClient({ cache, connectToDevTools: true });

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#61cc7b',
            main: '#3baf57',
            dark: '#197730',
            contrastText: '#fff',
        },
    },
});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
