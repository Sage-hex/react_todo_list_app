import "./Todo.css";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";

const Todo = (props) => {
  return (
    <div className="TodoContainer">
        <div className="TodoWrapper">
        <div>
            <input type="checkbox"/>
            <div>
                <h3>{props.todo}</h3>
                <p>{props.desc}</p>
            </div>
        </div>
        <div className="TodoEllipses">
        <IoEllipsisHorizontalSharp />
        </div>
        </div>
    </div>
  )
}

export default Todo