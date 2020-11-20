import React, { useState } from "react";
import data from "../data";
import { Link } from "react-router-dom";

export default function ProductScreen(props) {
  const [qty, setQty] = useState(1);
  const product = data.products.find((x) => x._id === props.match.params.id);
  console.log(product.image);

  if (!product) {
    return <div>Product Not Find</div>;
  }
  const addToCartHandler = ()=>{
    props.history.push('/cart/${productId}?qty={qty}');
  }
  return (
    <div>
      <Link to="/">Back to result</Link>
      <div class="row top">
        <div class="col-2">
          <img src={product.image} />
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>Price: ${product.price}</li>
            <li>Category: {product.category}</li>
            <div className="row">
              <div>Qty</div>
              <div>
                <select
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                ></select>
              </div>
            </div>
            <li>
              <button className="primary block" onClick={addToCartHandler}>
                Add to Cart
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
