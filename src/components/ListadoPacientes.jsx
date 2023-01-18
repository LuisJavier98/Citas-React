import Paciente from './Paciente'

const ListadoPacientes = ({ editActive, data, seteditActive, setpaciente, deletePaciente }) => {

	return (
		<div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-auto'>
			<h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
			<p className='mt-5 mb-10 text-center'>
				administra tus {" "}
				<span className='text-indigo-600 font-bold '>Pacientes y citas</span>
			</p>
			{
				data.length !== 0 ?
					data.map((d) => <Paciente key={d.id} d={d} editActive={editActive} seteditActive={seteditActive} setpaciente={setpaciente} deletePaciente={deletePaciente} />)
					:
					<p className='p-3 bg-red-700 text-center font-bold text-lg'>No existen pacientes registrados</p>
			}
		</div>
	)
}

export default ListadoPacientes