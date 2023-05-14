import React from 'react'
import { Link } from 'react-router-dom'

import as5 from '../../assets/img/AppSalon/asg-5.png'
import br1 from '../../assets/img/BienesRaices/brg-1.png'
import blogCafe from '../../assets/img/blogCafe.png'
import calcPorcentajes from '../../assets/img/calcPorcentajes.png'
import documentacionJS from '../../assets/img/documentacionJS.png'
import encuestaProg from '../../assets/img/encuestaProg.png'
import festivalMusica from '../../assets/img/festivalMusica.png'
import freelance from '../../assets/img/freelance.png'
import landingPageJbl from '../../assets/img/landingPageJbl.png'
import tiendaCamisetas from '../../assets/img/tiendaCamisetas.png'
import tributoRayden from '../../assets/img/tributoRayden.png'

export const Proyectos = () => {
  return (
    <>
      <div className='contenido'>
        <h2 className='titulo-contenido'>Proyectos</h2>

        <p className='centrar-texto'>Proyectos creados durante mi etapa inicial de aprendizaje.</p>
        <p className='centrar-texto'>Los proyectos creados con <span>PHP</span> contienen una galería de imagenes del resultado, ya que no estan  hospedadas en ningún dominio o servidor.</p>

        <div className='presentacion-proyectos'>

          {/* AppSalon */}
          <div className='imagen-proyecto'>
            <Link to='/proyectos/appsalon'>
              <img loading='lazy' src={as5} alt="Portada App Salon" />
              <figcaption>AppSalon</figcaption>
            </Link>
          </div>


          {/* BienesRaices */}

          <div className='imagen-proyecto'>
            <Link to='/proyectos/bienesraices'>
              <img loading='lazy' src={br1} alt="Portada Bienes Raices" />
              <figcaption>Bienes Raíces</figcaption>
            </Link>
          </div>


          {/* Festival Musica */}

          <div className='imagen-proyecto'>
            <Link to='https://festivalmusicaejudemy.netlify.app/' target='blank'>
              <img loading='lazy' src={festivalMusica} alt="Portada Festival Música" />
              <figcaption>Festival Música</figcaption>
            </Link>
          </div>


          {/* Blog Cafe */}

          <div className='imagen-proyecto'>
            <Link to='https://blogascoffee.netlify.app/' target='blank'>
              <img loading='lazy' src={blogCafe} alt="Portada Blog Cafe" />
              <figcaption>Blog Café</figcaption>
            </Link>
          </div>


          {/* Tributo Rayden */}

          <div className='imagen-proyecto'>
            <Link to='https://tributorayden.netlify.app/' target='blank'>
              <img loading='lazy' src={tributoRayden} alt="Portada Tributo Rayden" />
              <figcaption>Tributo Rayden</figcaption>
            </Link>
          </div>


          {/* Porcentaje Aciertos */}

          <div className='imagen-proyecto'>
            <Link to='https://calc-porcentaje-aciertos.netlify.app/' target='blank'>
              <img loading='lazy' src={calcPorcentajes} alt="Portada Porcentaje Aciertos" />
              <figcaption>Porcentaje Aciertos</figcaption>
            </Link>
          </div>


          {/* Landing Page JBL */}

          <div className='imagen-proyecto'>
            <Link to='https://landingpage-jbl.netlify.app/' target='blank'>
              <img loading='lazy' src={landingPageJbl} alt="Portada Landing Page JBL" />
              <figcaption>Landing Page JBL</figcaption>
            </Link>
          </div>


          {/* Tienda Camisetas */}

          <div className='imagen-proyecto'>
            <Link to='https://tiendabase.netlify.app/' target='blank'>
              <img loading='lazy' src={tiendaCamisetas} alt="Portada Tienda Camisetas" />
              <figcaption>Tienda Camisetas</figcaption>
            </Link>
          </div>


          {/* Documentación JS */}

          <div className='imagen-proyecto'>
            <Link to='https://docjs.netlify.app/' target='blank'>
              <img loading='lazy' src={documentacionJS} alt="Portada Documentación JS" />
              <figcaption>Documentación JS</figcaption>
            </Link>
          </div>


          {/* Freelance */}

          <div className='imagen-proyecto'>
            <Link to='https://ejemplocontactofreelance.netlify.app/' target='blank'>
              <img loading='lazy' src={freelance} alt="Portada Freelance" />
              <figcaption>Freelance</figcaption>
            </Link>
          </div>


          {/* Encuesta Lenguajes Programación */}

          <div className='imagen-proyecto'>
            <Link to='https://encprogramacion.netlify.app/' target='blank'>
              <img loading='lazy' src={encuestaProg} alt="Portada Encuesta Lenguajes Programación" />
              <figcaption>Encuesta Lenguajes Programación</figcaption>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
