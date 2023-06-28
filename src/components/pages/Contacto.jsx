import React from 'react'

import { useFormik } from 'formik'
import * as Yup from 'yup'


export const Contacto = () => {

  const validationSchema = Yup.object().shape({
    nombre: Yup.string()
      .min(2, 'Nombre demasiado corto')
      .max(40, 'Nombre demasiado largo')
      .required('El nombre es obligatorio'),
    apellidos: Yup.string()
      .min(2, 'Apellidos demasiado cortos')
      .max(80, 'Apellidos demasiado largos'),
    email: Yup.string()
      .email('Email inválido')
      .required('El email es obligatorio'),
    telefono: Yup.number()
      .required('El télefono es obligatorio'),
    mensaje: Yup.string()
      .max(280, 'Máximo 280 caracteres')
  })

  const formik = useFormik({
    initialValues: {
      nombre: '',
      apellidos: '',
      email: '',
      telefono: '',
      mensaje: ''
    },
    validationSchema,
    onSubmit: values => {
      console.log(values)
    }
  })



  return (
    <>
      <div className='contenido'>
        <h3>Contacto</h3>
        <p>Puedes ponerte en contacto conmigo rellenando el siguiente formulario</p>

        <form className='form-contacto' onSubmit={formik.handleSubmit}>
          <div className='form-contacto-elem'>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre" placeholder='Nombre'
              value={formik.values.nombre} onChange={formik.handleChange} />
            <div className="error">
              {formik.errors.nombre && formik.touched.nombre ? formik.errors.nombre : ''}
            </div>
          </div>

          <div className='form-contacto-elem'>
            <label htmlFor="apellidos">Apellidos</label>
            <input type="text" name="apellidos" id="apellidos" placeholder='Apellidos'
              value={formik.values.apellidos} onChange={formik.handleChange} />
            <div className="error">
              {formik.errors.apellidos && formik.touched.apellidos ? formik.errors.apellidos : ''}
            </div>
          </div>

          <div className='form-contacto-elem'>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder='Email'
              value={formik.values.email} onChange={formik.handleChange} />
            <div className="error">
              {formik.errors.email && formik.touched.email ? formik.errors.email : ''}
            </div>
          </div>

          <div className='form-contacto-elem'>
            <label htmlFor="telefono">Teléfono</label>
            <input type="tel" name="telefono" id="telefono" placeholder='Teléfono'
              value={formik.values.telefono} onChange={formik.handleChange} />
            <div className="error">
              {formik.errors.telefono && formik.touched.telefono ? formik.errors.telefono : ''}
            </div>
          </div>

          <div className='form-contacto-elem'>
            <label htmlFor="mensaje">Mensaje</label>
            <textarea name="mensaje" id="mensaje" cols="30" rows="10" placeholder='Mensaje ...'
              value={formik.values.mensaje} onChange={formik.handleChange} />
            <div className="error">
              {formik.errors.mensaje && formik.touched.mensaje ? formik.errors.mensaje : ''}
            </div>
          </div>

          <input type="submit" value='Enviar' />
        </form>
      </div>


    </>
  )
}
