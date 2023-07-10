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

type ITicketListContent = {
    tickets: ticket[],
    handlePopup?: () => void,
    searchTicket:(id:string) => void,
}

const TicketListContent = ({tickets,handlePopup,searchTicket}:ITicketListContent) => {
  

  return (
    <div className={cx('container')}>
      <Header/>
      <div className={cx('content-wrapper')}>
        <h2>Danh sách vé</h2>
        <div className={cx('sort-section')}>
            <Searchbar className={cx('search')} submit={searchTicket} placeholder='Tìm bằng số vé' />
             <div className={cx('right')}>
                <Button sx={{borderColor:'#FF993C',color:'#FF993C'}} variant='outlined' >Xuất file (.csv)</Button>
                <Button  onClick={handlePopup}  sx={{borderColor:'#FF993C',color:'#FF993C'}}  variant='outlined' startIcon={<SortIcon/> }>Lọc vé</Button>
             </div>
        </div>
        <div className={cx('table-section')}>
        <Table tickets={tickets}/>
        </div>
      </div>
    </div>
  )
}

export default TicketListContent