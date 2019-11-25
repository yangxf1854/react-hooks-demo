// function counterReducer(state, action) {
//   switch (action.type) {
//     case 'add':
//       return state + 1;
//     case 'sub':
//       return state - 1 ;
//     default: 
//       return state;
//   }
// }
import React, { useReducer } from 'react'
// useReducer
// 它接收一个形如 (state, action) => newState 的 reducer，
// 并返回当前的 state 以及与其配套的 dispatch 方法。
// 一般将初始 state 作为第二个参数传入 useReducer 是最简单的方法
function ReducerDemo() {
  const [count, dispatch] = useReducer((state, action) => {
    console.log(state, action);
    switch(action.type) {
      case 'add':
        return state + 1;
      case 'sub':
        return state -1;
      default:
        return state;
    }
  }, 0);

  return (
      <div>
        <h1>现在的分数是：{count}</h1>
        <button onClick={() => { dispatch({type: 'add'})}}>+</button>
        <button onClick={() => { dispatch({type: 'sub'})}}>-</button>
      </div>
  ); 
}

export default ReducerDemo;