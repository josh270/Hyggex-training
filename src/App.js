import React from 'react';
import './App.css';
import Josh from './Components/Josh';
import Card from './Components/Card';
import Button from './Components/Button';
import Counter from './Components/Counter';

function App() {
  return (
    <div className='App'>
    <Card title="Example Card" content="This is a reusable card component." />
    <Button label="Click me" onClick={() => alert('Button clicked!')} />
    <Counter />
  </div>
  );
}

export default App;

