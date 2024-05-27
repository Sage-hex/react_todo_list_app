import "./TodoList.css"
import Date from "./components/Date/Date"
import Input from "./components/Input/Input"
import Todo from "./components/Todo/Todo"
import TodoHeader from "./components/TodoHeader/TodoHeader"

const TodoList=()=>{
    const list = [
        {
            todo: "Go to Church",
            desc: "st Matthews",
            id: 1
        },
        {
            todo: "Go to School",
            desc: "The Curve Africa",
            id: 2
        },
        {
            todo: "Eat Good food",
            desc: "Crusties",
            id: 3
        },
    ]
    return(
        <div className="TodoListContainer">
            <main>
            <TodoHeader/>
            <Date/>
            <Input/>
            <div className="TodoListHolder">
                {
                    list.map((e)=>(
                        <div key={e.id}>
                            <Todo todo={e.todo} desc={e.desc}/>
                        </div>
                    ))
                }
            </div>
            </main>
        </div>
    )
}

export default TodoList