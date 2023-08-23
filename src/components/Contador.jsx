import { useCallback, useState } from 'react'
import Boton from './Boton'



const Contador = () => {

    const [contador1,setContador1]= useState(1);
    const [contador2,setContador2]= useState(1);
    const [contador3,setContador3]= useState(1);



    

return (
    <>
        <h2>Contadores UseCallback</h2>
        <Boton texto="Contador 1" />
        <Boton texto="Contador 2" />
        <Boton texto="Contador 3" />
       
    </>
)
}

export default Contador;