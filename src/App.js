import React from 'react';
import './App.css';
import Josh from './Components/Josh';
import Card from './Components/Card';
import Button from './Components/Button';

function App() {
  return (
    <div className='App'>
    <Card title="Example Card" content="This is a reusable card component." />
    <Button label="Click me" onClick={() => alert('Button clicked!')} />
  </div>
  );
}

export default App;

