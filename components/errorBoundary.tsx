import React, { Component, ErrorInfo, ReactNode } from 'react';
import FallbackComponent from './fallbackComponent';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ hasError: true });
    // You can also log the error to an error tracking service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <FallbackComponent />; // Render a fallback UI
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
