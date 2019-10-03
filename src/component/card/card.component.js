import React from 'react';
import logo from './contact-image.png';

import './card.styles.css'

const Card = (props)=>{
    return(
        <div className='card-container'>
            <img src={logo} />
           <h6 key={props.key}>{props.contact.name}</h6>
           <p>{props.contact.phone}<br/>{props.contact.email}</p>
        </div>
    )
}
export default Card