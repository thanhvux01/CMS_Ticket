import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Header from '../Header';
import Searchbar from '../Searchbar';
import { Button } from '@mui/material';
import { PackageTable } from '../Table';
import { packageTicket } from '../../type/package';

let cx = classNames.bind(styles);


type IPackageContent =  {
       packages:packageTicket[],
       handlePopup: () => void,
       handleIndex: (i:number) => void,
       handleUpdatePopup: () => void
}

const PackageContent = ({packages,handlePopup,handleIndex,handleUpdatePopup}:IPackageContent) => {
 

  return (
    <div className={cx('container')}>
      <Header/>
      <div className={cx('content-wrapper')}>
        <h2>Danh sách vé</h2>
        <div className={cx('sort-section')}>
            <Searchbar className={cx('search')} placeholder='Tìm bằng số vé'/>
             <div className={cx('right')}>
                <Button sx={{borderColor:'#FF993C',color:'#FF993C'}} variant='outlined' >Xuất file (.csv)</Button>
                <Button sx={{borderColor:'#FF993C',color:'#FF993C'}}  variant='outlined' onClick={()=>{
                  handlePopup()
                }} >Thêm gói vé</Button>
             </div>
        </div>
        <div className={cx('table-section')}>
         <PackageTable packages={packages} handleIndex={handleIndex} handleUpdatePopup={handleUpdatePopup}/>
        </div>
      </div>
    </div>
  )
}

export default PackageContent