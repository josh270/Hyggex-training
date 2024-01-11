import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, addTodo }) {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} />
        ))}
      </ul>
      <button onClick={() => addTodo('New Todo')}>Add Todo</button>
    </div>
  );
}

export default TodoList;
