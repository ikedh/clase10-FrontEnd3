import { useCallback, useState } from 'react'
import Boton from './Boton'



const Contador = () => {

    const [contador1,setContador1]= useState(1);
    const [contador2,setContador2]= useState(1);
    const [contador3,setContador3]= useState(1);

    const incrementar1 = useCallback(
        () =>{
            setContador1(contador1 + 1)
        },[contador1])



    const incrementar2 = useCallback(
        () =>{
            setContador2(contador2 + 1)
    },[contador2])

    const incrementar3 = useCallback(
        () =>{
            setContador3(contador3 + 1)
        },[contador3])


return (
    <>
        <h2>Contadores UseCallback</h2>
        <Boton texto="Contador 1" count={contador1} incrementar={incrementar1}/>
        <Boton texto="Contador 2" count={contador2} incrementar={incrementar2}/>
        <Boton texto="Contador 3" count={contador3} incrementar={incrementar3}/>
       
    </>
)
}

export default Contador;