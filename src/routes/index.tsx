import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';
import Test from '../pages/Test';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Dashboard}></Route>    
        <Route path="/repository/:repository+" component={Repository}></Route>
        <Route path="/test" component={Test}></Route>
    </Switch>
);

export default Routes

    