import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import axios from 'axios';
import moment from 'moment';
import './index.css';

const columns = [
  {
    title: '序号',
    dataIndex: 'index',
    key: 'index',
    render: (text, record, i) => {
      return i + 1;
    }
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    key: 'created_at',
    render: (text) => {
      return moment(text).format('YYYY-MM-DD');
    }
  },
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '作者',
    dataIndex: 'author',
    key: 'author',
  },  
  {
    title: '观看数',
    dataIndex: 'points',
    key: 'points',
  },
];

let flag = true;
let timer = null;
function SearchResults() {
  const [data, setData] = useState({ hits: []});
  const [query, setQuery] = useState('react');
  const [loading, setLoad] = useState(false); // 默认页面loading

  // 
  useEffect(() => {
    // 请求数据异步方法
    async function fetchData() {
      setLoad(true); // 改变loading为true
      const result = await axios('https://hn.algolia.com/api/v1/search?query=' + query);
      setLoad(false); // 请求完数据将loading改为 false
      setData(result.data);
    }
    // 请求数据
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fetchData();
    }, 300)

    return () => { 
      console.log(loading, '解绑');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  // 仅在query更新时更新。
  // 如果业务需要这边数组传进去的是一个对象，那么页面会一直执行useEffect，
  // 可以用const memoizedValue = useMemo(() => ({name: query}), [query]);传进去的数组参数变为[memoizedValue]

  return (
    <div className="search-result">
      查询：<input value={query} onChange={e => setQuery(e.target.value)} className="search" />
      <div className="table-box">
        <Table
          dataSource={data.hits || []}
          columns={columns}
          loading={loading}
          rowKey="created_at_i"
        />
      </div>
    </div>
  )
}

export default SearchResults;