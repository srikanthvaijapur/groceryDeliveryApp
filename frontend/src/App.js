import React from "react"
import data from "./data"

function App() {
  return (
    <div className="grid-container">
    <header className = 'row'>
        <div>
            <a className="brand" href="index.html">Groceries</a>
        </div>
        <div>
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>
        </div>
    </header>
    <main>
        <div className="row center">
        {
          data.products.map((product) => (
            <div className="card">
                <a href="product.html">
                    <img className="medium" src={product.image} alt=""/>
                </a>
                <div className="card-body">
                    <a href="product.html">
                        <h2>{product.name}</h2>
                    </a>
                    <div className="price">${product.price}</div>
                </div>
            </div>
       
          ))
        }
        </div>
    </main>
    <footer className="row center">All rights reserved</footer>
</div>
  )
  
}

export default App;
