import React, { useState, useMemo } from 'react';

// 自组件
function ChildComponent({name, children}) {
  function changeXiaohong(name){
        console.log('她来了，她来了。小红向我们走来了')
        return name+',小红向我们走来了'
    }

    // const actionXiaohong = changeXiaohong(name);
    const actionXiaohong = useMemo(() => changeXiaohong(name), [name]); // “创建”函数和依赖项数组[name]作为参数传入 useMemo，它仅会在某个依赖项（name）改变时才重新计算 memoized 值也就是说在name改变时才重新执行changeXiaohong这个函数

    return (
        <>
            <div>{actionXiaohong}</div>
            <div>{children}</div>
        </>
    )
}

function UseMemo() {
    const [xiaohong , setXiaohong] = useState('小红的状态')
    const [xiaohuang , setZhiling] = useState('小黄的状态')
    return (
        <>
            <button onClick={()=>{setXiaohong(new Date().getTime())}}>小红</button>
            <button onClick={()=>{setZhiling(new Date().getTime()+',小黄向我们走来了')}}>小黄</button>
            <ChildComponent name={xiaohong}>{xiaohuang}</ChildComponent>
        </>
    )
}

export default UseMemo;