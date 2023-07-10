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
import SortPopup, { PackagePopup, UpdatePackagePopup } from '../../component/Popup';
import PackageContent from '../../component/Package';
import { getPackage } from '../../state/features/packageSlice';
let cx = classNames.bind(styles);

const Package = () => {
  
  const packages = useSelector((state:RootState)=>state.package);
  const dispatch = useDispatch<AppDispatch>();
  const [popup,setPopup] = useState(false);
  const [updatePopup,setUpdatePopup] = useState(false);
  const [index,setIndex] = useState(0);

  const handleIndex = (i:number) => {
      setIndex(i);
  }

  const handlePopup = () => {
     setPopup((prev)=>{
      return !prev
     })
  }
  const handleUpdatePopup = () => {
    setUpdatePopup((prev)=>{
     return !prev
    })
 }
  useEffect(()=>{
    dispatch(getPackage());
  },[])
  
  return (
    <div className={cx('container')}>
      <Sidebar/>
      <PackageContent packages={packages} handlePopup={handlePopup} handleIndex={handleIndex} handleUpdatePopup={handleUpdatePopup}/>
      { popup && <PackagePopup handlePopup={handlePopup}/> }
      { updatePopup && <UpdatePackagePopup handlePopup={handleUpdatePopup} data={packages[index]}/> }
    </div>
  )
}

export default Package