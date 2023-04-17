import React from "react";
import logo from "../images/logo.svg"
import { navlink, socialLinks } from "../data";

const Navlinks = () => {
    return(
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className='nav-links' id="nav-links">
          {navlink.map((links) => {
            return(
        <li key={links.id}>
            <a href={links.href} className='nav-link'> {links.text} </a>
        </li>
            )
          })}
        </ul>

        <ul className="nav-icons">
            {socialLinks.map((social) => {
                const {id, href, icon} = social
                return(
            <li key={id}>
                <a href={href} target="_blank" rel="noreferrer" className="nav-icon">
                <i className={icon}></i> </a>
            </li>
                )
            })}
        </ul>
      </div>
    </nav>
    )
}

export default Navlinks