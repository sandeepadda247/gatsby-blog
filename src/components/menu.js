import React from "react"
import { Link } from "gatsby"

const Menu = () => {
  return (
    <ul className="menu">
      <li>
        <Link to="/government-jobs">Govt Jobs</Link>
      </li>
      <li>
        <Link to="/state-govt-jobs">State Jobs</Link>
      </li>
      <li>
        <Link to="/sarkari-result">Result & Admit Card</Link>
      </li>
    </ul>
  )
}

export default Menu
