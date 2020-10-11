import React, { StrictMode, lazy } from 'react';

import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { ErrorBoundary } from '~modules/ui/error-boundary';
import { Suspense } from '~modules/ui/suspense';

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
        <ApplicationI18N>
          <ApplicationTheme>
            <Suspense fallback={null}>
              <Helmet>
                <title>RCP</title>
              </Helmet>
              <ApplicationNavigation />
              <Suspense fallback={null}>
                <Switch>
                  <Route path="/" exact component={Landing} />
                  <Route path="/authorization" component={Authorization} />
                  <Route path="/users" component={Users} />
                </Switch>
              </Suspense>
            </Suspense>
          </ApplicationTheme>
        </ApplicationI18N>
      </ErrorBoundary>
    </StrictMode>
  );
};
