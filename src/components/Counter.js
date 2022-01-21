import React from "react";
import styled from "styled-components";

const CounterStyle= styled.div`
    width: 1rem;
    background: ${props=>props.theme.light};
    color:${props=>props.theme.dark};
    padding: 0rem 0.2rem 0.rem 0.2rem;
    margin: 0 0.3rem;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;

`

const Counter = ({ inc, dec }) => {
  if (inc) {
      return(
        <CounterStyle onClick={inc}>+</CounterStyle>

    )

  } else {
      return(
        <CounterStyle onClick={dec}>-</CounterStyle>

      )

  }
};

export default Counter