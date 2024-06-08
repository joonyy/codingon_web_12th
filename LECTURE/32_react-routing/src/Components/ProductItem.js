import React from 'react';

export default function ProductItem({product}){
  //product : {id, name, email, body}
  return (
    <>
      <ul>
        <li>상품명 : {product.name}</li>
        <li>상세설명 : {product.body}</li>
      </ul>

      <hr />
      
    </>
  )
}