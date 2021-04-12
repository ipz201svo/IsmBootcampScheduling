import * as React from 'react';
import { Route } from 'react-router';
import LoginForm from "./features/loginForm/LoginForm";

import './custom.css'

export default () => (
    /*<Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
    </Layout>*/
    <Route exact path='/' component={LoginForm}/>
    /*<LoginForm  />*/
);
