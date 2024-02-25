import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
// import businessDataStore from "../Services/store/businessDataStore"
import { observer } from "mobx-react"
import { useState } from 'react'
import businessDataStore from "../store/businessDataStore"


const EditBusinessData = (observer(({setIsClick}) => {

    const businessData = businessDataStore.besnesData;
    console.log("EditBusinessData", businessData)
    const [business, setBusiness] = useState(businessData);

    const handleChange = (event) => {
        const { name, value } = event.target; //טרגט-מקבל את שם האירוע, על איזה אינפוט לחצתי עכשיו,
        setBusiness({ ...business, [name]: value });
    }

    //הפונקציה שולחת לסרבר את הנתונים (ביזנס) ומדפיסה אלרט
    const handleSubmit = (e) => {
        e.preventDefault();//פונק שאומרת לא לעבור לדף אחר אלא להשאר בדף זה
        
        businessDataStore.setBuisnessData(business)
        handleClose();

    }

    const handleClose = () => {
        setIsClick(false)
    }

    return (
        <React.Fragment>
             <Dialog onClose={handleClose} open={true} >
                <DialogTitle >עריכת פרטי העסק</DialogTitle>
                <DialogActions>
                    <IconButton onClick={handleClose}><CloseIcon />
                    </IconButton>
                </DialogActions>
                <DialogContent>
                    <TextField label="שם העסק" value={business.name} name="name" onChange={handleChange} color="primary" focused sx={{ width: 300, maxWidth: '100%', }} dir="rtl" />
                    <br />
                    <TextField label="כתובת" name="address" value={business.address} onChange={handleChange} color="primary" focused sx={{ width: 300, maxWidth: '100%', }} dir="rtl" />
                    <br />
                    <TextField label="טלפון" name="phon" value={business.phon} onChange={handleChange} color="primary" focused sx={{ width: 300, maxWidth: '100%', }} dir="rtl" />
                    <br />
                    <TextField label="מייל" name="email" value={business.email} onChange={handleChange} color="primary" focused sx={{ width: 300, maxWidth: '100%', }} dir="rtl" />
                    <br />
                    <TextField label="על העסק" name="description" value={business.description} onChange={handleChange} color="primary" focused sx={{ width: 300, maxWidth: '100%', }} dir="rtl" />
                    <br />
                    <DialogActions><Button type="submit" onClick={handleSubmit}>שמור</Button></DialogActions>

            </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}
))

export default EditBusinessData