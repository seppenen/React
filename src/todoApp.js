import React, {  useState, useEffect } from 'react'
import TodoList from './components/ToDoList'

export default function App()  {
 
    const [todos, setTodos] = useState([])
    const [todoTitle, setTodoTitle] = useState('');
   
   
    useEffect(()=>{
    const token = localStorage.getItem('todos');
    setTodos(JSON.parse(token));
    console.log('getItem')
   },[] )
  
   useEffect(()=>{
      localStorage.setItem('todos', JSON.stringify(todos))
      console.log('setItem')
    },[todos] )

<<<<<<< HEAD

=======
  
 
>>>>>>> 2bb3dc350265849995404c1ded4454fff5db48b9

    console.log('render')

    const addTitle =(e) =>{

      if(e.key==='Enter'){

        setTodos([
          ...todos,
          {  
            id: Date.now(),
            title: todoTitle,
            completed: false,
          }])
          setTodoTitle('')
      }    
      
    }

  
    return (
      <div className="container">
        <h1>Todo app</h1>

          <div className="input-field">
            <input type="text" placeholder="ToDo name" value={todoTitle}  onChange={ (e)=> setTodoTitle(e.target.value) } onKeyPress={(e)=> addTitle(e)}  />
            
          </div>

          <TodoList todos={todos} />
      </div>
    );
  }
