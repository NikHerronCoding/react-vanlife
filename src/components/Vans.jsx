import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import VanTile from './VanTile'


export default function Vans() {
    const [vans, setVans ] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            let endpoint = '/api/vans'
            let response = await fetch(endpoint)
            let data = await response.json()
            setVans(data.vans);
        }
        fetchData()
    }, []);
    const vanTiles = vans.map((van)=> (
        
            <Link key={van.id} to={`/vans/${van.id}`} aria-label={`View details for ${van.name}, 
            priced at $${van.price} per day`}> 
                
                <VanTile key={van.id} van={van}/> 
            
            </Link>

         
         )
    
    
    
    ) 

    return (
        <div className="van-list-container">
            <h1 className="van-title">Explore our van options </h1>

            <div className="van-list">
                {vans.length > 0? vanTiles : <p> Loading... </p>}
            </div>
        </div>

    )
}