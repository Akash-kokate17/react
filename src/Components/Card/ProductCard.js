import React from "react";

import styles from '../Card/ProductCard.module.css'
 function ProductCard({product}) {
    let{title,category,price,image} = product
  return <>
    <div className={`container-fluid col-sm-3`}>
<div className={`card  ${styles.size} mt-3`}>

  <div className={`${styles.flex} card-header`}>
    <img src={image} alt="photo" className={`${styles.imgSize}`} />
  </div>

  <div className={`card-body text-center fw-bold ${styles.height}`}>
 <p className="card-title">Title:{title}</p>
  <p className="card-text">Category:{category}</p>
  <p className="card-text">Price:${price}</p>
 </div>

<div className="text-center card-footer">
<button className="btn btn-primary">Buy Now</button>
</div>
</div>
    </div>
  </>;
}
export default React.memo(ProductCard)