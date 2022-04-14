import React, { useRef, useState } from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {addDictBE} from "../redux/modules/addDict"
import {Link, useNavigate} from "react-router-dom"
import Btn from "../components/Btn"

const AddDictionary = () => {
    const word = useRef(null)
    const desc = useRef(null)
    const exam = useRef(null)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const Add = () =>{
        const dict = {
            word: word.current.value,
            desc :desc.current.value,
            exam :exam.current.value
        }
        dispatch(addDictBE(dict));
        navigate('/')
    }
    return (
        <ListStyle>
            <ItemStyle>
                <List>단어</List>
                <Input ref={word}></Input>
            </ItemStyle>

            <ItemStyle>
                <List>설명</List>
                <Input ref={desc}></Input>
            </ItemStyle>

            <ItemStyle>
                <List>예시</List>
                <Input ref={exam}></Input>
            </ItemStyle>
            <Btn onClick={() =>Add()}>추가하기</Btn>
        </ListStyle>
    );
};

const ListStyle = styled.div`
overflow: scroll;
display: flex;
flex-direction: column;
height: 100%;
overflow-x: hidden;
overflow-y: auto;
border-radius: 10px;
`;

const ItemStyle = styled.div`
padding: 14px;
margin: 8px;
background-color: white;
border-radius: 10px;
`;

const List = styled.div`
font-size: 8px;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
text-decoration: underline;
margin-bottom: 10px;
`

const Input = styled.textarea`
font-size: 15px;
padding: 0;
width: 100%;
resize: none;
`

const AddBtn = styled.button`
background-color: ${(props) => props.background || "white"};
border:none;
width: ${(props) => props.width || "80%"};
height: 40px;
font-weight: 700;
margin: auto;
border-radius: 20px;
padding:0;
font-size:15px;
color:${(props) => props.color || "#4382e6"};
opacity: 0.9;
&:hover{
    opacity: 1.0;
}
`

export default AddDictionary;