import React from "react";
import { Route } from "react-router-dom";

import MainNavBar from "./MainNavBar";
import SubNavBar from "./SubNavBar";

export default function NavWrapper(props) {
  const appleItems = ["Mac", "iPad", "iPhone", "Watch", "TV", "Music"];
  return (
    <div className="nav-wrapper">
      <MainNavBar items={appleItems} />
      {appleItems.map(item => (
        <Route path={`/${item.toLowerCase()}`} component={SubNavBar} />
      ))}
    </div>
  );
}
