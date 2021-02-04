import React, { lazy, Suspense } from 'react';
import { Route, Router, Switch, Redirect } from 'react-router-dom';
import Loader from './components/loader'
import History from './history';

// COMPONENTES LOGIN

const Landing = lazy(() => import('./page/cursos/landing'))
const Administrador = lazy(() => import('./page/adm'))
const Routes: React.FC = () => {
  return (
    <Router history={History}>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/curso" />
          </Route>
          <Route exact path="/curso" component={Landing} />
          <Route exact path="/adm" component={Administrador} />
        </Switch>
      </Suspense>
    </Router>
  );
};


export default Routes;
