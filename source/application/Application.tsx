import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ResourcesBoundary } from 'react-use-resource';

import { ErrorBoundary } from '~modules/ui/error-boundary';

const Landing = lazy(() => import('./pages/landing').then((m) => ({ default: m.Landing })));
const Users = lazy(() => import('./pages/users').then((m) => ({ default: m.Users })));

import { ApplicationNavigation } from './components/application-navigation';

export const Application: React.FC = () => {
  return (
    <ErrorBoundary>
      <ResourcesBoundary>
        <Suspense fallback={null}>
          <BrowserRouter>
            <ApplicationNavigation />
            <Suspense fallback={null}>
              <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/users" component={Users} />
              </Switch>
            </Suspense>
          </BrowserRouter>
        </Suspense>
      </ResourcesBoundary>
    </ErrorBoundary>
  );
};
