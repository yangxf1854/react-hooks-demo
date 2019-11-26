import React from 'react';
import ReactDOM from 'react-dom';
import UseState from './use-state'; // useState
import SearchResult from './search-result'; // 请求数据
import UseEffect from './use-effect'; // useEffect代替生命周期函数
import UseContext from './use-context'; // useContext 父组件向子组件传值
import ReducerDemo from './use-reducer'; // useReducer
import TextRedux from './test-redux/t-redux'; // useReducer模拟redux状态共享
import UseMemo from './use-memo'; // useMemo一种性能优化的手段
import Useref from './use-ref'; // useRef获取dom元素
import UseWinSize from './custom'; // 一个自定义的hook函数，用于获取浏览器窗口尺寸

ReactDOM.render(<UseState />, document.getElementById('root'));
