import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { search } from '../../assets/svg';
let cx = classNames.bind(styles);


type ISearchbar = {
     className?:string,
     placeholder?:string,

}

const Searchbar = ({className,placeholder}:ISearchbar) => {
  return (
    <div className={cx('wrapper',className)} >
      <input className={cx('input')}></input>
      <img src={search} placeholder={placeholder}/>
    </div>
  )
}

export default Searchbar