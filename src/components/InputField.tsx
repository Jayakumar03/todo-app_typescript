
import React,{ useRef, useState } from "react";
import './styles.css'

// Impoted components
import {Todos} from "../components/Model"
import Todolist from './Todolist'



const InputField :React.FC = () => {
// useref hook for imput color changing
  const inputRef= useRef<HTMLInputElement>(null)

    // state
  // <string> is used to specfi that todo is string 
  const [todo, setTodo] = useState<string>("")
  const[todos, setTodos] = useState<Todos[]>([])


    // Function to handle submit
    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        if(todo){
            setTodos([...todos, {id:Date.now(),todo:todo, isDone:false}])
            setTodo("")
        }
        else{
            alert("Enter an task")
        }
        console.log(todos)

    }

 return(
<>
    <form className="input" onSubmit={(e) => {
        handleSubmit(e)
        inputRef.current?.blur();
    }} >
        <input type="input" className="inputbox" 
        value={todo}
        onChange={(e) => {setTodo(e.target.value)}}
        placeholder="Enter an task"
        />
        <button type="submit" className="inputsubmit" onClick={handleSubmit} > GO</button>
    </form>
    <Todolist todos={todos} />
    </>
 )

}

export default InputField