import React from "react";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/start">Launch App</NavLink>
    </div>
  );
};

export default Navigation;
