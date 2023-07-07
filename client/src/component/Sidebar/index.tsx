import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { logo } from '../../assets/png';
import { home, invoice, setting, ticket } from '../../assets/svg';
let cx = classNames.bind(styles);

const Sidebar = () => {
  return (
    <div className={cx('container')}>
        <div className={cx('logo-wrapper')}>
          <img src={logo}/>
        </div>
        <div className={cx('menu-section')}>
             <div className={cx('btn')}>
                 <img src={home} />
                 <label>Trang chủ</label>
             </div>
             <div className={cx('btn')}>
                 <img src={ticket} />
                 <label>Quản lý vé</label>
             </div>
             <div className={cx('btn')}>
                 <img src={invoice} />
                 <label>Đối xoát vé</label>
             </div>
             <div className={cx('btn')}>
                 <img src={setting} />
                 <label>Cài đặt</label>
             </div>
        </div>
    </div>
  )
}

export default Sidebar