import React, { useContext } from 'react'
import {BsPen,BsTrash} from "react-icons/bs"
import { context } from '../context/TodoContext'

const Todo = ({todo}) => {

    const {todoDelete,editTodo} = useContext(context);

  return (
    <div className='todo'>
      <p className={todo.completed ? "completed" : ""}>{todo.value}</p>
      <div className='todoIcons'>
        <BsPen onClick={()=>editTodo(todo.id)}/>
        <BsTrash onClick={()=>todoDelete(todo.id)}/>
      </div>
    </div>
  )
}

export default Todo