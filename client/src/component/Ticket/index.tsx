import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Header from '../Header';
import Searchbar from '../Searchbar';
import Table from '../Table';
import { ticket } from '../../type/ticket';
let cx = classNames.bind(styles);

type ITicketListContent = {
    tickets: ticket[];
}

const TicketListContent = ({tickets}:ITicketListContent) => {
 

  return (
    <div className={cx('container')}>
      <Header/>
      <div className={cx('content-wrapper')}>
        <h2>Danh sách vé</h2>
        <div className={cx('sort-section')}>
            <Searchbar className={cx('search')}/>
        </div>
        <div className={cx('table-section')}>
        <Table tickets={tickets}/>
        </div>
      </div>
    </div>
  )
}

export default TicketListContent