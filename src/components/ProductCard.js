import React from "react";
import { productList } from "../utils/constant";
import Product from "./Product";

const ProductCard=()=>{
    return(
      <div className='product_card'>
        {
          productList.map((product,index)=>{
            return(
            <Product key={product.id} product={product}/>
          )
        })
        }
      </div>
    )
  }
  export default ProductCard;