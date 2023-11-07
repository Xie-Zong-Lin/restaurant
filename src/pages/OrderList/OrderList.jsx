import './OrderList.css';
import React from 'react';
import OrderNavbar from '../../components/OrderNavbar/OrderNavbar';
import ItemCard from '../../components/ItemCard/ItemCard';
import { images, data } from '../../constants';
import { useState } from 'react';







const OrderList = () => {

  const [totalPrice, setTotalPrice] = useState (0);

  //傳入參數price為物品單價 
  const calculateItemPrice = (price) =>{
    setTotalPrice( (total) => total + price   );
  };

  const addToCart = () => {
    alert("訂單已加入購物車");
  };
  

  return (
    <div  >
        <OrderNavbar />
        <div className="  flex gap-5 items-center justify-around my-10 max-md:flex-col ">
          {/* <ItemCard itemName="卿茶" pic={images.oLongTea} price='35'  />
          <ItemCard itemName="頂級紅玉" pic={images.blackTea} price='40' />
          <ItemCard itemName="青枝綠葉" pic={images.greenTea} price='30' /> */}
          {
            data.itemList.map( (item) =>  <ItemCard item={item} key={item.id} setTotalPrice={setTotalPrice}  calculateItemPrice={calculateItemPrice}   />  )
          }
        </div>
        <div className="flex justify-center pb-4">
          <button onClick={addToCart} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            加入購物車
          </button>

          <div className="flex items-center ml-4 border border-red-700 bg-red-500 font-bold  text-white rounded px-3">
            總價：{totalPrice}
          </div>

        </div>
        



    </ div>
    
    
  )
}

export default OrderList