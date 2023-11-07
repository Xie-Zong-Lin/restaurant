import React from 'react'
import { useState } from 'react';

const ItemCard = ({item, calculateItemPrice, setTotalPrice}) =>{

    const [quantity,setQuantity]= useState(0);

    const handleIncrease = () => {
        setQuantity( (quantity) => quantity+1 );
        calculateItemPrice(item.price);
    };
    const handleDecrease = () => {
       if (quantity>0){ 
        setQuantity( (quantity) => quantity-1 );
        calculateItemPrice(-(item.price));
       }
    };
    const handleZero = () => {
        setTotalPrice( (total) => total - (quantity*item.price) );
        setQuantity(0);
        
        
    };

    return(

        <>
            <div className=" bg-white max-w-sm p-3 rounded overflow-hidden shadow-lg">
                <img className="p-4"  src={item.pic} alt="" style={{height:'300px', width:'800px'}} />
                <div className="flex justify-between px-6 py-4">
                    <div className="font-bold text-xl mb-2">{item.itemName}</div>
                    <div className="font-bold text-xl mb-2">{item.price}元/杯</div>
                </div>

                <div className="flex justify-center gap-4">
                    
                    <button onClick={handleDecrease} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                        -
                    </button>
                    {/* <input  type="text" className="shadow w-12 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight "/> */}
                    <div className="flex items-center">{quantity}</div>
                    
                    <button onClick={handleIncrease} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                        +
                    </button>

                </div>


                <div className="flex justify-center mt-4">
                    <button onClick={handleZero} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded">
                        取消
                    </button>
                </div>


                
            </div>

        </>
    )
};

export default ItemCard;