import React, { useState, useEffect, useCallback } from 'react';


// 封装的自定义hook组件一定要用use开头，这样才能区分什么是组件，什么是自定义函数
function useWinSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });

  // const onResize = () => {
  //   console.log('111');
    
  //   setSize({
  //     width: document.documentElement.clientWidth,
  //     height: document.documentElement.clientHeight
  //   });
  // }

  // useCallback目的是为了缓存方法(useMemo是为了缓存变量)
  const onResize = useCallback(()=>{
      console.log('111');
      setSize({
          width: document.documentElement.clientWidth,
          height: document.documentElement.clientHeight
      })
  }, []) 

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    }
  }, [onResize])

  // 返回值
  return size;
}

function UseWinSize() {
  const size = useWinSize();

  return (
    <div>页面Size：{size.width} * {size.height}</div>
  );
}

export default UseWinSize;