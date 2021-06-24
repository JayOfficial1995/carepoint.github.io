import React, { useState } from "react";

import Card from "../Card/Card";
import { CrossIcon } from "../../svg/index";

import {
  contactDetails,
  menuItems,
  socialDetails,
} from "../../MockData/NavbarData";
import { MenubarBeltStyle, NavbarStyle } from "./Navbar.style";

const MenubarBelt = (props) => {
  const { toggleClass, cancelAction } = props;

  return (
    <MenubarBeltStyle toggleActive={toggleClass}>
      <span className="cancel-icon" onClick={cancelAction}>
        <CrossIcon />
      </span>

      <ul className="menubar-wrapper">
        {menuItems.map((menuItem, index) => {
          const { linkText, url } = menuItem;
          return (
            <li className="menu-item">
              <a href={url} className="menu-item-link">
                {linkText}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="social-media-details">
        {socialDetails.map((socialDetail) => {
          const { icon, url } = socialDetail;
          return (
            <li className="social-link">
              <a href={url} target="_blank" className="social-link-item">
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </MenubarBeltStyle>
  );
};

function Navbar() {
  const [isActive, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!isActive);
  };

  return (
    <NavbarStyle>
      <section className="navbar-wrapper">
        <section className="top-menubar">
          <article className="logo-container">
            <picture className="logo-wrapper">
              <img
                src="./images/site-logo.png"
                alt="Site Logo"
                className="site-logo"
              />
            </picture>

            <article className="toggle-icon" onClick={toggleActive}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </article>
          </article>

          <article className="contact-info">
            {contactDetails.map((contactDetail, index) => {
              const { icon, heading, description } = contactDetail;
              return (
                <Card
                  cardType="horizontalCard"
                  icon={icon}
                  heading={heading}
                  description={description}
                  cardClass="contact-details"
                />
              );
            })}
          </article>
        </section>

        <MenubarBelt cancelAction={toggleActive} toggleClass={isActive} />
      </section>
    </NavbarStyle>
  );
}

export default Navbar;
