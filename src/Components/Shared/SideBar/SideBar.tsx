import React, { useContext, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext";

export default function SideBar({ toggleSidebar }) {
  let { userData } = useContext(AuthContext);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
    toggleSidebar();
  };

  return (
    <div className="sideBar-container">
      <Sidebar collapsed={isCollapsed}>
        <Menu>
          <MenuItem
            onClick={handleToggle}
            icon={<i className="fa fa-bars" aria-hidden="true"></i>}
          ></MenuItem>

          <div className="profileData text-center">
            <img
              src={userData?.image}
              className={`rounded-circle`}
              style={{
                width: isCollapsed ? "2rem" : "8rem",
                transition: "all 300ms",
                margin: "30px 0px",
              }}
              alt=""
            />
            <h1
              className="h6 my-3"
              style={{
                display: isCollapsed ? "none" : "block",
                transition: "all 300ms",
              }}
            >{`${userData?.firstName} ${userData?.lastName}`}</h1>
          </div>

          <MenuItem
            component={<Link to="/home" />}
            icon={<i className="fa fa-home" aria-hidden="true"></i>}
          >
            Home
          </MenuItem>
          <MenuItem
            component={<Link to="/home/userList" />}
            icon={<i className="fa fa-users" aria-hidden="true"></i>}
          >
            Users
          </MenuItem>
          <MenuItem
            component={<Link to="/home/userData" />}
            icon={<i className="fa fa-user" aria-hidden="true"></i>}
          >
            Add User
          </MenuItem>
          <MenuItem
            component={<Link to="/home/profile" />}
            icon={<i className="fa fa-user" aria-hidden="true"></i>}
          >
            Profile
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}
