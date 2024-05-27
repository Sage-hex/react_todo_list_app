import { CiTextAlignLeft } from "react-icons/ci";
import "./Input.css"

const Input = () => {
  return (
    <div className="InputContainer">
        <div className="InputHolder">
        <div className="InputIcon">
        <CiTextAlignLeft />
        </div>
        <input placeholder="Add a Task..."/>
    </div>
    </div>
  )
}

export default Input