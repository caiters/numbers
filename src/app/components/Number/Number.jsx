import React from "react";

const Number = number =>
  <button type="button" className="number" disabled="{number.selected}">
    {number.number}
  </button>;

export default Number;
