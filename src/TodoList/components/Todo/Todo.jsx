import "./Todo.css";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";

const Todo = (props) => {


  const deleteTodo=()=>{
    const filteredList = props.list.filter((e) => e.id !== props.id)
    props.setList(filteredList)
  }
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
        <div className="TodoEllipses" onClick={deleteTodo}>
        <IoEllipsisHorizontalSharp />
        </div>
        </div>
    </div>
  )
}

export default Todo