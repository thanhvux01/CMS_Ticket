import React, { useEffect,useState } from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '../../component/Sidebar';
import TicketListContent from '../../component/Ticket';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../state/store';
import { useDispatch } from 'react-redux';
import { getTickets } from '../../state/features/ticketSlice';
import SortPopup from '../../component/Popup';
let cx = classNames.bind(styles);

const TicketList = () => {

  const tickets = useSelector((state:RootState)=>state.ticket);
  const dispatch = useDispatch<AppDispatch>();

useEffect(()=>{
  dispatch(getTickets());
},[])

  return (
    <div className={cx('container')}>
      <Sidebar/>
      <TicketListContent  tickets={tickets}/>
      <SortPopup/>
    </div>
  )
}

export default TicketList