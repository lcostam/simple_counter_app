import { useState } from "react";

function Counter(){
  const [count, setCount] = useState(0);
  
  return(

    <div className="w3-content" style={{maxWidth:2000, marginTop:46}}>
      <div className="w3-container w3-content w3-center w3-padding-64" style={{maxWidth:800}} id="band">
        <h2 className="w3-wide">SIMPLE COUNTER PROJECT</h2>
        <h1 className="w3-center ">{count}</h1>
        <div className="w3-row w3-padding-32">
          <div className="w3-third">
            <p><button class="w3-button w3-red" onClick={()=> {setCount(count-1)}}>-</button></p>
          </div>
          <div className="w3-third">
          <p><button class="w3-button w3-blue" onClick={()=> {setCount(0)}}>reset</button></p>
          </div>
          <div className="w3-third">
            <p><button class="w3-button w3-teal" onClick={()=> {setCount(count+1)}}>+</button></p>
          </div>
        </div>
      </div>
    </div>
    );


}


export default Counter;