import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Header from '../Header';
import Searchbar from '../Searchbar';
import Table from '../Table';
import { ticket } from '../../type/ticket';
import { Button } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
let cx = classNames.bind(styles);


const ChartContent = () => {
  

  return (
    <div className={cx('container')}>
      <Header/>
      <div className={cx('content-wrapper')}>
        <h2>Thống kê</h2>     
        <div className={cx('chart-section')}>
        </div>
      </div>
    </div>
  )
}

export default ChartContent