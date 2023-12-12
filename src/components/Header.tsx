import menu from "../assets/outlineIcons/menu.svg";
import menuX from "../assets/outlineIcons/menuX.svg";
import { menuLinks } from "../constants/constantsImg";
import { useEffect, useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuImg, setMenuImg] = useState(menu);

  useEffect(() => {
    if (showMenu === true) setMenuImg(menuX);
    if (showMenu === false) setMenuImg(menu);
  }, [showMenu]);

  return (
    <>
      <header className="header">
        <div className="head">
          <a href="#" className="logo">
            Portfolio
          </a>
          <img
            id="menuIcon"
            src={menuImg}
            width={40}
            height="auto"
            alt="menu icon"
            onClick={() => setShowMenu(!showMenu)}
          />
          <nav className="navbar">
            {menuLinks.map((link, index) => {
              return (
                <a key={index} href={link.link} onClick={() => setShowMenu(false)}>
                  {link.title}
                </a>
              );
            })}
          </nav>
        </div>
        {showMenu && (
          <div className="menuClass">
            {menuLinks.map((link, index) => {
              return (
                <div key={index}>
                  <a href={link.link} onClick={() => setShowMenu(false)}>
                    {link.title}
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
