
const Paciente = ({ key, d, seteditActive, setpaciente, deletePaciente }) => {
  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre:{" "}
        <span className='font-normal normal-case'>{d.namePet}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario:{" "}
        <span className='font-normal normal-case'>{d.nameProperty}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Email:{" "}
        <span className='font-normal normal-case'>{d.email}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta:{" "}
        <span className='font-normal normal-case'>{d.alta}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas:{" "}
        <span className='font-normal normal-case'>
          {d.message}
        </span>
      </p>
      <div className="my-6">
        <button type="button" onClick={() => { setpaciente(d); seteditActive(true) }} className="mx-2 hover:bg-slate-500  bg-slate-600 p-3 rounded-md text-white font-bold">Editar</button>
        <button type="button" onClick={() => { deletePaciente(d) }} className="mx-2 hover:bg-red-500  bg-red-600 p-3 rounded-md text-white font-bold">Eliminar</button>
      </div>

    </div>
  )
}

export default Paciente
