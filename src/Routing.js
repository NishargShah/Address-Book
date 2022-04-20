import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

const List = lazy(() => import('./pages/List'));
const Add = lazy(() => import('./pages/Add'));
const FourZeroFour = lazy(() => import('./pages/404'));

const Routing = () => {
  const routes = [
    {
      exact: true,
      path: '/',
      component: () => <List />,
    },
    {
      exact: true,
      path: '/edit/:id',
      component: () => <Add isEditMode />,
    },
    {
      exact: true,
      path: '/add',
      component: () => <Add />,
    },
    {
      exact: true,
      path: '/404',
      component: () => <FourZeroFour />,
    },
  ].filter(cur => cur);

  return (
    <BrowserRouter>
      <Suspense className="loader" fallback={<p>Loading...</p>}>
        <Switch>
          {routes.map(route => (
            <Route
              exact={route.exact !== false}
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
          <Redirect from="/" to="/404" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routing;
