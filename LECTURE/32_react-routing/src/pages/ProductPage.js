import React from "react";
import ProductList from "../Components/ProductList";

export default function ProudctPage({products}){
  return(
    <div>
      <h1>Product Page</h1>
      <ProductList products={products}/>
    </div>
  )
}