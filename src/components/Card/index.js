import React from 'react'
import './index.css';
export default function Card({title,index,handleMoveCard,cardIndex,handleDelete}) {
    return (
        <div className='card'>
            {
                index !== 0 && (
                    <div>
                        <button onClick={()=>handleMoveCard(index,index-1,cardIndex)}>Prev</button>
                    </div>
                )
            }
            <div>{title}</div>
            <div><button onClick={()=> handleDelete(index)}>Delete</button></div>
            {
                index !== 3 && (
                    <div>
                        <button onClick={()=>handleMoveCard(index,index+1,cardIndex)}>Next</button>
                    </div>
                )
            }
        </div>
    )
}
