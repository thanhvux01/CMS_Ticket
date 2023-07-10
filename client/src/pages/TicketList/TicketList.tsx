import React, { useEffect,useState } from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '../../component/Sidebar';
import TicketListContent from '../../component/Ticket';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../state/store';
import { useDispatch } from 'react-redux';
import { getTickets, searchTickets } from '../../state/features/ticketSlice';
import SortPopup from '../../component/Popup';
let cx = classNames.bind(styles);

const TicketList = () => {
  const [popup,setPopup] = useState(false);
  const tickets = useSelector((state:RootState)=>state.ticket);
  const dispatch = useDispatch<AppDispatch>();
  const search = (id:string) => {
          dispatch(searchTickets(id));
  }
  const handlePopup = () => {
       setPopup((prev)=>!prev);
  }
  
useEffect(()=>{
  dispatch(getTickets());
},[])

  return (
    <div className={cx('container')}>
      <Sidebar/>
      <TicketListContent  tickets={tickets} handlePopup={handlePopup} searchTicket={search} />
      {popup && <SortPopup handlePopup={handlePopup}/> }
    </div>
  )
}

export default TicketList