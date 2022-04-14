import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {updateDict, updateDictBE, deleteDictBE} from "../redux/modules/addDict"
import {Link, useParams, useNavigate} from "react-router-dom"
import { useSelector } from "react-redux";
import Btn from "../components/Btn"

const EditDictionary = () => {
    const index = parseInt(useParams().index)
    const dict_list = useSelector((state) => state.addDict.filter((_, i) => {
        return i===index
    }))
    const navigate=useNavigate()

    useEffect(() => {
        word.current.value = dict_list[0].word
        desc.current.value = dict_list[0].desc
        exam.current.value = dict_list[0].exam
    } , [])

    const word = useRef(null)
    const desc = useRef(null)
    const exam = useRef(null)
    const dispatch = useDispatch();
    const Update= () =>{
        const dict = {
            id : dict_list[0].id,
            word: word.current.value,
            desc :desc.current.value,
            exam :exam.current.value
        }
        dispatch(updateDictBE(dict, index));
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
            <Btn onClick={Update}>수정하기</Btn>
        </ListStyle>
    );
};

const ListStyle = styled.div`
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

const EditBtn = styled.button`
background-color: ${(props) => props.background || "white"};
border:none;
width: 80%;
height: 40px;
font-weight: 700;
margin: auto;
border-radius: 20px;
font-size:15px;
color:#4382e6;
opacity: 0.9;
&:hover{
    opacity: 1.0;
}
`


export default EditDictionary;