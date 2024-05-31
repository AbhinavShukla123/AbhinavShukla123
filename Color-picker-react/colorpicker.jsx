import Teact,{useState} from 'react'
 function Colorpicker(){

    const [color,setColor]=useState("#FFFFFF")

     function handlecolor(event){

        setColor(event.target.value);
     }
    return(
        <div className="color-picker-container">
            <h1>Select a Color</h1>
            <div className="color-picker-diaplay" style={{backgroundColor: color}}> </div>
            <p>Selected color: {color}</p>
            <label>Select a Color:</label>
            <input type="color" value={color} onChange={handlecolor} />
        </div>
    );

 }
 export default Colorpicker