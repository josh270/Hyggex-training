import React, { useState, memo } from 'react';

const WithMemoization = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Component With Memoization</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <MemoizedChildComponent />
    </div>
  );
};

const ChildComponent = () => {
  console.log('ChildComponent rendering');
  return <p>This is a child component.</p>;
};

const MemoizedChildComponent = memo(ChildComponent);

export default WithMemoization;
