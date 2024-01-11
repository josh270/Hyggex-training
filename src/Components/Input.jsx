import React, { useRef, useState, useCallback } from 'react';

const FormWithFocus = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h2>Form with Focus</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            ref={inputRef}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={focusInput}>
          Submit
        </button>
      </form>
    </div>
  );
};

const ListWithCallback = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const addItem = useCallback(() => {
    setItems((prevItems) => [...prevItems, `Item ${prevItems.length + 1}`]);
  }, []);

  return (
    <div>
      <h2>List with Callback</h2>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

const ListItem = React.memo(({ item }) => {
  console.log('ListItem rendering:', item);
  return <li>{item}</li>;
});

const App = () => {
  return (
    <div>
      <FormWithFocus />
      <ListWithCallback />
    </div>
  );
};

export default App;
