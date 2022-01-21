import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { addCart } from "../store/action/product";

const Card = styled.div`
  width: 17%;
  height: 10rem;
  cursor: pointer;
  background: #ffffff;
  box-shadow: 1px 1px 10px 1px #ccc;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0.4em 0em;
  margin-top: 1rem;
`;
const CardImg = styled.img`
  border-radius: 10px;
  width: 90%;
  height: 70%;
`;
const CardName = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.p`
  margin: 0;
  font-size: 0.65rem;
  padding: 0.5rem 0.4rem;
`;

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const addToCart = (id) => {
    dispatch(addCart(id));
  };

  return (
    <Card onClick={() => addToCart(item.id)} value={item.category}>
      <CardImg src={item.image} alt={item.name} />
      <CardName>
        <Info>{item.name}</Info>
        <Info>{item.price}</Info>
      </CardName>
    </Card>
  );
};

export default ProductCard;
