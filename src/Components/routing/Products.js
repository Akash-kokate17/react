import React from "react";
import productsArr from './Products.json'
import { Link } from "react-router-dom";

 function Products(props) {
  return <>
       <div className='container'>
            <div className='row mt-3'>
                {productsArr.map(product => {
                    return <div className='col-sm-3 mb-1' key={product.id}>
                        <div className="card">
                            <img src={product.image} className="card-img-top" style={{ height: '200px' }} alt='something' />
                            <div className="card-body text-center" >
                                <h5 className="card-title">{product.category}</h5>
                                <p className="card-text text-truncate" title={product.description}>{product.description}</p>
                                <p className="card-text text-truncate" title={product.price}>{product.price}</p>
                                <Link to={`/productList/${product.id}`}>View</Link>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
  </>;
}
export default Products