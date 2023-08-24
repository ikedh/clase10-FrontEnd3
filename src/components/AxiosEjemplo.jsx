import axios from 'axios';
import { useState, useEffect } from 'react'

const AxiosEjemplo = () => {

    const [name, setName] = useState(null)

    useEffect(() => {
      axios.get("https://pokeapi.co/api/v2/pokemon/charizard")
      .then(res => {
        setName(res.data.name)
      })


    }, [])
    
    
    

  return (
    <>
             <h1>Axios</h1>
             Nombre Pokemon : {name}

             {/* Colocar las habilidades y el numero de Order del Pokemon */}

    </>
    )
}

export default AxiosEjemplo