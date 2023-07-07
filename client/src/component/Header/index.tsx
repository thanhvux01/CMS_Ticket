import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Searchbar from '../Searchbar';
import { bell, mail } from '../../assets/svg';
import Avatar from '@mui/material/Avatar';
let cx = classNames.bind(styles);


const Header = () => {
  return (
    <div className={cx('container')}>
      <Searchbar/>
      <div className={cx('user-section')}>
          <img src={bell}/>
          <img src={mail}/>
           <Avatar className={cx('avatar')}>User</Avatar>
      </div>
    </div>
  )
}

export default Header