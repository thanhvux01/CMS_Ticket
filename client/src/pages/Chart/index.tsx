import React, { useEffect,useState } from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '../../component/Sidebar';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../state/store';
import { useDispatch } from 'react-redux';
import { getChart } from '../../state/features/chartSlice';
import ChartContent from '../../component/Chart';
let cx = classNames.bind(styles);

const Chart = () => {
  
  const chart= useSelector((state:RootState)=>state.chart);
  const dispatch = useDispatch<AppDispatch>();

  
useEffect(()=>{
  dispatch(getChart('2023-05'));
},[])

  return (
    <div className={cx('container')}>
      <Sidebar/>
      <ChartContent/>
    </div>
  )
}

export default Chart