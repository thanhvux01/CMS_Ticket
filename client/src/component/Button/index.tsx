import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

type IButton = {
     icon:string,
     label:string,
}

const Button = ({}:IButton) => {
  return (
    <div className={cx('btn-wrapper')}>Button</div>
  )
}

export default Button