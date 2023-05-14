import React, { useEffect, useState } from 'react'
import { ImagenGaleria } from './ImagenGaleria'

export const AppSalon = () => {

    const [imagenes, setImagenes] = useState([])

    useEffect(()=>{
        let imagen = []

        for(let i=1; i<=12; i++){
            imagen.push(`asg-${i}.png`)
        }

        setImagenes(imagen)
    }, [])

return (
    <>
        <div className='contenido'>
            <h2 className='titulo-contenido'>App Salon</h2>
            <p><span>Aplicación de peticion de citas de un salón de belleza.</span></p>
            <p>Contiene sección de <span>login para usuarios, creación de cuentas de usuario y restablecimiento de contraseñas</span>. Los usuarios pueden entrar con sus credenciales y, una vez logueados, acceden a un panel de servicios donde eligen los que van a solicitar. A continuación pasan a un <span>formulario para escoger día y hora</span> para el servicio, en el cual están deshabilitados los fines de semana y ciertas horas. Por último acceden a un panel de resumen y cuando aceptan la cita se envia un correo al administrador con todos los datos de dicha cita.</p>
            <p>También contamos con <span>áera de Administrador</span>, donde podemos consultar, crear, actualizar y eliminar citas, así como gestionar las citas ya creadas.</p>
            <p>Esta aplicación está creada con <span>PHP 8, MVC, JavaScript, SASS y MySql</span> para la base datos. También se hace uso de <span>Composer, Gulp y PHP Mailer</span>.</p>
            <p><i>(Click para ampliar imagen)</i></p>

            <div className="presentacion-proyectos">
                {imagenes.map((imagen) => {
                    return <ImagenGaleria ruta = 'AppSalon' imagen={imagen} key={imagen}  />
                })}
            </div>
        </div>

    </>
)
}
