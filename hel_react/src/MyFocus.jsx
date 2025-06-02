import { useState, useRef } from 'react';
import './App.css';

function MyFocus() {
  const inputRef = useRef(null);  // input 참조 생성

  const myclick = () => {
    inputRef.current.focus();     // input에 focus 주기
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={myclick}>focus</button>
    </>
  );
}

export default MyFocus;
