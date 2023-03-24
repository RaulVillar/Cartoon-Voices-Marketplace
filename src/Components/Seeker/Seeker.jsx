import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react"
function Seeker() {
    let[actors, setActors] = useState([]);
    let[actorsTable, setActorsTable] = useState([]);
    let[search, setSearch] = useState("");

    //solo para prueba de funcion, se debe implementar luego nuestra api

    const api = async()=>{
        await axios.get("https://api.npoint.io/725918c3ecb3ffcc47d9")
        .then(response=>{
            setActors(response.data);
            setActorsTable(response.data);
        }).catch(error=>{
            console.log(error);
        })
    }
    
    function filter(search){
        var result=actorsTable.filter((actor)=>{
            if(actor.name.toString().toLowerCase().includes(search.toLowerCase())
            ||actor.category.toString().toLowerCase().includes(search.toLowerCase())){
                return actor
            }
        });
        setActors(result);
        
    }
    function searching(e){
        setSearch(e.target.value)
        filter(e.target.value);
    }
 console.table(actors)



useEffect(()=>{
    api();
},[])
    return (
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" aria-label="Search" value={search} placeholder="Busca tu personaje"/>
            <button class="btn btn-outline-dark" type="submit" onChange={searching}>Buscar</button>        
        </form>
    )
}

export default Seeker