import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {productInfos} from '../Components/ProductList';

export default function ProductDetailPage({products}){
  // console.log('useParams',useParams());
  const {productId} = useParams();
  const targetProduct = productInfos[Number(productId) -1];
  const {id, name, email, body} = targetProduct;
  const navigate = useNavigate();
  return(
    <>
      <h1>ProductDetailPage</h1>
      <button onClick={()=>navigate(-1)}>뒤로가기</button>
      <ul>
        <li>상품번호 : {id}</li>
        <li>판매자 : {name}</li>
        <li>이메일 : {email}</li>
        <li>상품상세 : {body}</li>
      </ul>
    </>
  )
}