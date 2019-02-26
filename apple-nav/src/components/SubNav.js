import React from "react";

export default function SubNav({ name, imgSrc }) {
  return (
    <figure>
      <img src={imgSrc} alt="" />
      <figcaption>{name}</figcaption>
    </figure>
  );
}
