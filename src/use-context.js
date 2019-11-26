import React, { useState, createContext, useContext } from 'react'

const obj1 = {
  count: 2,
  loading: false
}

//只有当组件所处的树中没有匹配到 Provider 时，其 defaultValue 参数才会生效，没有匹配到指的是自组件用了useContext去接收contetx对象，但是这个子组件并没有被context.Provider包裹
// const MyContext = React.createContext(defaultValue); 
const CounterContext = createContext(obj1); // 创建context对象

// 子组件
function Counter() {
  const props = useContext(CounterContext);
  console.log(props, '子组件props');
  
  return (
    <div>
      <h2>子组件的count:{props.count}</h2>
      <ChildCounter />
    </div>
  )
}
// function Counter() {
//   const [count, setCount] = useState(9);
//   return (
//     <>
//       Count: {count}
//       <button onClick={() => setCount(9)}>Reset</button>
//       <button onClick={() => setCount(count - 1)}>-</button>
//       <button onClick={() => setCount(count + 1)}>+</button>
//     </>
//   );
// }

// 孙子组件
function ChildCounter() {
  const props = useContext(CounterContext);
  console.log(props, '孙子组件props');
  
  return (
    <h2>孙子组件的count：</h2>
  )
}

function UseContext() {
  const [count, setCount] = useState(0);

  const obj = {
    count,
    loading: true
  }

  return (
    <div>
      <p> you click {count}</p>
      <button onClick={() => {setCount(count + 1)}}>click me2</button>
      {/* <CounterContext.Provider value={obj}> */}
        <Counter />
      {/* </CounterContext.Provider> */}
    </div>
  )
}

export default UseContext;
