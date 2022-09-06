import React from 'react';
import style from './Left.module.css';
import Notes from './Notes/Notes';
import Title from './Title/Title';

const Left = () => {
  return (
    <div className={style.left}>
      <Title />
      <Notes />
    </div >
  );
}

export default Left;