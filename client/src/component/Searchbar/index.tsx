import React, { useState } from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { search } from '../../assets/svg';
let cx = classNames.bind(styles);


type ISearchbar = {
     className?:string,
     placeholder?:string,
     submit?: (id:string) => void,

}

const Searchbar = ({className,placeholder,submit}:ISearchbar) => {
  const [text,setText] = useState('');
  return (
    <div className={cx('wrapper',className)} >
      <input placeholder={placeholder} className={cx('input')} onChange={(e)=>{
         setText(e.target.value);
      }}></input>
      <img src={search}  onClick={(e)=>{if(submit)
      submit(text)
      }}/>
    </div>
  )
}

export default Searchbar