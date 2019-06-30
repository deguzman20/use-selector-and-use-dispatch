import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const todo = useSelector(( state ) => state );
  const dispatch = useDispatch();
  const todoList = useRef();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    dispatch({
      type: 'ADD_TODO',
      payload: todoList.current.value 
    });    
    
  }

  console.log(todo)
  
   
  return (
    <React.Fragment>
      <center>
        <h1>Todo App</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" ref={todoList}/>
          <input type="submit" />
        </form>
        <ul>
          {todo.map( ({todo, id} ) =>(
             <li key={id}>
             {todo}
              <button onClick={() => dispatch({ type: 'REMOVE_TODO', id: id })}>X</button>
             </li>
          ))}   
        </ul>
      </center>
    </React.Fragment>
  );
}

export default App;
