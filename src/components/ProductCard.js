import React,{useState,useEffect} from "react";
import Product from "./Product";
import Skeleton from "./Skeleton";

const ProductCard = () => {
    const [listOfProduct,setListOfProduct] = useState([])
    const [filterProduct,setFilterProduct] = useState([])
    const [searchText,setSearchText] = useState("")

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData= async()=>{
        const data = await fetch(`https://fakestoreapi.com/products`);
        const resdata = await data.json();
        // console.log(resdata);
        setListOfProduct(resdata);
        setFilterProduct(resdata);
    }

    const display=()=>{
        const value = listOfProduct.filter(product=> product.rating.rate>=4)
        setListOfProduct(value)
    }

    const filterShow=()=>{
            const filterData = listOfProduct.filter((product)=>{
               return product.title.toLowerCase().includes(searchText.toLowerCase())
            });
            setFilterProduct(filterData);
    }

    return listOfProduct.length===0 ? <Skeleton/> : (
        <div>
            <div>
                <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                <button onClick={filterShow}>search</button>
            </div>
            <button onClick={display} style={{ "marginTop": "10px" }}>TopRated Product</button>
            <div className='product_card'>
                {
                    filterProduct.map((product, index) => {
                        return (
                            <Product key={product.id} product={product} />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default ProductCard;