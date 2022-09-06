import React from 'react';
import style from './Item.module.css';

const Item = (props) => {
    return (
    <div className={style.item}>
        {props.text}
    </div>
  );
}

export default Item;