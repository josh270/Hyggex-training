// Class component
// import React, { component } from 'react';

// class Counter extends Component {
//     constructor (props) {
//         super(props);
//         this.state = {
//             count: 0,
//         }
//     }

    
//   componentDidMount() {
//     document.title = `Count: ${this.state.count}`;
//   }

//   componentDidUpdate() {
//     document.title = `Count: ${this.state.count}`;
//   }

//   componentWillUnmount() {
//   }

//   increment = () => {
//     this.setState((prevState) => ({
//       count: prevState.count + 1,
//     }));
//   };

//   decrement = () => {
//     this.setState((prevState) => ({
//       count: prevState.count - 1,
//     }));
//   };

//   render() {
//     return (
//       <div>
//         <p>Count: {this.state.count}</p>
//         <button onClick={this.increment}>Increment</button>
//         <button onClick={this.decrement}>Decrement</button>
//       </div>
//     );
//   }
// }

// export default Counter;

// functional component
// Converting to functional component using useState and useEffect

import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;

    return () => {
     
    };
  }, [count]);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
