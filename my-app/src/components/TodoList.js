import React from 'react';
import './style.css';
const TodoList = ({todos,setTodos,setEditTodo}) =>{
    const handleDelete =({id})=>{
        setTodos(todos.filter((todo)=>todo.id !==id))
    }
    const handleCompleted =(todo)=>{
        setTodos(
            todos.map((item)=>{
                if (item.id === todo.id) {
                    return {...item, completed: !item.completed};
                }
                return item;
            })
        )
    }
    const handleEdit = ({id}) =>{
        const findTodo =todos.find((todo)=>todo.id===id);
        setEditTodo(findTodo);
    }
    return(
        <div>
           {todos.map((todo)=>(
               <li key={todo.id} className='List-items'>
               
                   <input   className={`todoList ${todo.completed ? "complete": ""}`} type="text" value={todo.title} onChange={(event)=>
                       event.preventDefault()
                   }/>
                   <div>
                       <button className='btn2' onClick={()=>handleCompleted(todo)}><i class="far fa-check-square"></i></button>
                   </div>
                   <div>
                       <button className='btn3' onClick={()=>handleEdit(todo)}><i class="fas fa-edit"></i></button>
                   </div>
                   <div>
                       <button className='btn4' onClick={()=>handleDelete(todo)}><i class="far fa-trash-alt"></i></button>
                   </div>
               </li> 
           ))}  
        </div>
    )
};
export default TodoList;
