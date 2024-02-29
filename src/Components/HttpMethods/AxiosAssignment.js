import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../Card/ProductCard";

export function AxiosAssignment(props) {
    const [products, setProducts] = useState([]);
    let [loading,setLoading] =useState(false)

    let fetchProducts = async()=>{
        let response = await axios.get('https://fakestoreapi.com/products')
        console.log(response)
        setProducts(response.data)
        setLoading(false)
    }

    useEffect(()=>{
        setLoading(true)
        fetchProducts()
    },[])
  return <>
  <div className="container">
    <div className="row">
        {
            loading?
            <h6 className="spinner-border text-danger"></h6>
            :
            products.map((product)=>{
                return <ProductCard product={product} key={product.id} />
            })
        }
    </div>
  </div>
  </>;
}
