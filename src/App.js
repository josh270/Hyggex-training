// import React, { useState } from 'react';
// import TodoList from './TodoList';

// function App() {
//   const [todos, setTodos] = useState([]);

//   const addTodo = (newTodo) => {
//     setTodos([...todos, newTodo]);
//   };

//   return (
//     <div>
//       <h1>Todo App</h1>
//       <TodoList todos={todos} addTodo={addTodo} />
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import './App.css';
// import Josh from './Components/Josh';
// import Card from './Components/Card';
// import Button from './Components/Button';
// import Counter from './Components/Counter';

// function App() {
//   return (
//     <div className='App'>
//     <Card title="Example Card" content="This is a reusable card component." />
//     <Button label="Click me" onClick={() => alert('Button clicked!')} />
//     <Counter />
//   </div>
//   );
// }

// export default App;

import React from 'react';
import useFetch from './Components/useFetch';

const App = () => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1'; 
  const { data, loading, error } = useFetch(apiUrl);

  return (
    <div>
      <h2>API Data:</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <p>Title: {data.title}</p>
          <p>Completed: {data.completed ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
};

export default App;
