// class 类方法
// import React, { Component } from 'react'

// class UseEffect extends Component {
//   state = {  
//     count: 0
//   }

//   componentDidMount() {
//     console.log(`componentDidMount: this is clicked ${this.state.count}`)
//   }

//   componentDidUpdate() {
//     console.log( `componentDidUpdate: this is clicked ${this.state.count}`)
//   }

//   addCount = () => {
//     this.setState({
//       count: this.state.count + 1
//     });
//   }

//   render() { 
//     return (
//       <>
//         <p> you click {this.state.count}</p>
//         <button onClick={this.addCount}>click me1</button>
//       </>
//     );
//   }
// }

// react-hooks 方法
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

// 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），
// 可以传递一个空数组（[]）作为第二个参数。
// 这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，
// 所以它永远都不需要重复执行。这并不属于特殊情况 —— 它依然遵循输入数组的工作方式。

// 如果你传入了一个空数组（[]），
// effect 内部的 props 和 state 就会一直持有其初始值。
// 尽管传入 [] 作为第二个参数有点类似于 componentDidMount 和 componentWillUnmount 的思维模式，
// 但我们有 更好的 方式 来避免过于频繁的重复调用 effect。
// 除此之外，请记得 React 会等待浏览器完成画面渲染之后才会延迟调用 useEffect，因此会使得处理额外操作很方便
function Index() {
  useEffect(() => {
    console.log('useEffect=> Index页面');
    return() => {
      console.log('离开Index页面');
    }
  }, [])
  return (
    <h2>this is index</h2>
  )
}

function List() {
  useEffect(() => {
    console.log('useEffect=> List页面');
  })

  return (
    <h2>this is list</h2>
  )
}

function UseEffect() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log(`useEffect== you click me ${count}`);

    return () => {
      console.log('数量改变'); 
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
 
  return (
    <>
      <p>you click {count} time</p>
      <button onClick={() => {setCount(count + 1)}}>click me2</button>

      <Router>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/list/">列表</Link>
          </li>
        </ul>
        <Route path='/' exact component={Index}/>
        <Route path='/list/' component={List}/>
      </Router>
    </>
  )
}
 
export default UseEffect;
