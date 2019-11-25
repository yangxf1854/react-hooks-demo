import React, { useContext } from 'react';
import { ColorContext } from './color';


function ShowArea() {
  const props = useContext(ColorContext);
  console.log(props);
  
  return (
    <>
      <div style={{ color: `${props.color}` }}>1字体颜色为{props.color}</div>
      {/* <div style={{ color: `${props.color}` }} onClick={() => { props.test2() }}>2字体颜色为{props.color}</div> */}
    </>
  );
}
 
export default ShowArea;