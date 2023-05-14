import React, { useEffect, useState } from 'react'
import { ImagenGaleria } from './ImagenGaleria'

export const BienesRaices = () => {

    const [imagenes, setImagenes] = useState([])

    useEffect(()=>{
        let imagen = []

        for(let i=1; i<=12; i++){
            imagen.push(`brg-${i}.png`)
        }

        setImagenes(imagen)
    }, [])

return (
    <>
        <div className='contenido'>
            <h2 className='titulo-contenido'>Bienes Raíces</h2>
            <p><span>Aplicación de inmuebles con vista de propiedades y contacto.</span></p>
            <p>En la <span>página de inicio</span> tenemos un resumen de lo que se ofrece en la web, así como, las <span>3 últimas propiedades agregadas y las 3 últimas entradas de blog</span>. También disponemos de <span>modo oscuro en toda la web con modo automatico de selección del modo dependiendo de la eleccion en el SO</span>.</p> 
            <p>En la sección Nosotros tenemos un breve resumen sobre la actividad de la empresa en este caso. En Propiedades se <span>listan todas las propiedades disponibles en la base de datos</span> con sus caracteristicas, si clicamos en cualquiera de ellas nos lleva una página con la información de la porpiedad seleccionada.</p>
            <p>La sección de blog por el momento es estática, el acceso a cualquier entrada del blog lleva a un artículo, en cualquiera de los casos siempre al mismo.</p>
            <p>Contamos también con <span>sección de contacto</span>, el cual, <span>envía un correo con el mensaje y los campos solicitados al administrador</span>, que tambien tiene <span>área de administración para agregar, eliminar y actualizar las propiedades</span>.</p>
            <p>Esta aplicación está creada con <span>PHP 8, MVC, JavaScript, SASS y MySql</span> para la base datos. También se hace uso de <span>Composer, Gulp y PHP Mailer</span>.</p>
            <p><i>(Click para ampliar imagen)</i></p>

            <div className="presentacion-proyectos">
                {imagenes.map((imagen) => {
                    return <ImagenGaleria ruta = 'BienesRaices' imagen={imagen} key={imagen}  />
                })}
            </div>
        </div>

    </>
)
}
