import { useState } from 'react';
import { styled } from 'styled-components';
import './styles.scss';

const LiCustom = styled.li<{color:string,active:boolean,fontColor:string}>`
    cursor:pointer;
    color:${props=>props.active?props.color:props.fontColor};
    &:before{
        position: absolute;
        top: -40px;
        content: '';
        display: block;
        width: 100%;
        height: 25px;
        border-radius: 8px;
        background-color: ${props=>props.active&&props.color};
        transition:0.3s;
    }
    &:hover{
        color:${props=>props.color}
    }
    &:hover:before {
        position: absolute;
        top: -40px;
        content: '';
        display: block;
        width: 100%;
        height: 25px;
        border-radius: 8px;
        background-color: ${props=>props.color};
        transition:0.3s;
    }
`

type props = {
    menu:string[];
    color:string;
    fontColor:string;
}

type newMenu = {
    value:string,
    active:boolean
}[]

export const Menu = ({menu,color,fontColor}:props) => {
  const [newMenu,setNewMenu] = useState<newMenu>(menu.map((m,index)=>(
    {
        value:m,
        active:index===0 ? true : false
    }
  )))
  const handleCLick = (val:number) => {
    setNewMenu(
        newMenu.map((valor,index)=>(
            {
                value:valor.value,
                active:index===val?true:false
            }
        ))
    )
  }
  return (
    <div className='menu-header'>
        <nav >
            <ul>
                {
                    newMenu.map((val,index)=>(
                        <LiCustom 
                            color={color} 
                            active={val.active} 
                            fontColor={fontColor} 
                            onClick={()=>handleCLick(index)}>
                                {val.value}
                        </LiCustom>
                    ))
                }
            </ul>
        </nav>
    </div>
  )
}
