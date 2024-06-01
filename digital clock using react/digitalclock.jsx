import React,{useState,useEffect} from 'react'
 import img1 from './assets/goku.jpg.png'
function DigitalClock(){
    const [time,setTime]= useState(new Date());
    useEffect(()=>{
      const valid=setInterval(()=>{
        setTime(new Date());
      },1000)
      return()=>{
        clearInterval(valid);
      }
    },
      []);
      function zero1(number){
        return (number<10 ? "0":"")+number;
      }
      function currenttime(){
        let h=time.getHours();
        let m=time.getMinutes();
        let s=time.getSeconds();
        const med =h>=12?"PM":"AM";
        h=h%12||12;
        return `${zero1(h)}:${zero1(m)}:${zero1(s)}:${med}`;
      }
      
    return(
        <div className="clock-container">
            <div className="clock">
            <span>{currenttime()}</span>
           </div>
        </div>
    );
}
export default DigitalClock