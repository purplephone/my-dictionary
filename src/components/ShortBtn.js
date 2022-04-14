import styled from "styled-components"

const ShortBtn = (props) => {
    return(
        <Shortbtn onClick={props.onClick} background={props.background} color={props.color}>
            {props.children}
        </Shortbtn>
    )
}

const Shortbtn = styled.button`
background-color: ${(props) => props.background || "slateblue"};
border:none;
width: 39%;
height: 40px;
font-weight: 700;
margin: 10px 15px 0 15px;
padding:0;
font-size:15px;
color:${(props) => props.color || "white"};
opacity: 0.9;
border-radius: 15px;
&:hover{
    opacity: 1.0;
}
`

export default ShortBtn;