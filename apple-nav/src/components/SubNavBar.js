import React from "react";

import iconData from "../iconData";

import SubNav from "./SubNav";

export default function SubNavBar(props) {
  // this gets the data we need by taking the path name, removing the '/', and adding the word Data at the end
  const data = iconData[`${props.match.path.replace("/", "")}Data`];
  return (
    <div className="sub-nav-bar">
      <div className="sub-nav-bar-content">
        {data.map((element, index) => (
          <SubNav name={element.name} imgSrc={element.icon} />
        ))}
      </div>
    </div>
  );
}
