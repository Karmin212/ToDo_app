import React from 'react';
import style from './ToDo.module.css';

const ToDo = () => {
    return (
    <div className={style.ToDo}>
       <div className = {style.left}>
        <div className = {style.title}>Мои задачи</div>
        <div className ={style.notes}>
            <div className ={style.item}>1</div>
            <div className ={style.item}>2</div>
            <div className ={style.item}>3</div>
            <div className ={style.item}>4</div>
        </div>
       </div>
       <div className = {style.right}>
       </div>
    </div>
  );
}

export default ToDo;