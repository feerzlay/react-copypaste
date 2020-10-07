import React, { StrictMode, Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ResourcesBoundary } from 'react-use-resource';

import { ErrorBoundary } from '~modules/ui/error-boundary';

const Landing = lazy(() => import('./pages/landing').then((m) => ({ default: m.Landing })));
const Users = lazy(() => import('./pages/users').then((m) => ({ default: m.Users })));

import { ApplicationNavigation } from './components/application-navigation';
import { ApplicationTheme } from './components/application-theme';

export const Application: React.FC = () => {
  return (
    <StrictMode>
      <ErrorBoundary>
        <ResourcesBoundary>
          <Suspense fallback={null}>
            <BrowserRouter>
              <ApplicationTheme>
                <ApplicationNavigation />
                <Suspense fallback={null}>
                  <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/users" component={Users} />
                  </Switch>
                </Suspense>
              </ApplicationTheme>
            </BrowserRouter>
          </Suspense>
        </ResourcesBoundary>
      </ErrorBoundary>
    </StrictMode>
  );
};
