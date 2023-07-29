import { useEffect, useState } from 'react';
import './styles.scss';

type props = {
    perfil:string[]
    color:string;
    cursorColor:string
}

export const TypeWriter = ({perfil,color,cursorColor}:props) => {
  const [count,setCount] = useState<number>(0);
  const [delay, setDelay] = useState<number>(150);
  const [meaning, setMeaning] = useState<boolean>(true);
  const [sizeArray] = useState<number>(perfil.length)
  const [size,setSize] = useState<number>(perfil[0].length+5)
  const [position, setPosition] = useState<number>(0)

  const subs = (perfil:string,num:number) => perfil.substring(0,num)

  useEffect(()=>{
    let interval:any = null;
    if(meaning){
        interval = setInterval(()=>{
            setCount(count+1)
        },delay)
        if(count===size) {
            setMeaning(!meaning)
            setDelay(50)
        }
    }
    else {
        interval = setInterval(()=>{
            setCount(count-1)
        },delay)
        if(count===0){
            setMeaning(!meaning)
            setDelay(150)
            sizeArray===position+1?setPosition(0):setPosition(position+1);
        }
    }
    setSize(perfil[position].length+5)
    return()=>clearInterval(interval);
  },[count,delay,meaning,size,position,sizeArray,perfil])
  return (
    <div className="Typewriter">
    <span className="Tipewriter__wraper" style={{color:color}}>
        {subs(perfil[position],count)}
    </span>
    <span className="Tipewriter__cursor" style={{color:cursorColor}}>|</span>
</div>
  )
}
