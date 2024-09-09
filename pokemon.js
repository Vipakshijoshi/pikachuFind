import React, { useEffect, useState } from "react";
import './pokemon.css'
import {Pokemoncard} from './Pokemoncard'
 const Pokemon=()=>{
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    const [search,setSearch]=useState("")
    const pokemon=async()=>{
        try{
            const res= await fetch("https:\\pokeapi.co/api/v2/pokemon?limit=55")
            const data= await res.json()
            console.log(data)
            const detailData=data.results.map(async(currPokemon)=>
                {
                    const res= await fetch(currPokemon.url);
                    const data=await res.json();
                    return data;
                })
        const details= await Promise.all(detailData);
        setData(details); 
        console.log(details);

        setLoading(false)
        }catch(error){
            console.log(error) 
            setLoading(false)
        }
    }
    useEffect(()=>{
        pokemon();
    },[])

    const searchData=data.filter((curr)=>curr.name.toLowerCase().includes(search.toLowerCase()))

    // const imageUrl = (data.sprites.front_female) || (data.sprites.front_default) || 'https://via.placeholder.com/150';

  // Logging to verify that the correct URL is being used.
//   console.log('Selected Image URL:', imageUrl);
if(loading){
   return(
    <>
     <div>
        <h1 className="heading">loading.....</h1>
    </div>
    </>
   )
}
if(!loading){
    return(    
    <>
    <h1 className="heading">Let's Catch Pokemon</h1>
    <div className="searchItem">
        <input className="searchtext" type="text" placeholder="Enter the search item....." value={search} onChange={(e)=>setSearch(e.target.value)}/>
    </div>
    <ul className="pokemon-list">
        {searchData.map((currPokemon)=>{
            return <Pokemoncard key={currPokemon.id} data={currPokemon}/>
        })}
    </ul>
    </>
    )
}
 }
 export default Pokemon;