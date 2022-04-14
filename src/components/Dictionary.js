import React from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {deleteDictBE} from "../redux/modules/addDict"
import {useNavigate } from "react-router-dom";
import ShortBtn from "./ShortBtn"

const Dictionary = (props) =>{
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const url = "/edit/" + props.index
    const handleEdit = () => {
        navigate(url)
    }

    const handleDelete = () =>{
        dispatch(deleteDictBE(props.data.id, props.index));
    }
    
    return(
        <ItemStyle>
            <List>단어</List>
            <Text>{props.data.word}</Text>

            <List>설명</List>
            <Text>{props.data.desc}</Text>

            <List>예시</List>
            <Text style={{color:"#a9d0ff"}}>{props.data.exam}</Text>

            <ShortBtn background={"#06a66c"} onClick={() => handleEdit()}>수정하기</ShortBtn>
            <ShortBtn background={"crimson"} onClick={() => handleDelete()}>삭제하기</ShortBtn>
        </ItemStyle>
    )
}
const ItemStyle = styled.div`
padding: 14px;
margin: 10px;
background-color: white;
border-radius: 10px;
`;

const List = styled.div`
font-size: 8px;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
text-decoration: underline;
margin-bottom: 6px;
`

const Text = styled.div`
margin-bottom: 10px;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`

export default Dictionary