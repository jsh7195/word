import React, { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom';
import { Intro, Play, End } from "@template/Page";

const Menu = [
  { id: "Intro", component: Intro, link: "/Intro" },
  { id: "Play", component: Play, link: "/Play" },
  { id: "End", component: End, link: "/End" },
];

const MainPage = () => {
  

  const switchRoutes = (
    <Switch>
      <Route exact path="/" component={Intro} />
      {Menu.map((prop) => {
        console.log(prop);
        return (
          <Route path={prop.link} component={prop.component} key={prop.id} />
        );
      })}
    </Switch>
  );

  return switchRoutes;
};

export default MainPage;
