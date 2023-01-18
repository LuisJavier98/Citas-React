import { useRef } from "react";

const Formulario = ({ data, setdata, editActive, seteditActive, paciente, setpaciente }) => {
  const e = useRef()

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)
    return random + fecha
  }

  const getData = e => {
    e.preventDefault()
    const clear = () => {
      e.target[0].value = ""
      e.target[1].value = ""
      e.target[2].value = ""
      e.target[3].value = ""
      e.target[4].value = ""
    }
    if (!editActive) {
      const objetoPacientes = {
        id: generarId(),
        namePet: e.target[0].value,
        nameProperty: e.target[1].value,
        email: e.target[2].value,
        alta: e.target[3].value,
        message: e.target[4].value
      }
      setdata([...data, objetoPacientes])
    } else {
      const arregloModificado = data.map(arreglo => {
        if (arreglo == paciente) {
          return {
            namePet: e.target[0].value,
            nameProperty: e.target[1].value,
            email: e.target[2].value,
            alta: e.target[3].value,
            message: e.target[4].value
          }
        } else {
          return arreglo
        }
      })
      setdata(arregloModificado)
      seteditActive(false)
      setpaciente({})
    }
    clear()
  }

  if (editActive) {
    e.current[0].value = paciente.namePet
    e.current[1].value = paciente.nameProperty
    e.current[2].value = paciente.email
    e.current[3].value = paciente.alta
    e.current[4].value = paciente.message
  }



  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5 mb-10'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='mt-5 mb-10 text-center'>
        Añade pacientes y {''}
        <span className='text-indigo-600 font-bold'>Administrarlos</span>
      </p>
      <form ref={e} onSubmit={getData} className='bg-white shadow-xl rounded-lg py-10 px-5' action="">
        <div className='mb-5 text-center font-bold'>
          <label htmlFor='mascota' className='block text-gray-700' >Nombre mascota</label>
          <input id='mascota' type="text"
            placeholder='Nombre de la mascota' required
            className='border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md' />
        </div>
        <div className='mb-5 text-center font-bold'>
          <label htmlFor='propietario' className='block text-gray-700' >Nombre propietario</label>
          <input id='propietario' type="text"
            placeholder='Nombre del propietario' required
            className='border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md ' />
        </div>
        <div className='mb-5 text-center font-bold'>
          <label htmlFor='email' className='block text-gray-700' >Email</label>
          <input id='email' type="email"
            placeholder='Email' required
            className='border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md ' />
        </div>
        <div className='mb-5 text-center font-bold'>
          <label htmlFor='alta' className='block text-gray-700' >Alta</label>
          <input id='alta' type="date" required
            className='border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md ' />
        </div>
        <div className='mb-5 text-center font-bold'>
          <label htmlFor='sinstomas' className='block text-gray-700' >Sintomas</label>
          <textarea id="sintomas" className='border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md resize-none ' placeholder='Describe los sintomas' cols="30" rows="10" required></textarea>
        </div>
        <input type="submit"
          className='bg-indigo-600 w-full p-3 text-white border-4 shadow-lg border-double border-black font-bold hover:bg-indigo-700 hover:scale-95 uppercase cursor-pointer transition-all ' value={editActive ? "Editar Paciente" : "Agregar Paciente"} />
      </form>
    </div>
  )
}

export default Formulario