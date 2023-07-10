import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { ticket } from '../../type/ticket';
import dayjs from 'dayjs';
import { packageTicket } from '../../type/package';
let cx = classNames.bind(styles);

type ITable = {
     tickets: ticket[];
}

const Table = ({tickets}:ITable) => {
  return (
    <div className={cx('table-wrapper','grid-8')}>
       
           <div className={cx('title','id')}>
                STT
           </div>
           <div className={cx('title')}>
                Booking Code
           </div>
           <div className={cx('title')}>
                Số vé
           </div>
           <div className={cx('title')}>
                Tên sự kiện
           </div>
           <div className={cx('title')}>
                Tình trạng sử dụng
           </div>
           <div className={cx('title')}>
                Ngày sử dụng
           </div>
           <div className={cx('title')}>
                Ngày xuất vé
           </div>
           <div className={cx('title')}>
                Cổng check in
           </div>
           {
               tickets.map((item,i)=>{
                    return (
                         <>
                           <div className={cx('content','id')}>
                                 {i}
                           </div>
                           <div className={cx('content')}>
                                 {item.booking_code}
                           </div>
                           <div className={cx('content')}>
                                 {item.id}
                           </div>
                           <div className={cx('content')}>
                                 {item.event_name}
                           </div>
                           <div className={cx('content')}>
                                 {item.used_date!='0000-00-00' ? 'Đã sử dụng' : dayjs().isBefore(dayjs(item.exp_date)) ? 'Còn Hạn' : 'Hết Hạn'}
                           </div>
                           <div className={cx('content')}>
                                 {item.used_date}
                           </div>
                           <div className={cx('content')}>
                                 {item.used_date}
                           </div>
                           <div className={cx('content')}>
                                 {item.checkin}
                           </div>
                         </>
                    )
               })
           }
       
    </div>
  )
}

type ForControlContent = {
     tickets:ticket[],
}

export const ForControlTable = ({tickets}:ForControlContent) => {
     return (
          <div className={cx('table-wrapper','grid-6')}>
       
           <div className={cx('title','id')}>
                STT
           </div>
           <div className={cx('title')}>
               Số vé
           </div>
           <div className={cx('title')}>
               Tên sự kiện
           </div>
           <div className={cx('title')}>
                Ngày sử dụng
           </div>
           <div className={cx('title')}>
                Tên loại vé 
           </div>
           <div className={cx('title')}>
             Cổng check-in
           </div>
           {
               tickets.map((item,i)=>{
                    return (
                         <>
                           <div className={cx('content','id')}>
                                 {i}
                           </div>
                           <div className={cx('content')}>
                                 {item.id}
                           </div>
                           <div className={cx('content')}>
                                 {item.event_name}
                           </div>
                           <div className={cx('content')}>
                                 {item.used_date}
                           </div>
                           <div className={cx('content')}>
                                {item.type}
                           </div>
                           <div className={cx('content')}>
                                {item.checkin}
                           </div>
                       
                         </>
                    )
               })
           }
        
       
    </div>
     )
}

type IPackageContent = {
     packages:packageTicket[],
     handleIndex: (i:number) => void,
     handleUpdatePopup : () => void
}

export const PackageTable = ({packages,handleIndex,handleUpdatePopup}:IPackageContent) => {
     return (
          <div className={cx('table-wrapper','grid-9')}>
       
           <div className={cx('title','id')}>
                STT
           </div>
           <div className={cx('title')}>
               Mã gói
           </div>
           <div className={cx('title')}>
               Tên gói vé
           </div>
           <div className={cx('title')}>
                Ngày áp dụng
           </div>
           <div className={cx('title')}>
                Ngày hết hạn
           </div>
           <div className={cx('title')}>
              Giá vé (VND/Vé)
           </div>
           <div className={cx('title')}>
              Giá Combo (VND/Combo)
           </div>
           <div className={cx('title')}>
              Tình trạng
           </div>
           <div className={cx('title')}>
            
           </div>
           {
               packages.map((item,i)=>{
                    return (
                         <>
                           <div className={cx('content','id')}>
                                 {i}
                           </div>
                           <div className={cx('content')}>
                                 {item.id}
                           </div>
                           <div className={cx('content')}>
                                 {item.name}
                           </div>
                           <div className={cx('content')}>
                                 {item.applied_at}
                           </div>
                           <div className={cx('content')}>
                                {item.expired_at}
                           </div>
                           <div className={cx('content')}>
                                {item.single_price}
                           </div>
                           <div className={cx('content')}>
                                {item.combo_price + '/' + item.combo_number}
                           </div>
                           <div className={cx('content')}>
                                {item.status}
                           </div>
                           <div className={cx('content')}>
                                <span onClick={()=>{
                                    handleIndex(i);
                                    handleUpdatePopup();

                                }}>Cập nhập</span>
                           </div>
                       
                         </>
                    )
               })
           }
        
       
    </div>
     )
}

export default Table