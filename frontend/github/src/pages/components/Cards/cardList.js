import React from 'react'
import Card from './cardElement'
import { getUser } from '../../services/authService';
import { useState, useEffect } from 'react';

const Cardlist = ({cards, replace}) => {

    return (
        <div className='flex flex-col w-2/3 mb-6'>
        {cards.map(card => (
            <Card key={card.username} user={card} replace = {replace}/>
          ))}
        </div>
    )
}

export default Cardlist