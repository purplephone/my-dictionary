import React from "react";
import Dictionary from "../components/Dictionary";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom";

const DictList = () => {
    const dict_list = useSelector((state) => state.addDict)
    const navigate = useNavigate()
    const handleAdd = () => {
        navigate('/add')
    }
    return(
        <ListStyle>
            {dict_list.map((d, index) => {
                return <Dictionary data={d} key={index} index={index}/>
            })}
            <AddBtn onClick={handleAdd}>+</AddBtn>
        </ListStyle>
    )
}

export const ListStyle = styled.div`
display: flex;
flex-direction: column;
height: 100%;
`;

export const AddBtn = styled.button`
background-color: white;
border: none;
font-size: 30px;
width: 50px;
height: 50px;
border-radius: 25px;
position: sticky;
left:85%;
bottom: 0%;
color:#4382e6;
border: 1px solid #4382e6;
&:hover{
  transform: scale(1.1);
}
`

export default DictList