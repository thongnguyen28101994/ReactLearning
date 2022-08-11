import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import NestedRoute from "../NestedRoute";
export default function TodoRoute() {
  const match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${match.path}/test`} component={NestedRoute}></Route>
      </Switch>
    </>
  );
}
