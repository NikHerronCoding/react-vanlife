import react from 'react'

export default function VanTile({van}) {
    return (
        <div className="van-tile" key={van.id}>

            <img src={van.imageUrl}/>

            <div className="van-info">
                <h3 className="van-a">{van.name}</h3>
                <p className="van-a">${van.price}<span>/day</span></p>
            </div>

            <i className={`van-a van-type ${van.type}`}>{van.type}</i>

        </div>
    )
}