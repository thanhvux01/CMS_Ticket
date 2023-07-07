import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { ticket } from '../../type/ticket';
import dayjs from 'dayjs';
let cx = classNames.bind(styles);

type ITable = {
     tickets: ticket[];
}

const Table = ({tickets}:ITable) => {
  return (
    <div className={cx('table-wrapper')}>
       
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
                                 {item.used_date ? 'Đã sử dụng' : dayjs().isBefore(dayjs(item.exp_date)) ? 'Hết hạn' : 'Còn Hạn'}
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

export default Table