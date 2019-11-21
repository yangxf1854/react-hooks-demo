import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UseState from './use-state'; // useState
import SearchResult from './search-result'; // 请求数据
import UseEffect from './use-effect'; // useEffect代替生命周期函数
import UseContext from './use-context'; // useContext 父组件向子组件传值

ReactDOM.render(<UseContext />, document.getElementById('root'));
