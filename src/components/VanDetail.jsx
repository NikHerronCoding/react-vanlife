import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

export default function VanDetail() {
    const params = useParams();
    const [van, setVan] = useState({});


    useEffect(()=>{
        let id = params['id'];
        fetch(`/api/vans/${id}`)

        .then((res)=>res.json())

        .then((data)=> {setVan(data.vans)
            console.log(data.vans)}    
            )
    }, [params]);
   
        return (
            <div className="van-detail-container">
                {van ? (
                    <div className="van-detail">
                        <img src={van.imageUrl} />
                        <i className={`van-type ${van.type} selected`}>
                            {van.type}
                        </i>
                        <h2>{van.name}</h2>
                        <p className="van-price"><span>${van.price}</span>/day</p>
                        <p>{van.description}</p>
                        <button className="link-button">Rent this van</button>
                    </div>
                ) : <h2>Loading...</h2>}
            </div>
        )
}