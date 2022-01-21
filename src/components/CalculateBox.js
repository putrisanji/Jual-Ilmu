import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import Button from "./Button";
import {reset} from '../store/action/product'

const Titles= styled.h4`
    margin:0px;
    padding:0px;
    font-size:0.9rem;
`
const Text= styled.p`
    margin:0px;
    padding:0px;
    font-size:0.8rem;
`

const Box = styled.div`
    position:fixed;
    bottom:0;
    margin: 1rem 0;
    box-shadow: 1px 1px 10px 1px #ccc;
    padding: 1rem;
    margin-left:0.7rem;

`
const TotalBox = styled.div`
    display:flex;
    justify-content: space-between;
    margin-bottom:0.4rem;
`
const PayBox = styled.div`
    display:flex;
    justify-content: space-between;
    margin-bottom:0.4rem;
    input[type=number]{
        border:none;
        border-bottom: 1px solid #000;
        font-weight: bold;
        text-align: right;
        &:focus{
            outline:none;
        }
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button{
            -webkit-appearance:none;
        }
    }
`
const ReturnBox = styled.div`
    display:flex;
    justify-content: space-between;
    margin-bottom:1.5rem;
`
const ButtonBox = styled.div`
    display:flex;
    justify-content: space-between;
    margin-bottom:0.4rem;
    
`

const CalculateBox = ()=>{
    const dispatch =useDispatch()
    const carts= useSelector(state => state.product.carts)
    const total = carts.reduce((totalPrice, current) => totalPrice + current.price, 0)
    const [pay, setPay]= useState("0")
    const [payBack, setPayBack]= useState("0")
    
    const handleChange = e=>{
        setPay(e.target.value)
    }

    const handlePayBack = ()=>{
        if (pay > total){
            setPayBack(pay-total)
        }
    }

    const handleReset= ()=>{
        dispatch(reset())
        setPay ("0")
        setPayBack("0")
    }

    return(
        <Box>
            <TotalBox>
                <Titles>Total</Titles>
                <Text>{total}</Text>
            </TotalBox>
            <PayBox>
                <Text>Jumlah Bayar</Text>
                <input type='number' value={pay} onChange={handleChange}/>
            </PayBox>
            <ReturnBox>
                <Text>Kembali</Text>
                <Text>{payBack}</Text>
            </ReturnBox>
            <ButtonBox>
                <Button text='Batalkan' action={handleReset}/>
                <Button primary action={handlePayBack} text='Selesai'/>
            </ButtonBox>
        </Box>
    )

}
export default CalculateBox;