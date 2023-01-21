import * as React from "react";
import { Switch, Route, Router } from "wouter";

import Home from "../pages/index";
import Login from "../pages/login";
import Map from "../pages/map";


/**
* The router is imported in app.jsx
*
* Our site just has two routes in it–Home and About
* Each one is defined as a component in /pages
* We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
*/

export default () => (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/map" component={Map} />
      <Route path="/login" component={Login} />
    </Switch>
);
