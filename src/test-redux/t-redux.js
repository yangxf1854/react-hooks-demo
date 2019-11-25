import React, { Component } from 'react';
import Buttons from './buttons';
import ShowArea from './show-area';
import { Color } from './color';

function TextRedux() {
  return (
    <Color>
      <Buttons />
      <ShowArea />
    </Color>
  )
}

export default TextRedux;