  
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './hoc/layout/Layout';
import Home from './containers/Home/Home';
import Login from './containers/Auth/Login/Login';
import Bugs from './containers/Bugs/Bugs';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/bugs" component={Bugs} />
        <Route exact path="/login" component={Login} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
};

export default App;