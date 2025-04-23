import React, { useEffect, useState } from 'react';
import Card from './Card';

const Cards = () => {
    const [cardPrice, setCardPrice]=useState([])
    useEffect(()=>{
        fetch('card.json').then(res => res.json())
        .then(data =>setCardPrice(data))
    },[])
    console.log(cardPrice)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-30 py-4 md:py-8 px-4 md:px-10'>
            {
                cardPrice.map(card  =><Card card={card}></Card>)
            }
        </div>
    );
};

export default Cards;