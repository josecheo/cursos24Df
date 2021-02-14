import React, { lazy, Suspense } from 'react';
import { Route, Router, Switch, BrowserRouter } from 'react-router-dom';
import Loader from './components/loader'
import History from './history';

// COMPONENTES LOGIN

const Landing = lazy(() => import('./page/cursos/landing'))
const Administrador = lazy(() => import('./page/adm'))
const Lista = lazy(() => import('./page/adm/lista-alumnos'))
const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Router history={History}>
        <Suspense fallback={<Loader />}>
          <Switch>
            {/* <Route exact path="/">
              <Redirect to="/curso" />
            </Route> */}
            <Route exact path="/" component={Landing} />
            <Route exact path="/adm" component={Administrador} />
            <Route exact path="/adm/lista" component={Lista} />
          </Switch>
        </Suspense>
      </Router>
    </BrowserRouter>

  );
};


export default Routes;
