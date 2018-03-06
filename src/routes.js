import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from ".pages/home";
import Blog from ".pages/blog";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/blog" component={Blog} />
  </Switch>
);
