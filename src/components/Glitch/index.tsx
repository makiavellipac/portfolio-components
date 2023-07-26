import { styled } from 'styled-components';
import './styles.scss';

type props = {
    name:string;
    color?:string;
    backgroundColor?:string;
    fontColor?:string;
    width?:string | number;
}

const StyledGlitch = styled.div<{title:string,color:string, backgroundColor:string, fontColor:string}>`
background-color: ${props=>props.backgroundColor};
color: ${props=>props.fontColor};
position: relative;
font-family: 'Poppins';
font-weight: 900;
font-size: 50px;
line-height: 50px;
animation: glitch-skew 1s linear infinite alternate-reverse;
white-space: pre-line;
&:before {
    content: "${props=>props.title}";
    left: 2px;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    text-shadow: -2px 0 ${props=>props.color};
    clip: rect(44px,450px,56px,0);
    animation: glitch-anim 5s linear infinite alternate-reverse;
}
&:after {
    content: "${props=>props.title}";
    left: 2px;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    left: 0;
    left: -2px;
    text-shadow: -2px 0 #00fff9, 2px 2px ${props=>props.color};
    animation: glitch-anim2 1s linear infinite alternate-reverse;
}`

export const Glitch = ({
    name, 
    color='#ff00c1', 
    backgroundColor='#333', 
    fontColor="#FFF",
    width='100%'}:props) => {
  return (
    <StyledGlitch 
        title={name} 
        color={color} 
        backgroundColor={backgroundColor} 
        fontColor={fontColor}
        style={{width}}
        className='container-glitch'>
        {name}
    </StyledGlitch>
  )
}
