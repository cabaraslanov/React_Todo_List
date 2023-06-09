import { createContext, useState } from "react";
import { toast } from 'react-toastify';

export const context = createContext();

const Provider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [listCount,setListCount] = useState(0)
  var [completedCount,setCompletedCount] = useState(0)
  

  console.log(todos,"todos");


  const handleSubmit = (e)=>{
    e.preventDefault();


    if(inputValue.trim() == ""){
      toast.error('List bosdur !');

    }else{

      setTodos([...todos,item])
      setInputValue("");
      
      setListCount(listCount+1);

      toast.success('List elave edildi !');

    }
  }




  const handleChange = (e)=>{
    setInputValue(e.target.value);
  }

  const todoDelete = (id)=>{
    let filtered = todos.filter(todo=>todo.id !== id)
    setTodos(filtered)
    console.log(filtered,"filtered");
    setListCount(listCount-1)

    todos.map((item)=>{
          if(item.completed === true){
      setCompletedCount(completedCount-1)
    }
    })


  }

  const allDelete = () => {
    setTodos([]);
    setListCount(0);
    setInputValue("");
    setCompletedCount(0)
    toast.dark('List sifirlandi!')


  }


  const editTodo = (id) => {
    const editFilter = todos.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;

        if(item.completed === true){
          completedCount++;
          toast('List tamamlandi !')
        }else{
          completedCount--
          toast.warning('List legv edildi !')

        }
      }

      return item
    });
    setTodos(editFilter);
    setCompletedCount(completedCount)
  }


  const item = {
    id:Math.floor(Math.random()*1000),
    value:inputValue,
    completed:false
  }

  const data = {
    handleSubmit,
    handleChange,
    todos,
    item,
    todoDelete,
    editTodo,
    listCount,
    completedCount,
    allDelete
  }

  return(
    <context.Provider value={data}>
        {children}
    </context.Provider>
  )

}
export default Provider;

// const editTodoForm = (id) => {
//     setTodos(todos.map(todo=>todo.id === id ? {...todo, isEditing:!todo.isEditing} : todo))
// }

// const editTask = (id) => {
//     setTodos(todos.map(todo=>todo.id === id ? {...todo, inputValue, isEditin:!todo.isEditing} : todo))
// }

//     const data = {
//         inputValue,
//         setInputValue,
//         handleSubmit,
//         handleChange,
//         todos,
//         setTodos,
//         delet,
//         toggleCompleted,
//         // editTodoForm,
//         // editSubmit
//    }

// const handleSubmit = (e) => {
//     e.preventDefault();

//     addTodo(inputValue);

//     setInputValue("")

// }
// const handleChange = (e) => {
//     setInputValue(e.target.value);
// }

// const item = {
//     id:Math.floor(Math.random()*1000),
//     value:inputValue,
//     completed:false,
//     isEditing:false
// }
// const addTodo = ()=>{
//     setTodos([...todos,item])
//     console.log(todos);
// }

// ??? const toggleCompleted = (id) => {
//     setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo))
// }

// const delet = (id) => {
//    setTodos(todos.filter((filt)=>filt.id !== id));

// }
