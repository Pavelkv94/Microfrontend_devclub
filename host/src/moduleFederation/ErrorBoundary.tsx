import React, { Component, ErrorInfo, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

interface IState {
  hasError: boolean;
  errorMessage: null | string;
}

export class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ ...this.state, errorMessage: error.message });
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Something went wrong. </h1>
          <br />
          <span>${this.state.errorMessage}</span>
        </>
      );
    }

    return this.props.children;
  }
}
