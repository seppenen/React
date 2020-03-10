import React,{  useState } from 'react'


 export default function TodoList(props) {


  const TodoItem = ({id, title, completed})=> {  //Miksi sulut?
  
    const [checked, setChecked]=useState(completed)
    const cls =['todo'];

    if(checked){

    cls.push('completed');
    }

    return (
      <li className={cls.join(' ')}>
        <label>
          <input type="checkbox" name='todo' onChange={(e)=>setChecked(!checked)} checked={checked} />
          <span> {title} </span>
  
          <i className="material-icons red-text" >
            delete
          </i>
        </label>
      </li>
    )
  }  
  
  return (
    <ul>
      {
      props.todos.map(todos => <TodoItem key={todos.id} {...todos} />)
      }
    </ul>
  )
}


/* 

export default function TodoList(props) {
  
  return (
      
      props.todos.map(todos => {
        console.log(todos.id);
      return (
        
        <ul key= {todos.id}>
    <li className="todo" >
      <label>
        <input
          type="checkbox"
          defaultChecked={false} />
        <span > {todos.title} </span>

        <i className="material-icons red-text" >
          delete
        </i>
      </label>
    </li>
    </ul>
  ) 
})

      
    
  )
}  */