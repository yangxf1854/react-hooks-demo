import React, { createContext, useReducer } from 'react';


// 公用组件，提供状态共享
export const ColorContext = createContext({});

export const UPDATE_COLOR = 'UPDATE_COLOR';
// reducer函数处理业务逻辑
// const reducer = (state, action) => {
//   switch(action.type) {
//     case UPDATE_COLOR:
//       return action.color
//     default:
//       return state;
//   }
// }

// export const Color = props => {
//   const [color, dispatch] = useReducer(reducer, 'blue');

//   return (
//     /* 这时共享出去的状态变成了color和dispatch，如果不共享出去dispatch，没办法完成按钮相应事件的 */
//     <ColorContext.Provider value={{color, dispatch}}>
//       {props.children}
//     </ColorContext.Provider>
//   )
// }

// export const UPDATE_COLOR = 'UPDATE_COLOR';
const reducer = (state, action) => {
  switch(action.type) {
    case 'UPDATE_COLOR':
      return action.color;
    default:
      return state;
  }
}

const test1 = () => {
  console.log('test1');  
}

export const Color = props => {
  const [color, dispatch] = useReducer(reducer, 'blue');

  const test2 = () => {
    console.log('2');
    
  }
  
  return (
    <ColorContext.Provider value={{color, dispatch, test1, test2}}>
      {props.children}
    </ColorContext.Provider>
  )
}







