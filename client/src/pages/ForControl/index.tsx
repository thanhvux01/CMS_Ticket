import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '../../component/Sidebar';
import ForControlContent from '../../component/Control';
import { useDispatch, useSelector } from 'react-redux';
import { getTickets } from '../../state/features/ticketSlice';
import { AppDispatch, RootState } from '../../state/store';
let cx = classNames.bind(styles);

const ForControl = () => {
    const tickets = useSelector((state: RootState) => state.ticket);
    const dispatch = useDispatch<AppDispatch>();


    useEffect(() => {
        dispatch(getTickets());
    }, [])

    return (
        <div className={cx('container')}>
            <Sidebar />
            <ForControlContent tickets={tickets} />

        </div>
    )
}

export default ForControl