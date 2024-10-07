import { Outlet } from "react-router-dom";
import { useState } from "react";
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";
import "./MasterLayout.css";

export default function MasterLayout() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`layout-container`}>
      <div className={`sidebar-container ${collapsed ? "collapsed" : ""} `}>
        <SideBar toggleSidebar={toggleSidebar} />
      </div>
      <div className={`content-container ${collapsed ? "collapsed" : ""}`}>
        <NavBar />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
