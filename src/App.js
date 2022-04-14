import React, {useState} from "react";
import AddDictionary from "./pages/AddDictionary";
import styled from "styled-components";
import DictList from "./pages/DictList";
import { Route,Routes } from "react-router-dom";
import EditDictionary from "./pages/EditDictionary";
import { useDispatch } from "react-redux";
import { loadDictBE } from "./redux/modules/addDict";


const App = () => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(loadDictBE())
  },[])
  return (
    <Container>
      <Title >My Dictionary</Title>
      <Line />
      <Routes>
        <Route path="/*" element={<DictList />}/>
        <Route path="/add" element={<AddDictionary/>}/>
        <Route path="/edit/:index" element={<EditDictionary/>}/>
      </Routes>
    </Container>
  );
}

const Container = styled.div`
background-color: #4382e6;
max-width: 350px;
max-height: 93vh;
padding: 16px;
margin: auto;
border-radius: 5px;
border: 1px solid #ddd;
overflow: auto;
position: relative;
`;

const Title = styled.h1`
color: white;
text-align: center;
`;

const Line = styled.hr`
margin: 16px 0px;
border: 1px dotted #ddd;
`;



export default App;