import React from 'react'
import perfil from '../../assets/perfil1.png'
import cv from '../../assets/docs/cv.pdf'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <>
      <div className='imagen-perfil'>
        <img src={perfil} alt="Foto Perfil" />
      </div>

      <div className='contenido contenido-inicio'>
        <h2 className='titulo-contenido'>Sobre Mi</h2>
        <p className='texto-inicio'><span>Hola!</span> Mi nombre es Juan Carlos Canosa, soy <span>Desarrollador Web Junior</span>. Llevo muchos años trabajando como recambista, pero mi pasión es la tecnología, y me gustaría llegar a ser desarrollador web full-stack.</p>

        <p className='texto-inicio'>Para poder conseguirlo, estoy realizado varios cursos por mi cuenta que podrás ver descargandote mi CV en esta misma página, entre ellos constan, un curso de <span>Python</span> y otro de <span>React</span> por ejemplo.</p>

        <p className='texto-inicio'>Entre las aptitudes que he podido ir adquiriendo hasta el momento se encuentran, <span>HTML, CSS, PHP, JavaScript, Java, SQL, XML</span> y algún otro lenguaje que forma parte tanto de la formación académica reglada, como de los cursos que hago por mi cuenta.</p>

        <p className='texto-foot-inicio'><span>Muchas gracias por visitar mi página personal, espero que nos veamos muy pronto!</span></p>

        <div className='link'>
          <a href={cv} target='blank'>Ver CV</a>
        </div>
      </div>
    </>
  )
}
