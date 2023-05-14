import React, { useState } from 'react'

export const ImagenGaleria = ({ imagen, ruta }) => {

    const [fullScreen, setFullScreen] = useState(false)
    
    const toFullScreen = () => {
        setFullScreen(!fullScreen)
    }

    return (
        <>
            {!fullScreen ? (
                <div className="imagen-galeria">
                    <img
                        key={imagen}
                        src={'/src/assets/img/'+ ruta + '/' + imagen}
                        alt="Imagen Galeria"
                        onClick={toFullScreen}
                    />
                </div>
            ) : (
                <div className="fullscreen-overlay">
                    <img
                        key={imagen}
                        src={'/src/assets/img/'+ ruta + '/' + imagen}
                        alt="Imagen Galeria"
                    />
                    <button className='btn-cerrar' onClick={toFullScreen}>❌</button>
                </div>
            )}
        </>
    )
}

