import React from 'react'
import { socialLinks } from '../data'
import PageLink from './PageLink'

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLink parentLink='footer-links' childLink='footer-link'/>
      
      <ul className="footer-icons">
        {socialLinks.map((social) => {
            return(
        <li key={social.id}>
          <a href={social.href} target="_blank" rel='noreferrer' className="footer-icon">
            <i className={social.icon}></i>
            </a>
        </li>
            )
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>

  )
}

export default Footer