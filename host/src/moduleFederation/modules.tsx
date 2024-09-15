import React, { Suspense } from "react";
import { ErrorBoundary } from "./ErrorBoundary";

const RemoteApp = React.lazy(async () => await import("app/App")); // указываем тот путь который задеклалировали
const SingleRemoteComponentApp = React.lazy(async () => await import("app/App2")); // указываем тот путь который задеклалировали
const SecondRemoteApp = React.lazy(async () => await import("second/App")); // указываем тот путь который задеклалировали

const RemoteFactory = (JSX: JSX.Element): JSX.Element => (
  <ErrorBoundary>
    <Suspense fallback={"Load"}>{JSX}</Suspense>
  </ErrorBoundary>
);

export const RemoteAppWithErrorBoundary = (props: any) => RemoteFactory(<RemoteApp {...props} />);
export const RemoteSecondAppWithErrorBoundary = (props: any) => RemoteFactory(<SecondRemoteApp {...props} />);
export const SingleRemoteComponentAppWithErrorBoundary = (props: any) => RemoteFactory(<SingleRemoteComponentApp {...props} />);
