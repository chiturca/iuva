import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import dots from "../assets/dots.png";
import { auth, checkAuthState } from "../Firebase";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [user, setUser] = useState(null);
  const open = Boolean(anchorEl);
  const location = useLocation();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const unsubscribe = checkAuthState(setUser);
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut();
  };

  const logoutButton = user && (
    <Button color="error" variant="outlined" onClick={handleLogout}>
      Logout
    </Button>
  );

  const links = [
    { href: "/", name: `Ana Sayfa` },
    { href: "/login", name: `Giriş Yap` },
    { href: "/signup", name: `Duyuru Yap/Bağışçı Ol` },
  ];
  const authLinks = [
    { href: "/announcementpool", name: `Duyuru Havuzu` },
    { href: "/myprofile", name: `Profilim` },
    { href: "/createannouncement", name: `Duyuru Oluştur` },
    { href: "/myannouncements", name: `Duyurularım` },
  ];

  const linksToDisplay = (user ? authLinks : links).map((link) => (
    <div key={link.name} className="p-2">
      <NavLink
        className={`px-5 text-gray-500 font-medium hover:text-[#2D3BBF] duration-500 ${
          location.pathname === link.href
            ? "bg-[#2D3BBF] bg-opacity-50 text-white p-2 rounded-lg"
            : ""
        }`}
        key={link.name}
        to={link.href}
      >
        {link.name}
      </NavLink>
    </div>
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
          <div className="hidden md:flex space-x-4 items-center">
            {linksToDisplay}
            {logoutButton}
          </div>
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
                {linksToDisplay}
                {logoutButton}
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
