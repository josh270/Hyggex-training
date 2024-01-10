import React, { useState } from "react";

const WithoutMemoization = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Component Without Memoization</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <ChildComponent />
    </div>
  );
};

const ChildComponent = () => {
  console.log("ChildComponent rendering");
  return <p>This is a child component.</p>;
};

export default WithoutMemoization;

// In these examples, The code in  WithoutMemo.jsx contains a child component, and WithMemo.jsx contains a memoized version of the same child component using React.memo. You'll notice that the child component logs a message when it renders.

// If you use both components in your application and interact with the "Increment" button, you should observe that the child component in the WithoutMemo re-renders every time the parent renders. On the other hand, the child component in the WithMemo component will only re-render when its props change, preventing unnecessary re-renders and showcasing the efficiency of the Virtual DOM.
