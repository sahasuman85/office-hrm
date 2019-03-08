import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './component/login'

//adduser
import AddUser from './component/adminview/addUser'

const Routes = () => {
    return (
        <div>
            {/* <Header/> */}
            <Switch>
                {/* <Route path="/uncontrolled" exact component={Uncontrolled} />*/}
                <Route path="/adduser" exact component={AddUser} /> 
                <Route path="/" exact component={Login} />
            </Switch>
        </div>
    )
};

export default Routes;