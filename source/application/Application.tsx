import React, { StrictMode, Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ResourcesBoundary } from 'react-use-resource';

import { ErrorBoundary } from '~modules/ui/error-boundary';

const Authorization = lazy(() => import('./pages/authorization').then((m) => ({ default: m.Authorization })));
const Landing = lazy(() => import('./pages/landing').then((m) => ({ default: m.Landing })));
const Users = lazy(() => import('./pages/users').then((m) => ({ default: m.Users })));

import { ApplicationI18N } from './components/application-i18n';
import { ApplicationNavigation } from './components/application-navigation';
import { ApplicationTheme } from './components/application-theme';

export const Application: React.FC = () => {
  return (
    <StrictMode>
      <ErrorBoundary>
        <ResourcesBoundary>
          <ApplicationI18N>
            <ApplicationTheme>
              <Suspense fallback={null}>
                <BrowserRouter>
                  <ApplicationNavigation />
                  <Suspense fallback={null}>
                    <Switch>
                      <Route path="/" exact component={Landing} />
                      <Route path="/authorization" component={Authorization} />
                      <Route path="/users" component={Users} />
                    </Switch>
                  </Suspense>
                </BrowserRouter>
              </Suspense>
            </ApplicationTheme>
          </ApplicationI18N>
        </ResourcesBoundary>
      </ErrorBoundary>
    </StrictMode>
  );
};
