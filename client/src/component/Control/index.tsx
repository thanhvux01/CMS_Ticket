import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Header from '../Header';
import Searchbar from '../Searchbar';
import {ForControlTable as Table} from '../Table';
import { ticket } from '../../type/ticket';
import { Button, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { controlTicket } from '../../state/features/ticketSlice';
import { AppDispatch, RootState } from '../../state/store';
import { useSelector } from 'react-redux';
import { update } from '../../state/features/controlSlice';
let cx = classNames.bind(styles);



type IForControlContent = {
     tickets:ticket[],

}

const ForControlContent = ({tickets}:IForControlContent) => {
   const dispatch = useDispatch<AppDispatch>();
   const control = useSelector((state:RootState)=>state.control);
  
  return (
    <div className={cx('container')}>
      <Header/>
      <div className={cx('content-wrapper')}>
      <div className={cx('table-wrapper')}>
        <h2>Danh sách vé</h2>
        <div className={cx('search-row')}>
            <Searchbar className={cx('search')} placeholder='Tìm bằng số vé'/>
             <div className={cx('right')}>
              
             </div>
        </div>
        <div className={cx('table-section')}>
           <Table tickets={tickets}/>
        </div>
      </div>
      <div className={cx('sort-wrapper')}>
        <label>Lọc vé</label>
        <div className={cx('status-radio')}>
        <RadioGroup
                    
                    name="status-radio"
                    defaultValue={control.status}
                    onChange={(e) => {
                        dispatch(update({ ...control, 'status': e.target.value }))
                    }}
                >    
                   <div className={cx('row')}>
                    <label>Tình trạng đối xoát</label>
                   <FormControlLabel value="All"  control={<Radio />}  label="Tất cả"  />
                   </div>
                   <div className={cx('row')}>
                   <label style={{visibility:'hidden'}}>Tình trạng đối xoát</label>
                    <FormControlLabel value="Check" control={<Radio />} label="Đã Đối xoát"  />  
                    </div>  
                   <div className={cx('row')}>
                   <label style={{visibility:'hidden'}}>Tình trạng đối xoát</label>
                    <FormControlLabel value="UnCheck" control={<Radio />} label="Chưa Đối xoát"  />  
                    </div>   
                    
                 
                </RadioGroup>
        </div>
        <div className={cx('type')}>
         <label>Loại vé</label>
         <span>Vé cổng</span>
        </div>
        <div className={cx('date-section')}>                
                    <label>Từ ngày</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            slotProps={{ textField: { style:{width:'200px'} } }} defaultValue={dayjs()}     
                            onChange={(newValue) => {
                                dispatch(update({ ...control, 'createdAt': dayjs(newValue).format('YYYY-MM-DD') }))
                            }}
                        />
                    </LocalizationProvider>
                    <label>Đến ngày</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            slotProps={{ textField: { style:{width:'200px'} } }} defaultValue={dayjs()}
                            onChange={(newValue) => {
                                dispatch(update({ ...control, 'expiredAt': dayjs(newValue).format('YYYY-MM-DD') }))
                            }}
                        />
                    </LocalizationProvider>
                   
            </div>
            <div className={cx('btn-section')}>
                <Button onClick={() => {
                   dispatch(controlTicket(control))
                }} sx={{ borderColor: '#FF993C', color: '#FF993C', height: '48px', width: '160px' }} variant='outlined'>Lọc</Button>
            </div>
      </div>

      </div>
  
    </div>
  )
}

export default ForControlContent