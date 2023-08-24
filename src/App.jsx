import './App.css'
import FetchEjemplo from './components/FetchEjemplo'
import AxiosEjemplo from './components/AxiosEjemplo.jsx'
import {  useState} from 'react'
import Contador from './components/Contador'



function App() {

  const [contador1,setContador1]= useState(1);
 
  


  return (
    <>
      {/* <FetchEjemplo/>
      <hr></hr>
      <AxiosEjemplo/> */}
      <hr/>
      <div>
          <Contador/>
      </div>
      <hr/>
                      

    
    </>
  )
}

export default App
