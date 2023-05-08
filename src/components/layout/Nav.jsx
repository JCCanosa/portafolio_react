import React from 'react'
import home from '../../assets/home.svg'
import proyectos from '../../assets/projects.svg'
import snipets from '../../assets/snipets.svg'
import contacto from '../../assets/contact.svg'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <>
      <ul className='menu'>
        <li>
          <NavLink to={'/inicio'}>
            <img src={home} alt="Inicio" />
          </NavLink>
        </li>

        <li>
          <NavLink to={'/proyectos'}>
            <img src={proyectos} alt="Proyectos" />
          </NavLink>
        </li>

        <li>
          <NavLink to={'/snipets'}>
            <img src={snipets} alt="Snipets" />
          </NavLink>
        </li>

        <li>
          <NavLink to={'/contacto'}>
            <img src={contacto} alt="Contacto" />
          </NavLink>
        </li>
      </ul>
    </>
  )
}
