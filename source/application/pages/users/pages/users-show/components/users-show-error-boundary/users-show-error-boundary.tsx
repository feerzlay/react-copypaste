import React, { Component } from 'react';
import { StatusCodes } from 'http-status-codes';

import { captureException } from '~modules/common/capture-exception';

export class UsersShowErrorBoundary extends Component {
  state: { error: boolean; status: number | null } = {
    error: false,
    status: null
  };

  static getDerivedStateFromError(error: Response | Error) {
    return { error: true, status: (error as Response).status || null };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    captureException(error, errorInfo);
  }

  render() {
    const { error, status } = this.state;

    if (error) {
      if (status === StatusCodes.NOT_FOUND) {
        return <h1>404. User not found.</h1>;
      }
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
