import React from "react"
import Link from "gatsby-link"

const Menu = () => {
  return (
    <div
      style={{
        backgroundColor: `#f4f4f4`,
        padding: `10px`,
      }}
    >
      <ul
        style={{
          display: `flex`,
          justifyContent: `space-around`,
          listStyle: `none`,
          marginBottom: `-10px`,
          width: `auto`,
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  )
}
export default Menu
