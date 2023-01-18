import { useState, useRef, useEffect } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'

function App() {
  const [data, setdata] = useState([])
  const [paciente, setpaciente] = useState({})
  const [editActive, seteditActive] = useState(false)
  const deletePaciente = obj => {
    setdata(data.filter(d => d !== obj))
  }
  useEffect(() => {

    const getLocal = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('data')) ?? [];
      setdata(pacientesLS)
    }
    getLocal()
  }, [])



  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data))
  }, [data])

  return (
    <div className="container mx-auto mt-20" >
      <Header />
      <div className='mt-12 md:flex'>
        <Formulario data={data} setdata={setdata} editActive={editActive} seteditActive={seteditActive} paciente={paciente} setpaciente={setpaciente} />
        <ListadoPacientes editActive={editActive} data={data} seteditActive={seteditActive} setpaciente={setpaciente} deletePaciente={deletePaciente} />
      </div>
    </div>
  )
}
export default App
