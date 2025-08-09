import React from "react"

const Product=({product})=>{
    console.log(product)
    const {title,rating,price,image}= product
    return(
      <div className='product'>
        <img className='product_img' src={image} alt="" />
        <h3>{title}</h3>
        <p>{rating.rate} Rating</p>
        <p>price: {price}$</p>
      </div>
    )
  }

  export default Product;