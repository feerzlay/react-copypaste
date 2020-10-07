import React, { Component } from 'react';

export class ErrorBoundary extends Component {
  state = {
    error: false
  };

  static getDerivedStateFromError() {
    return { error: true };
  }

  componentDidCatch() {
    // TODO: Sentry
  }

  render() {
    if (this.state.error) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
