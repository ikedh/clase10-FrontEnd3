import {useState,useEffect} from 'react'


const FetchEjemplo = () => {

    const [vector, setVector] = useState([]);

  useEffect(() => {
    getData()
  }, [])
  


   const getData = async () => {
    const data = await
    fetch('https://jsonplaceholder.typicode.com/users')
    const convert = await data.json();
    console.log(data);
    setVector(convert)
    console.log(setVector)
   }



  return (
    <>
        <h1>Peticiones Fetch</h1>
        <div>
          <ul>
            {vector.map(object => (<li>{object.name}</li>))}
          </ul>
        </div>
    </>
    
  )
}

export default FetchEjemplo