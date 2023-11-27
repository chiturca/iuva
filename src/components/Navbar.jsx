import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
import dots from "../assets/dots.png";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const links = [
    { href: "/", name: `Ana Sayfa` },
    { href: "/login", name: `Giriş Yap` },
    { href: "/signup", name: `Duyuru Yap/Bağışçı Ol` },
  ];

  const linksToDisplay = links.map((link) => (
    <NavLink
      className={
        "px-5 text-gray-500 font-medium hover:text-[#2D3BBF] duration-500"
      }
      key={link.name}
      to={link.href}
    >
      {link.name}
    </NavLink>
  ));

  return (
    <nav className="bg-[#E4E5E9] shadow-md">
      <div className="container p-6">
        <div className="flex justify-between items-center">
          <Link to="/">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </Link>
          <div className="hidden md:flex space-x-4">{linksToDisplay}</div>
          {/* Add a responsive menu button for smaller screens */}
          <div className="md:hidden">
            <div>
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
              >
                <img src={dots} alt="dropmenu" className="h-8" />
              </IconButton>
              <Menu
                id="long-menu"
                MenuListProps={{
                  "aria-labelledby": "long-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                {links.map((link) => (
                  <div>
                    <NavLink
                      className={
                        "px-5 text-gray-500 font-medium hover:text-[#2D3BBF] duration-500"
                      }
                      key={link.name}
                      to={link.href}
                    >
                      {link.name}
                    </NavLink>
                  </div>
                ))}
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
