import React from 'react';
import Item from './Item/Item';
import style from './Notes.module.css';

const Notes = () => {
  return (
    <div className={style.notes}>
      <Item text='glugoigiylygil' />
      <Item text={`1
        2
        3`} />
      <Item text={`1
        2
        3`} />
      <Item text={`1
        2
        3`} />
      <Item text={`1
        2
        3`} />
      <Item text={`1
        2
        3`} />
      <Item text={`1
        2
        3`} />
      <Item text={`1
        2
        3`} />
      <Item text={`1
        2
        3`} />
      <Item text='lol' />
    </div>
  );
}

export default Notes;