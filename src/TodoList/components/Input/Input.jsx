import { CiTextAlignLeft } from "react-icons/ci";
import "./Input.css"
import { useState } from "react";



const Input = ({addTodo})  =>{
  const [text, setText] = useState("");
  const [showButton, setShowButton] = useState(false);

  const onAdd = () => {
    addTodo((prev) => [...prev, { todo: text, desc: text, id: prev.length + 1 }]);
    setText("");
    setShowButton(false); // Hide the button after adding the todo
  };

  return(





    <div className="InputContainer">
        <div className="InputHolder">
        <div className="InputIcon">
        <CiTextAlignLeft />
        </div>
        {/* <input placeholder="Add a Task..." onChange ={(e) => setText(e.target.value)}/> */}
        <input 
          placeholder="Add a Task..." 
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={() => setShowButton(true)}
          onBlur={() => !text && setShowButton(false)}
        />
        {showButton && <button onClick={onAdd} style={{padding:"10px",backgroundColor:"black",color:"white"}}>Submit</button>}
        {/* <button onClick={onAdd}>Submit</button> */}
    </div>
    </div>
  )
}

export default Input