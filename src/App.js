import React from "react";
import { useSelector } from "react-redux";
import styled, { ThemeProvider } from "styled-components";

import * as theme from "./styled/theme";
import Header from "./components/Header";
import CardItem from "./components/CartItem";
import ProductCard from "./components/ProductCard";
import ListMenu from "./components/ListMenu";
import CalculateBox from "./components/CalculateBox";

const Contaner = styled.div`
  display: flex;
  width: 100%;
  height: 92vh;
`;
const MenuContaner = styled.div`
  width: 15%;
  padding: 0.5rem 0;

`;
const ProductContaner = styled.div`
  width: 60%;
  height: 100%;
  background: ${(props) => props.theme.light};
  border-left: 4px solid #e1e1e1;
  border-right: 4px solid #e1e1e1;
  padding: 0.5rem 0.5rem;
  display:flex;
  flex-wrap: wrap;
  justify-content:space-around;
`;
const CartContaner = styled.div`
  width: 25%;
  padding: 0.5rem 0.5rem;
`
const CartText =styled.p`
  font-size:0.9rem;

`
;

function App() {
  const products = useSelector((state) => state.product.products);
  const carts = useSelector((state)=>state.product.carts)
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Contaner>
        <MenuContaner>
          <ListMenu item={products} />
        </MenuContaner>
        <ProductContaner>
          {products.map(product => 
            <ProductCard key={product.id} item={product}/>
          )}
        </ProductContaner>
        <CartContaner>
          <CartText>{carts? `${carts.length} item in cart` : `0 item in cart`}</CartText>
          {carts.map(item=> 
          <CardItem key={item.id} item={item}/>
          )}
          <CalculateBox/>
        </CartContaner>
      </Contaner>
    </ThemeProvider>
  );
}

export default App;
