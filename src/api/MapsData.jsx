import {useEffect, useState} from 'react'

async function Get({url}){
    try {
      const response = await fetch({url});
      const data = await response.json();
    }

    catch(error){
      console.log(error);
  }

  return <h1>{data.name}</h1>
}

export  function MapsData(){

  useEffect(() => {

    const [url, setUrl] = useState("");

    Get(setUrl("https://pokeapi.co/api/v2/pokemon/pikachu"))
  },[])

 
  return <h1>lol</h1>
}

