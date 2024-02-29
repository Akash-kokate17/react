import React from "react";
import BuggyCounter from "../error-boundry/BuggyCounter";
import ErrorBoundary from "../error-boundry/ErrorBoundary";

export function Home(props) {
  return <>This is HOme
  <br/>
 <ErrorBoundary>
 <BuggyCounter/>
 </ErrorBoundary>
 =================================
 <BuggyCounter/>
  </>;
 
}
