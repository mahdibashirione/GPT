import React, { useState } from "react";
import "../styles/global.css";

const Sidebar = () => {
  return (
    <nav
      className={`hidden lg:block border-r p-2 lg:w-[340px] duration-200 relative`}
    >
      <div className="sticky top-2"></div>
    </nav>
  );
};

export default Sidebar;
