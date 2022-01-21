import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { handleALL } from "../store/action/product";

const Outer = styled.ul`
    margin-block-start:0;
    margin-block-end: 0em;
    padding-inline-start: 1em;
    padding-inline-end: 1em;
    margin-top:1rem;
`;

const Menu = styled.li`
    height: 2rem;
    display:flex;
    justify-content:center;
    align-items: center;
    text-align:center;
    font-size:0.9rem;
    font-weight:bold;
    border-radius:15rem;
    position:relative;
    border: 1px solid ${(props) => props.theme.primary};
    color: ${(props) => props.theme.grey},
    cursor:pointer;
    :hover{
      background-color: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.light};
    }
    &:not(:last-child){
        margin-bottom: 0.5rem;
    }

`;

const ListMenu = ({ item }) => {
  const dispatch = useDispatch();
  const data = item.map((data) => {
    return {
      id: data.id,
      name: data.category,
    };
  });

  const handleAll = (category) => {
    dispatch(handleALL(category));
    console.log(category);
  };

  const [menu] = useState([
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Novel",
    },
    {
      id: 3,
      name: "Pengetahuan",
    },
    {
      id: 4,
      name: "Resep",
    },
    {
      id: 5,
      name: "Sejarah",
    },
  ]);

  return (
    <Outer>
      {menu.map((data) => (
        <Menu key={data.id} onClick={() => handleAll(data.name)}>
          {data.name}
        </Menu>
      ))}
    </Outer>
  );
};

export default ListMenu;
