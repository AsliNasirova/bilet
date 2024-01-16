import React, { useContext } from 'react'
import { WishlistContext } from '../../Context/WishlistContext'

const Wishlist = () => {
    const {wish,deleteWish}=useContext(WishlistContext)
  return (
    <>
      <div className="wishlistArea">
        {wish && wish.map(x=>(
                <ul className='text_wishlist'>
                    <li><i className={x.image}></i></li>
                    <li><h4>{x.title}</h4></li>
                    <li><p>{x.description}</p></li>
                    <button className='delete_btn'><li onClick={()=>deleteWish(x)}>Delete</li></button>
                </ul>
            ))
        }
      </div>
    </>
  )
}

export default Wishlist
