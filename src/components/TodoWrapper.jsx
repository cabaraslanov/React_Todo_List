import React, { useContext } from 'react'
import TodoForm from './TodoForm'
import { context } from '../context/TodoContext'
import Todo from './Todo'
import TodoListCount from './TodoListCount'



const TodoWrapper = () => {

  const {todos} = useContext(context)

  return (
    <div className='TodoWrapper'>
      
      <h2>Todo App</h2>
      <TodoForm />


  {
    todos.length != 0 ? (
      <ul>
          {
        todos?.map((todo,index)=>(
            <Todo key={index} todo={todo}/>
        ))
      }
      </ul>
    )

     : (<div className='listBosdur'>List bosdur</div>)
  }
    <TodoListCount />



    </div>
  )
    

}

export default TodoWrapper

{/* <TodoForm />
{
  todos?.map((todo,index) =>(            
      <Todo todo={todo} key={index}/>
  ))
} */}