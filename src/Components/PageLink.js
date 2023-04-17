import React from 'react'
import { navlink } from '../data'

const PageLink = (props) => {
    const {parentLink, childLink} = props
  return (
<ul className={parentLink} id="nav-links">
        {navlink.map((links) => {
            return(
        <li key={links.id}>
            <a href={links.href} className={childLink}> {links.text} </a>
        </li>
            )
        })}
    </ul>
  )
}

export default PageLink
