import React, { Component } from "react";
import styles from "../styles/ErrorBoundary.module.css";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMsg: "" };
    this.prevPath = null;
  }
  componentDidMount() {
    this.prevPath = window.location.hash;
  }
  componentDidUpdate() {
    if (window.location.hash !== this.prevPath)
      this.setState({ hasError: false, errorInfo: null });
    this.prevPath = window.location.hash;
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(info) {
    this.setState({ hasError: true, errorMsg: info });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <div className={styles.ErrorWrapper}>
            <h2>Oops, there is an error!</h2>
            <button
              type="button"
              onClick={() => this.setState({ hasError: false })}
            >
              Try again?
            </button>
          </div>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
