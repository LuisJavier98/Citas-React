import React from 'react'

const Formulario = () => {
  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='mt-5 text-center'>
        Añade pacientes y {''}
        <span className='text-indigo-600 font-bold'>Administrarlos</span>
      </p>
      <form className='bg-white shadow-xl rounded-lg py-10 px-5' action="">
        <div className='mb-5'>
          <label htmlFor='mascota' className='block text-gray-700' >Nombre mascota</label>
          <input id='mascota' type="text"
            placeholder='Nombre de la mascota'
            className='border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md' />
        </div>
        <div className='mb-5'>
          <label htmlFor='propietario' className='block text-gray-700' >Nombre propietario</label>
          <input id='propietario' type="text"
            placeholder='Nombre del propietario'
            className='border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md ' />
        </div>
        <div className='mb-5'>
          <label htmlFor='email' className='block text-gray-700' >Email</label>
          <input id='email' type="email"
            placeholder='Email'
            className='border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md ' />
        </div>
        <div className='mb-5'>
          <label htmlFor='alta' className='block text-gray-700' >Alta</label>
          <input id='alta' type="date"
            className='border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md ' />
        </div>
        <div className='mb-5'>
          <label htmlFor='sinstomas' className='block text-gray-700' >Sintomas</label>
          <textarea id="sintomas" className='border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md ' placeholder='Describe los sintomas' cols="30" rows="10"></textarea>
        </div>
        <input type="submit"
          className='bg-indigo-600 w-full p-3 text-white font-bold hover:bg-indigo-700 uppercase cursor-pointer transition-all ' value="Agregar paciente" />

      </form>
    </div>
  )
}

export default Formulario