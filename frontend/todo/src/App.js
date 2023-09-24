import React,{ useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [ todos, setTodos ] = useState([]);
  const [ newTodo, setNewTodo ] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/todos/')
    .then(response => {
      setTodos(response.data)
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  },[]);

  const handleInputChange = (e) => {
    setNewTodo(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTodo.trim() !== ''){

      axios.post('http://127.0.0.1:8000/api/todos/', {
        title: newTodo,
        completed: false
      })

      .then(response => {
        setTodos([...todos, response.data]);
        setNewTodo('');
      })
      .catch(error => {
        console.error("error", error);
      })
    }
  };

  const handleCompleted = (id) => {
    const updateTodos = todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );

      setTodos(updateTodos);

      axios.patch(`http://127.0.0.1:8000/api/todos/${id}/`, {
        completed: !todos.find(todo => todo.id === id).completed
      })
      .catch(error => {
        console.error("Error updating todo:", error);
      });
  };

  const handleDelete = (id) => {
    
    const upadatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(upadatedTodos);

    axios.delete(`http://127.0.0.1:8000/api/todos/${id}/`)
    .catch(error => {
      console.error("Error deleting todo:", error)
    })
  };

  return (
    <div className="todo-container">
      <h1>TODO App</h1>
      <form id="todo-form" onSubmit={handleSubmit}>
          <input type="text" className="todo-input" id="new-todo" placeholder="Add a new TODO"
            value={newTodo}
            onChange={handleInputChange}
          />
          <button type="submit">Add Todo</button>
      </form>
      <ul className="todo-list" id="todo-list">
        {todos.map(todo => (
          <li className="todo-item" key={todo.id}>
            <input type="checkbox"
             checked={todo.completed}
             onChange={() => handleCompleted(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.title}
            </span>
            <button className="delete-button" onClick={() => handleDelete(todo.id)}>delete</button>
            </li> 
        ))}
      </ul>
    </div>
  );
}

export default App;
