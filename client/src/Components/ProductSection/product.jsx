import React, { useEffect, useState } from 'react'
import Card from '../Card/card'
import './product.scss'

const Product = () => {
    const [product,setProduct]=useState([])
    async function getProduct() {
        const data=await fetch("http://localhost:3000/edus")
        const res=await data.json()
        console.log(res);
        setProduct(res)
    }
    useEffect(()=>{
        getProduct()
    },[])
  return (
    <>
      <section id='product'>
        <div className="productArea">
            {product && product.map((item)=>(
                <div className="cardProductArea">
                    <Card key={item._id} id={item._id} image={item.image} title={item.title} description={item.description} product={item}/>

                </div>
            ))}
        </div>
      </section>
    </>
  )
}

export default Product
