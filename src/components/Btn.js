import styled from "styled-components"

const Btn = (props) => {
    return(
        <MyBtn onClick={props.onClick} background={props.background} color={props.color} width={props.width}>
            {props.children}
        </MyBtn>
    )
}

const MyBtn = styled.button`
background-color: ${(props) => props.background || "white"};
border:none;
width: 80%;
height: 40px;
font-weight: 700;
margin: ${(props) => props.margin || "auto"};
border-radius: 20px;
padding:0;
font-size:15px;
color:${(props) => props.color || "#4382e6"};
opacity: 0.9;
&:hover{
    opacity: 1.0;
}
`

export default Btn;