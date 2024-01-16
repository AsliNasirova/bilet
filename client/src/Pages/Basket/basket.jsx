import React, { useContext } from 'react'
import { BasketContext } from '../../Context/BasketContext'

const Basket = () => {
    const{basket,deleteBasket,increaseBasket,decreaseBasket}=useContext(BasketContext)
  return (
    <>
      <div className="baskerArea">
        {basket && basket.map(x=>
            <ul className='textBasket'>
                <li><i className={x.image}></i></li>
                <li><h3>{x.title}</h3></li>
                <li><p>{x.description}</p></li>
                <li><button className='deleteBasket_btn' onClick={()=>deleteBasket(x)}>Delete</button></li>
                <div className="countPart_basket">
                    <li><button className='increaseDecreaseBtn' onClick={()=>increaseBasket(x)}>+</button></li>
                    <p>{x.count}</p>
                    <li><button className='increaseDecreaseBtn' onClick={()=>decreaseBasket(x)}>-</button></li>
                </div>
            </ul>

            )}
      </div>
    </>
  )
}

export default Basket
