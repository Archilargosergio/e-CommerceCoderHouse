import { useState } from "react";
import './ItemCount.css';

const ItemCount = ({ itemStock }) => {
    const [counter, setCounter] = useState(1);

    const addItem = () =>{
        if(counter < itemStock) {
            setCounter(counter + 1);
        }
    }
     const restItem = () =>{
        if(counter > 1){
            setCounter(counter - 1);
        }
    }

  return (
    <div className='counterItem-button'>
         <button onClick={restItem}>
               -
         </button>
         <span>{counter}</span>
            <button onClick={addItem}>
                  +
             </button>
</div>
  )
}

export default ItemCount;