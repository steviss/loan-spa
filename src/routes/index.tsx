import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { IndexPage } from '../pages/IndexPage';

export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route key="index-page" path="/" children={<IndexPage />} />
        </Switch>
    );
};
