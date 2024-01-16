import React, { useContext } from 'react';
import { FaEye } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaBasketShopping } from "react-icons/fa6";
import { BasketContext } from '../../Context/BasketContext';
import { WishlistContext } from '../../Context/WishlistContext';
import './card.scss';

const Card = ({image,title,description,product}) => {
    const {addWish}=useContext(WishlistContext)
    const {addBasket}=useContext(BasketContext)
  return (
    <>
      <div className="cardArea">
        <div className="cardBox">
            <div className="imageCArd">
                <i className={image}></i>
            </div>
            <div className="textCard">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div className="cardIcon">
          <div onClick={()=>addWish(product)}>  <CiHeart className="heart"/></div>
            <FaEye />
          <div onClick={()=>addBasket(product)}>  <FaBasketShopping /></div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Card
