import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Search() {
  return (
    <NavLink
    exact="true"
    to="/dev"
    className='sm:px-15'>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-search"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="#ff2825"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="10" cy="10" r="7" />
      <line x1="21" y1="21" x2="15" y2="15" />
    </svg>
  </NavLink>
  )
}

