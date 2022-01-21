import React, {useState}from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import Counter from "./Counter";
import {inc,dec, removeFromCart} from '../store/action/product'


const Cart=styled.div`
    display:flex;
    width:85%;
    justify-content: space-between;
    align-items:center;
    border-radius:10px;
    height:3rem;
    padding: 0 0.3rem;
    margin : 0.5rem auto;
    background: ${props=>props.theme.primary};
    box-shadow: 1px 1px 10px 1px #ccc;

`
const CounterContainer=styled.div`
    
    display:flex;
    text-align:center;

`
const CounterTotal=styled.div`
    margin: 0.2rem 0.3rem;
    font-size:0.8rem;
    color: ${props=>props.theme.light}
`
const ItemName=styled.div`
    font-size:0.8rem;
    width: 40%;
    padding-left:0.5rem;
    color: ${props=>props.theme.light};
`
const Price=styled.div`
    width: 30%;
    text-align:center;
    font-size:0.8rem;
    color: ${props=>props.theme.light}
`

const CardItem=({item})=>{
    const dispatch =useDispatch()
    const[count, setCount]= useState(1)
    const increment = id =>{
        setCount(count+1)
        dispatch(inc(id))
    }
    const dicrement = id =>{
        setCount(count-1)
        if (count>1){
            dispatch(dec(id))
        }else if(count==1){
            dispatch(removeFromCart(id))
        }
    }
    return(
        <Cart>
            <ItemName>{item.name}</ItemName>
            <CounterContainer>
                <Counter inc={()=>increment(item.id)}/>
                <CounterTotal>{count}</CounterTotal>
                <Counter dec={()=>dicrement(item.id)}/>
            </CounterContainer>
            <Price>{item.price}</Price>
        </Cart>

    )
}
export default CardItem;