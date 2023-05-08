import React from 'react'
import perfil from '../../assets/perfil1.png'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className='contenido'>
      <div className='imagen-perfil'>
        <img src={perfil} alt="Foto Perfil" />
      </div>

      <div className='presentacion'>
        <h2>Sobre Mi</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolorem impedit deleniti iste commodi fugit distinctio asperiores nulla mollitia itaque explicabo voluptates consectetur ex atque, vero quaerat maiores exercitationem obcaecati. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, fugit molestiae modi, voluptatum iusto quidem at dolores nam sapiente nostrum dicta ut illum ab? Explicabo, a odio? Fuga, modi veritatis.</p>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam deserunt magni, id nam autem itaque inventore optio magnam. Consectetur optio quo dicta perspiciatis et, cum natus nobis provident eius mollitia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur nam labore aspernatur earum voluptatem voluptas ipsum quos odio unde natus rem, necessitatibus maxime minus architecto nesciunt eveniet libero laborum.</p>
      </div>
    </div>
  )
}
