import React from 'react'
import './cardList.styles.css'

import Card from '../card/card.component';

const CardList = (props)=>{
    console.log(props.children)
    return(
        <div className='card-list'>
            {props.contacts.map((contact)=>(
                <Card key={contact.id} contact= {contact} />
          ))}
        </div>
    )
}
export default CardList;