import axios from 'axios'
import { useState } from 'react'
import Alert from '../../components/Alert/Alert'
import { HomeContainer } from './style'

const Home = () => {
  const [dni, setDni] = useState('')
  const [entryDate, setEntryDate] = useState('')
  const [exitDate, setExitDate] = useState('')

  const entryDataSubmit = async () => {
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/entry`, 
        {dni, entryDate}
        );
      Alert(res.data.msg, "success", "#a5dc86")
    } catch (error) {
      Alert(error.response.data.msg, "error", "#f27474")
    }
  };

  const exitDataSubmit = async () => {
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/exit`, 
        {dni, exitDate}
        );
      const {hoursWorked} = res.data.workLogs
      Alert(`${res.data.msg}. ${hoursWorked >= 8 ? `Has trabajado ${hoursWorked} horas.` : ''}`, "success", "#a5dc86")
    } catch (error) {
      Alert(error.response.data.msg, "error", "#f27474")
    }
  };

  const myDate = new Date()

  const maxDate = `${myDate.getFullYear()}-${myDate.getMonth()+1}-${myDate.getDate()}T${myDate.toLocaleTimeString()}`

  return (
    <>
      <HomeContainer>
        <div className='dni_container'>
          <h1>Ingresar número de documento (DNI) del empleado</h1>
          <input 
          type="number" 
          name='dni'
          placeholder='Número de DNI'
          value={dni} 
          onChange={(e)=> setDni(e.target.value)}
        />
        </div>

        <div className='buttons_container'>
          <div className='entry_container'>
            <h2>Introducir fecha y hora de ingreso</h2>
            <input 
              type="datetime-local" 
              name='entryDate'
              onChange={(e)=> setEntryDate(e.target.value)}
              value={entryDate}
              max={maxDate}
            />
            <button onClick={entryDataSubmit}>Ingresar empleado</button>
          </div>
          <div className="exit_container">
          <h2>Introducir fecha y hora de egreso</h2>
            <input 
                type="datetime-local" 
                name='exitDate'
                onChange={(e)=> setExitDate(e.target.value)}
                value={exitDate}
                max={maxDate}
              />
              <button onClick={exitDataSubmit}>Egresar empleado</button>
          </div>
        </div>
      </HomeContainer>
    </>
  )
}

export default Home