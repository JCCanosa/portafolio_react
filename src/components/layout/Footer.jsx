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
        <NavLink className='redes-link' to='https://www.instagram.com/juankka18/' target='blank'>
          <img src={instagram} alt="Instagram" />
        </NavLink>

        <NavLink className='redes-link' to='https://www.linkedin.com/in/juan-carlos-canosa-su%C3%A1rez-a367391b2/' target='blank'>
          <img src={linkedin} alt="LinkedIn" />
        </NavLink>

        <NavLink className='redes-link' to='https://github.com/JCCanosa' target='blank'>
          <img src={github} alt="Github" />
        </NavLink>
      </div>
      <p>&copy;<a href="mailto:jcanosa1988@gmail.com" className='enlace-copy'>Juan Carlos Canosa</a> {year}</p>
    </>
  )
}
