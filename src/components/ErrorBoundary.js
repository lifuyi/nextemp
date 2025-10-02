import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import AnimatedText from "@/components/AnimatedText";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="h-screen w-full flex flex-col items-center justify-center dark:bg-dark bg-light p-4">
          <AnimatedText 
            text="Oops!" 
            className="!text-6xl md:!text-5xl sm:!text-4xl !mb-4" 
          />
          <AnimatedText 
            text="Something went wrong" 
            className="!text-4xl md:!text-3xl sm:!text-2xl !mb-8 text-center" 
          />
          
          <p className="my-4 text-center text-lg md:text-base sm:text-sm max-w-md">
            An unexpected error occurred in the application. We're sorry for the inconvenience.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <button
              onClick={() => {
                this.setState({ hasError: false });
                window.location.reload();
              }}
              className="inline-block rounded-lg border-2 border-solid bg-dark px-6 py-3
                font-semibold text-light hover:border-dark hover:bg-light hover:text-dark 
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                transition-all duration-300 cursor-pointer"
            >
              Reload Page
            </button>
            
            <Link
              href="/"
              className="inline-block rounded-lg border-2 border-solid bg-dark px-6 py-3
                font-semibold text-light hover:border-dark hover:bg-light hover:text-dark 
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                transition-all duration-300"
            >
              Go Home
            </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;