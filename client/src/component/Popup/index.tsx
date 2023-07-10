import React, { useState } from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Autocomplete, Button, Checkbox, FormControlLabel, FormGroup, MenuItem, Paper, Radio, RadioGroup, Select, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../state/store';
import dayjs, { Dayjs } from 'dayjs';
import { useDispatch } from 'react-redux';
import { update } from '../../state/features/sortSlice';
import { sortTickets } from '../../state/features/ticketSlice';
import { TimePicker } from '@mui/x-date-pickers';
import { newpkg } from '../../type/newpackage';
import { createNewPackage, updatePackage } from '../../state/features/packageSlice';
import { packageTicket } from '../../type/package';
let cx = classNames.bind(styles);

type SortPopup = {
    handlePopup: () => void;
}

const SortPopup = ({ handlePopup }: SortPopup) => {
    const sortState = useSelector((state: RootState) => state.sort);
    const dispatch = useDispatch<AppDispatch>();
    return (
        <Paper className={cx('popup-wrapper')}>
            <label>Lọc vé</label>
            <div className={cx('date-section')}>
                <div className={cx('date-picker')}>
                    <label>Từ ngày</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            slotProps={{ textField: { size: 'small' } }} defaultValue={dayjs()}
                            onChange={(newValue) => {
                                dispatch(update({ ...sortState, 'createdAt': dayjs(newValue).format('YYYY-MM-DD') }))
                            }}
                        />
                    </LocalizationProvider>
                </div>
                <div className={cx('date-picker')}>
                    <label>Đến ngày</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            slotProps={{ textField: { size: 'small' } }} defaultValue={dayjs()}
                            onChange={(newValue) => {
                                dispatch(update({ ...sortState, 'expiredAt': dayjs(newValue).format('YYYY-MM-DD') }))
                            }}
                        />
                    </LocalizationProvider>
                </div>
            </div>
            <div className={cx('status')}>
                <label>Tình trạng sử dụng</label>
                <RadioGroup
                    row
                    name="status-radio"
                    defaultValue={sortState.status}
                    onChange={(e) => {
                        dispatch(update({ ...sortState, 'status': e.target.value }))
                    }}
                >
                    <FormControlLabel value="All" control={<Radio />} label="Tất cả" />
                    <FormControlLabel value="Used" control={<Radio />} label="Đã sử dụng" />
                    <FormControlLabel value="Unused" control={<Radio />} label="Chưa sử dụng" />
                    <FormControlLabel value="Expired" control={<Radio />} label="Other" />
                </RadioGroup>
            </div>
            <div className={cx('checkin')}>
                <label>Cổng checkin</label>
                <FormGroup

                    row
                    sx={{

                        columnGap: '60px'

                    }}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        dispatch(update({ ...sortState, 'checkin': e.target.value }))
                    }}
                >
                    <FormControlLabel control={<Checkbox defaultChecked value='All' />} label="Tất cả" />
                    <FormControlLabel control={<Checkbox value='Cổng 1' />} label="Cổng 1" />
                    <FormControlLabel control={<Checkbox value='Cổng 2' />} label="Cổng 2" />
                    <FormControlLabel control={<Checkbox value='Cổng 3' />} label="Cổng 3" />
                    <FormControlLabel control={<Checkbox value='Cổng 4' />} label="Cổng 4" />
                    <FormControlLabel control={<Checkbox value='Cổng 5' />} label="Cổng 5" />
                </FormGroup>
            </div>
            <div className={cx('btn-section')}>
                <Button onClick={() => {
                    dispatch(sortTickets({ ...sortState }))
                    handlePopup();
                }} sx={{ borderColor: '#FF993C', color: '#FF993C', height: '48px', width: '160px' }} variant='outlined'>Lọc</Button>
            </div>
        </Paper>
    )
}

type PackagePopup = {
     handlePopup: () => void,

}


export const PackagePopup = ({handlePopup}:PackagePopup) => {

    const [packageTicket, setPackageTicket] = useState<newpkg>({
        name: '',
        applied_at: '',
        expired_at: '',
        single_price: 0,
        combo_number: 0,
        combo_price: 0,
        event_name: '',
        status: 'Active'
    });
    const [hour, setHour] = useState({ startHours: dayjs(), endHours: dayjs() })
    const dispatch = useDispatch<AppDispatch>();

    return (
        <Paper className={cx('popup-wrapper')} sx={{ maxWidth: '758px', minHeight: '628px' }}>
            <label>Thêm gói vé</label>
            <div className={cx('input-section')}>
                <div className={cx('col')}>
                    <label>Tên gói vé</label>
                    <input className={cx('input')}
                        onChange={(e) => {
                            setPackageTicket((prev) => {
                                prev.name = e.target.value;
                                return { ...prev }
                            })
                        }}

                    ></input>
                </div>
            </div>
            <div className={cx('date-section')}>
                <div className={cx('date-picker')}>
                    <label>Từ ngày</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            slotProps={{ textField: { style: { width: '118px' } } }} defaultValue={dayjs()}
                            onChange={(newValue) => {
                                setPackageTicket((prev) => {
                                    prev.applied_at = dayjs(newValue).format('YYYY-MM-DD');
                                    return { ...prev }
                                })
                            }}
                        />

                    </LocalizationProvider>
                </div>
                <div className={cx('date-picker')}>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <label style={{ visibility: 'hidden' }}>Place</label>
                        {packageTicket.applied_at.length == 0 ? <TimePicker disabled slotProps={{ textField: { style: { width: '118px' } } }} defaultValue={dayjs()} /> :
                            <TimePicker slotProps={{ textField: { style: { width: '118px' } } }} value={hour.startHours}
                                onChange={(newValue) => {
                                    setHour((prev) => {
                                        if (newValue)
                                            prev.startHours = newValue
                                        return { ...prev }
                                    })
                                }}
                            />}

                    </LocalizationProvider>
                </div>
                <div className={cx('date-picker')}>
                    <label>Đến ngày</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DatePicker
                            slotProps={{ textField: { style: { width: '118px' } } }} defaultValue={dayjs()}
                            onChange={(newValue) => {
                                setPackageTicket((prev) => {
                                    prev.expired_at = dayjs(newValue).format('YYYY-MM-DD');
                                    return { ...prev }
                                })
                            }}
                        />

                    </LocalizationProvider>
                </div>
                <div className={cx('date-picker')}>
                    <label style={{ visibility: 'hidden' }}>Place</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        {packageTicket.applied_at.length == 0 ? <TimePicker disabled slotProps={{ textField: { style: { width: '118px' } } }} defaultValue={dayjs()} /> :
                            <TimePicker slotProps={{ textField: { style: { width: '118px' } } }} value={hour.startHours}
                                onChange={(newValue) => {
                                    setHour((prev) => {
                                        if (newValue)
                                            prev.endHours = newValue
                                        return { ...prev }
                                    })
                                }}
                            />}

                    </LocalizationProvider>
                </div>
            </div>
            <div className={cx('price-section')}>
                <label>Gía vé áp dụng</label>
                <div className={cx('price')}>
                    <span>Vé lẻ(Vnd/vé) với giá</span><input type='number' className={cx('input')} onChange={(e) => {
                        setPackageTicket((prev) => {
                            prev.single_price = parseInt(e.target.value);
                            return { ...prev }
                        })
                    }}></input> /Vé
                </div>
                <div className={cx('price')}>
                    <span>Combo vé với giá</span><input  type='number' className={cx('input')}  onChange={(e)=>{
                            setPackageTicket((prev)=>{
                                prev.combo_price = parseInt(e.target.value);
                                return {...prev}
                            })
                       }}></input> /<input  type='number' className={cx('input')} style={{ width: '48px' }}   onChange={(e)=>{
                        setPackageTicket((prev)=>{
                            prev.combo_number = parseInt(e.target.value);
                            return {...prev}
                        })
                   }}></input> Vé
                </div>
            </div>
            <div className={cx('status-section')}>
                <Select
                    defaultValue={'Active'}
                    onChange={(e)=>{
                       setPackageTicket((prev)=>{
                         if(e.target.value == 'Active' || e.target.value == 'Inactive')
                         prev.status = e.target.value;
                         return {...prev}
                       })
                    }}
                >
                    <MenuItem value={'Active'}>Đang áp dụng</MenuItem>
                    <MenuItem value={'Inactive'}>Ngừng hoạt động</MenuItem>
                </Select>
            </div>
            <div className={cx('btn-section')}>
                <Button className={cx('btn')} sx={{ color: '#FF993C', borderColor: '#FF993C', width: '160px', height: '48px' }} variant='outlined' onClick={()=>{
                     handlePopup();
                }}>Huỷ</Button>
                <Button className={cx('btn')} sx={{ backgroundColor: '#FF993C', width: '160px', height: '48px' }} variant='contained'
                 onClick={()=>{
                     handlePopup();
                     dispatch(createNewPackage(packageTicket));
                 }}
                >Lưu</Button>
            </div>
        </Paper>
    )
}


type UpdatePackagePopup = {

    data:packageTicket,
    handlePopup : () => void
}

export const UpdatePackagePopup = ({handlePopup,data}:UpdatePackagePopup) => {
    const temp = {...data}
    const [packageTicket, setPackageTicket] = useState<newpkg>(temp as newpkg
    );
    const [hour, setHour] = useState({ startHours: dayjs(), endHours: dayjs() })
    const dispatch = useDispatch<AppDispatch>();

    return (
        <Paper className={cx('popup-wrapper')} sx={{ maxWidth: '758px', minHeight: '628px' }}>
            <label>Chỉnh sửa gói vé</label>
            <div className={cx('input-section')}>
                <div className={cx('col')}>
                    <label>Tên gói vé</label>
                    <input className={cx('input')}
                       defaultValue={data.name}
                        onChange={(e) => {
                            setPackageTicket((prev) => {
                                prev.name = e.target.value;
                                return { ...prev }
                            })
                        }}

                    ></input>
                </div>
            </div>
            <div className={cx('date-section')}>
                <div className={cx('date-picker')}>
                    <label>Từ ngày</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            slotProps={{ textField: { style: { width: '118px' } } }} defaultValue={dayjs(data.applied_at)}
                            onChange={(newValue) => {
                                setPackageTicket((prev) => {
                                    prev.applied_at = dayjs(newValue).format('YYYY-MM-DD');
                                    return { ...prev }
                                })
                            }}
                        />

                    </LocalizationProvider>
                </div>
                <div className={cx('date-picker')}>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <label style={{ visibility: 'hidden' }}>Place</label>
                        {packageTicket.applied_at.length == 0 ? <TimePicker disabled slotProps={{ textField: { style: { width: '118px' } } }} defaultValue={dayjs()} /> :
                            <TimePicker slotProps={{ textField: { style: { width: '118px' } } }} value={dayjs(data.applied_at)}
                                onChange={(newValue) => {
                                    setHour((prev) => {
                                        if (newValue)
                                            prev.startHours = newValue
                                        return { ...prev }
                                    })
                                }}
                            />}

                    </LocalizationProvider>
                </div>
                <div className={cx('date-picker')}>
                    <label>Đến ngày</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DatePicker
                            slotProps={{ textField: { style: { width: '118px' } } }} defaultValue={dayjs(data.expired_at)}
                            onChange={(newValue) => {
                                setPackageTicket((prev) => {
                                    prev.expired_at = dayjs(newValue).format('YYYY-MM-DD');
                                    return { ...prev }
                                })
                            }}
                        />

                    </LocalizationProvider>
                </div>
                <div className={cx('date-picker')}>
                    <label style={{ visibility: 'hidden' }}>Place</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        {packageTicket.applied_at.length == 0 ? <TimePicker disabled slotProps={{ textField: { style: { width: '118px' } } }} defaultValue={dayjs()} /> :
                            <TimePicker slotProps={{ textField: { style: { width: '118px' } } }} value={dayjs(data.expired_at)}
                                onChange={(newValue) => {
                                    setHour((prev) => {
                                        if (newValue)
                                            prev.endHours = newValue
                                        return { ...prev }
                                    })
                                }}
                            />}

                    </LocalizationProvider>
                </div>
            </div>
            <div className={cx('price-section')}>
                <label>Gía vé áp dụng</label>
                <div className={cx('price')}>
                    <span>Vé lẻ(Vnd/vé) với giá</span><input type='number' defaultValue={data.single_price} className={cx('input')} onChange={(e) => {
                        setPackageTicket((prev) => {
                            prev.single_price = parseInt(e.target.value);
                            return { ...prev }
                        })
                    }}></input> /Vé
                </div>
                <div className={cx('price')}>
                    <span>Combo vé với giá</span><input defaultValue={data.combo_price}  type='number' className={cx('input')}  onChange={(e)=>{
                            setPackageTicket((prev)=>{
                                prev.combo_price = parseInt(e.target.value);
                                return {...prev}
                            })
                       }}></input> /<input  defaultValue={data.combo_number} type='number' className={cx('input')} style={{ width: '48px' }}   onChange={(e)=>{
                        setPackageTicket((prev)=>{
                            prev.combo_number = parseInt(e.target.value);
                            return {...prev}
                        })
                   }}></input> Vé
                </div>
            </div>
            <div className={cx('status-section')}>
                <Select
                    defaultValue={data.status}
                    onChange={(e)=>{
                       setPackageTicket((prev)=>{
                         if(e.target.value == 'Active' || e.target.value == 'Inactive')
                         prev.status = e.target.value;
                         return {...prev}
                       })
                    }}
                >
                    <MenuItem value={'Active'}>Đang áp dụng</MenuItem>
                    <MenuItem value={'Inactive'}>Ngừng hoạt động</MenuItem>
                </Select>
            </div>
            <div className={cx('btn-section')}>
                <Button className={cx('btn')} sx={{ color: '#FF993C', borderColor: '#FF993C', width: '160px', height: '48px' }} variant='outlined' onClick={()=>{
                     handlePopup();
                }}>Huỷ</Button>
                <Button className={cx('btn')} sx={{ backgroundColor: '#FF993C', width: '160px', height: '48px' }} variant='contained'
                 onClick={()=>{
                     handlePopup();
                     dispatch(updatePackage(packageTicket));
                 
                 }}
                >Lưu</Button>
            </div>
        </Paper>
    )
}


export default SortPopup