import React from 'react'

const Boton = ({texto, count, incrementar}) => {

    console.log(`${texto} Renderizado`);

  return (
    <div>
        <hr/>
        <p>{texto}</p>
        <h2>{count}</h2>
        <button onClick={incrementar}> +1 </button>
    </div>
  )
}

export default React.memo(Boton);