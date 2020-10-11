import React, { Component } from 'react';
import { StatusCodes } from 'http-status-codes';

import { captureException } from '~modules/common/capture-exception';
import { IRequestError } from '~modules/common/use-request';

export class UsersShowErrorBoundary extends Component {
  state: { error: boolean; status: number | null } = {
    error: false,
    status: null
  };

  static getDerivedStateFromError(error: Error | IRequestError) {
    return { error: true, status: (error as IRequestError).status || null };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    captureException(error, errorInfo);
  }

  render() {
    if (this.state.error) {
      if (this.state.status === StatusCodes.NOT_FOUND) {
        return <h1>404. User not found.</h1>;
      }
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
