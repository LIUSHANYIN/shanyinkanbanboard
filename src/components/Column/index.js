import React from 'react';
import './index.css';
import Card from '../Card';


export default function Column({card,addCard,index,title,color,moveCard,dele}) {

    const handleAddCard = ()=>{
        const userInput = window.prompt();
        if(userInput){
            addCard(userInput,index)
        }
        else{
            alert('please input something')
        }
    }
    return (
        <div>
            <div className='name' style={{backgroundColor:color}}>{title}</div>
            {
                card.map(
                    (card,i)=>(
                        <Card
                        key={i}
                        handleMoveCard={moveCard}
                        title={card.title}
                        index={index}
                        cardIndex={i}
                        handleDelete={dele}

                        />
                    )
                )
            }
            <div>
                <button onClick={handleAddCard}>+ Add Card</button>
            </div>
            
        </div>
    )
}
