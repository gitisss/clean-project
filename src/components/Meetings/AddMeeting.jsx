import { Button, TextField } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';
import { observer } from 'mobx-react';
import meetingStore from "../store/meetingStore";
import IsLogin from '../store/IsLogin';

const AddMeeting = (observer(({ type }) => {
    const [newMeeting, setNewMeeting] = useState({
        type: type, name: '', phone: '', email: '', dateTime: ''
    });

    const handleChange = (event) => {
        console.log(event.target)
        const { name, value } = event.target;
        setNewMeeting({ ...newMeeting, [name]: value });
    }

    //הפונקציה שולחת לסרבר את הנתונים (ניו_סרוויס) ומדפיסה אלרט
    const handleSubmit = (e) => {
        console.log(newMeeting)
        e.preventDefault();

        if (new Date(newMeeting.dateTime) > new Date()) {
            console.log('תאריך עתידי');
            meetingStore.addMeeting(newMeeting);
        }

        else alert('לא ניתן לקבוע פגישה לתאריך שחלף, אנא קבע תאריך עתידי')
    }
    const handleChangeDate = (e) => {
        setNewMeeting({ ...newMeeting, dateTime: e });
    }
    return (
        <>  <div className='addMeeting'>
            <form onSubmit={handleSubmit} className='form'>
                <TextField label="סוג הפגישה" name="type" value={newMeeting.type} aria-readonly variant="outlined" focused sx={{ width: 300, maxWidth: '100%', }} dir="rtl" />
                <br />
                <TextField label="שם" name="name" value={newMeeting.name} onChange={(e)=>handleChange(e)} variant="outlined" focused sx={{ width: 300, maxWidth: '100%', }} dir="rtl" />
                <br />
                <TextField label="טלפון" name="phone" value={newMeeting.phone} onChange={(e)=>handleChange(e)} variant="outlined" focused sx={{ width: 300, maxWidth: '100%', }} dir="rtl" />
                <br />
                <TextField label="מייל" name="email" value={newMeeting.email} onChange={(e)=>handleChange(e)} variant="outlined" focused sx={{ width: 300, maxWidth: '100%', }} dir="rtl" />
                <br />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker views={['year', 'month', 'day', 'hours', 'minutes']} label="תאריך" name="dateTime" value={newMeeting.dateTime} onChange={(e)=>handleChangeDate(e.$d)} />
                </LocalizationProvider >
                <br />
                <br />
                {IsLogin && <Button onClick={(e)=>handleSubmit(e)} type='submit' variant="contained">save</Button>}
                
            </form>
        </div>

        </>
    )
}))

export default AddMeeting
