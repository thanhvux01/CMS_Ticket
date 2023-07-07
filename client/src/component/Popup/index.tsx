import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Checkbox, FormControlLabel, FormGroup, Paper, Radio, RadioGroup } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
let cx = classNames.bind(styles);

const SortPopup = () => {
    return (
        <Paper className={cx('popup-wrapper')}>
            <label>Lọc vé</label>
            <div className={cx('date-section')}>
                <div className={cx('date-picker')}>
                    <label>Từ ngày</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker slotProps={{ textField: { size: 'small' } }} />
                    </LocalizationProvider>
                </div>
                <div className={cx('date-picker')}>
                    <label>Đến ngày</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker slotProps={{ textField: { size: 'small' } }} />
                    </LocalizationProvider>
                </div>
            </div>
            <div className={cx('status')}>
                <label>Tình trạng sử dụng</label>
                <RadioGroup
                    row
                    name="status-radio"
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
                
                  columnGap:'60px'
                    
                }}
                >
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Tất cả"   />
                    <FormControlLabel control={<Checkbox  />} label="Cổng 1" />
                    <FormControlLabel control={<Checkbox  />} label="Cổng 2" />
                    <FormControlLabel control={<Checkbox  />} label="Cổng 3" />
                    <FormControlLabel control={<Checkbox  />} label="Cổng 4" />
                    <FormControlLabel control={<Checkbox  />} label="Cổng 5" />
                </FormGroup>
            </div>
        </Paper>
    )
}

export default SortPopup