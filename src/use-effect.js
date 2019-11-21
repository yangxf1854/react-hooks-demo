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
import axios from 'axios';

function Index() {

  useEffect(() => {
    console.log('useEffect=> Index页面');
    // return一个回调函数实现componentWillUnmount生命周期函数,返回函数的形式进行解绑
    // 但是此时点击click事件让状态发生改变，又会执行useEffect，那下面的return方法也会再次被执行（状态发生变化，useEffect都进行了解绑）
    // 此时传人useEffect的第二个参数，是一个数组，
    // 这个数组中可以写入很多状态对应的变量，意思是当状态值发生变化时，我们才执行useEffect，但是当传空数组时，就是当组件将被销毁时才执行useEffect一次，这也就实现了componentWillUnmount的生命周期函数
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
