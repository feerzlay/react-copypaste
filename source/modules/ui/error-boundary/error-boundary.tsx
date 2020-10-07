import React, { Component } from 'react';

import { captureException } from '~modules/common/capture-exception';

export class ErrorBoundary extends Component {
  state = {
    error: false
  };

  static getDerivedStateFromError() {
    return { error: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    captureException(error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
