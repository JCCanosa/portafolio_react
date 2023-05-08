import React from 'react'
import github from '../../assets/github.svg'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import { NavLink } from 'react-router-dom'

export const Footer = () => {

  let date = new Date();
  let year = date.getFullYear();

  return (
    <>
      <div className="redes">
        <NavLink to='https://www.instagram.com/juankka18/'>
          <img src={instagram} alt="Instagram" />
        </NavLink>

        <NavLink to='https://www.linkedin.com/in/juan-carlos-canosa-su%C3%A1rez-a367391b2/'>
          <img src={linkedin} alt="LinkedIn" />
        </NavLink>

        <NavLink to='https://github.com/JCCanosa'>
          <img src={github} alt="Github" />
        </NavLink>
      </div>

      <p>&copy; Juan Carlos Canosa {year}</p>
    </>
  )
}
