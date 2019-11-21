import React, { useState, useEffect } from 'react'
import axios from 'axios';

function SearchResults() {
  const [data, setData] = useState({ hits: []});
  const [query, setQuery] = useState('react');
  const [loading, setLoad] = useState(false); // 默认页面loading

  // 
  useEffect(() => {
    // 请求数据异步方法
    async function fetchData() {
      console.log('22');
      
      setLoad(true); // 改变loading为true
      const result = await axios('https://hn.algolia.com/api/v1/search?query=' + query);
      setLoad(false); // 请求完数据将loading改为 false
      setData(result.data);
    }
    // 请求数据执行
    fetchData();
    return () => { 
      console.log(loading, '解绑');
      
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  // 仅在query更新时更新。
  // 如果业务需要这边数组传进去的是一个对象，那么页面会一直执行useEffect，
  // 可以用const memoizedValue = useMemo(() => ({name: query}), [query]);传进去的数组参数变为[memoizedValue]

  return (
    <>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <p style={{ color: `${loading ? 'red': 'blue'}`}}>{loading + ''}</p>
      <ul>
        {
          data.hits.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default SearchResults;