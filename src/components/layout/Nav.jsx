import React, { useState } from 'react'
import home from '../../assets/home.svg'
import proyectos from '../../assets/projects.svg'
import snipets from '../../assets/snipets.svg'
import contacto from '../../assets/contact.svg'
import { NavLink } from 'react-router-dom'

export const Nav = () => {

  function mouseEnter(id){
    let element = document.getElementById(id)
    element.style.opacity = '1'
  }

  function mouseOut(id){
    let element = document.getElementById(id)
    element.style.opacity = '0'
  }

  return (
    <>
      <ul className='menu'>
        <li>
          <NavLink to={'/inicio'}>
            <img className='img-nav' src={home} alt="Inicio" onMouseOver={() => mouseEnter('text-home')} onMouseOut={() => mouseOut('text-home')}/>
          </NavLink>
          <p className='text-nav' id='text-home'>Home</p>
        </li>

        <li>
          <NavLink to={'/proyectos'}>
            <img src={proyectos} alt="Proyectos" onMouseOver={() => mouseEnter('text-proyectos')} onMouseOut={() => mouseOut('text-proyectos')} />
          </NavLink>
          <p className='text-nav' id='text-proyectos'>Proyectos</p>
        </li>

        <li>
          <NavLink to={'/snipets'}>
            <img src={snipets} alt="Snipets" onMouseOver={() => mouseEnter('text-snipets')} onMouseOut={() => mouseOut('text-snipets')} />
          </NavLink>
          <p className='text-nav' id='text-snipets'>Snippets</p>
        </li>

        <li>
          <NavLink to={'/contacto'}>
            <img src={contacto} alt="Contacto" onMouseOver={() => mouseEnter('text-contacto')} onMouseOut={() => mouseOut('text-contacto')} />
          </NavLink>
          <p className='text-nav' id='text-contacto'>Contacto</p>
        </li>
      </ul>
    </>
  )
}
