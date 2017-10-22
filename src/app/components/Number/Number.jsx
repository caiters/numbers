import React from "react";

const Number = props =>
  <button type="button" className="number" disabled="{props.number.selected}">
    {props.number.number}
  </button>;

export default Number;
