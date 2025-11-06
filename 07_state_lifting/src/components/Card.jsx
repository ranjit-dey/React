import React from 'react'
import './Card.css'

const Card = (props) => {
    return (
        <div className="card">
            <h3>{props.title}</h3>
            <input type="text" value={props.name} onChange={(e) => props.setName(e.target.value)} />
            <p>{props.name}</p>
        </div>
    )
}

export default Card
