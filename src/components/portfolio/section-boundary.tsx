import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  section: string;
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/** Error boundary wrapping each major section so one failure can't blank the page. */
export class SectionBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(`[${this.props.section}]`, error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div role="alert" className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="text-base text-muted-foreground">
            The {this.props.section} section couldn&apos;t be displayed. Please refresh the page.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}
