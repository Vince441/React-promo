import { useState } from "react";

function Wilders({ name }) {
  
const [Compris, setCompris] = useState(false);
  
  return (
    <div>
      <h1>{name}</h1>
      

<button onClick={() => setCompris(current => !current)}>Compris/Pas Compris</button>

<p> {Compris ? "j'ai compris" : "je n'ai pas compris" }
    
    </p> 


    </div>
  );
}

export default Wilders;
