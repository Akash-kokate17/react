import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function ProductList(props) {
    let [product, setProducts] = useState({})
  let  {id}  = useParams();

  let fetchData = async () => {
    let response = await axios.get(`https://fakestoreapi.com/products/${id}`);
   setProducts(response.data)
    console.log(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h3 className="text-center">product data</h3>
      <div className="col-sm-4 mb-1 offset-4" >
        <div className="card">
          <img
            src={product.image}
            className="card-img-top"
            style={{ height: "200px" }}
            alt="something"
          />
          <div className="card-body text-center">
            <h5 className="card-title">{product.category}</h5>
            <p className="card-text text-truncate" title={product.description}>
              {product.description}
            </p>
            <p className="card-text text-truncate" title={product.price}>
              {product.price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
