
import React,{ useState } from "react";
import './styles.css'

// Impoted components
import {Todos} from "../components/Model"



const InputField :React.FC = () => {


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

    <form className="input"  >
        <input type="input" className="inputbox" 
        value={todo}
        onChange={(e) => {setTodo(e.target.value)}}
        placeholder="Enter an task"
        />
        <button type="submit" className="inputsubmit" onClick={handleSubmit} > GO</button>
    </form>

 )

}

export default InputField