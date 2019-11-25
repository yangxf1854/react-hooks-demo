import React, { useRef, useState, useEffect } from 'react'

function Useref() {
  //useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。返回的 ref 对象在组件的整个生命周期内保持不变
  const inputElement = useRef(null);
  const textRef = useRef();

  const onButtonClick = () => {
    // useRef获取dom
    inputElement.current.value = 'guoba';
    console.log(inputElement);
  }

  const [text, setText] = useState('new-guo-ba');

  useEffect(() => {
    // useRef实现保存变量
    textRef.current = text;
    console.log(textRef.current);
  });

  return (
    <div>
      <input ref={inputElement} type="text" />
      <button onClick={onButtonClick}>在input上显示文字</button>
      <hr/>
      <input type='text' value={text} ref={textRef} onChange={(e) => {setText(e.target.value)}} />
    </div>
  );
}

export default Useref;