import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { TopHeader } from './headers/TopHeader';
import { Routes } from './routes';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <main className="wrapper">
                <TopHeader />
                <Routes />
            </main>
        </BrowserRouter>
    );
};

export default App;
