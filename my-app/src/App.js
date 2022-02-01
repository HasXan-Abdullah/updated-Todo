import Header from './components/Header';
import React,{useState} from 'react';
import TodoList from './components/TodoList';
import './App.css';
import Form from './components/Form';





const App =()=> {

  const[input, setInput]=useState("");
  const [todos, setTodos]=useState([]);
  const [editTodo,setEditTodo] = useState(null);
  return (
    
    <div className="App">
       
 <div>
   <Header/>
 </div>
<div>
  <Form
  //passing props to Form.js
  input ={input}
  setInput={setInput}
  todos={todos}
  setTodos={setTodos}
  editTodo={editTodo}
  setEditTodo={setEditTodo}
  
  
  />
</div>
<div>
   <TodoList
   todos={todos} 
   setTodos={setTodos} 
   setEditTodo={setEditTodo}/>
</div>

    </div>
  );
}

export default App;
