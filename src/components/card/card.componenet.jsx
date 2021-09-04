import React from 'react';
import './card.styles.css';

export const Card = (props) => {
    return (
    <div className='card-container'>
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="" />
        <h3>{props.monster.name}</h3>
        <span style={{color: 'gray'}}>{props.monster.email}</span>
    </div>
    )
}