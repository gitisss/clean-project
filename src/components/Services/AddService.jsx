import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { observer } from 'mobx-react';
import servicesStore from '../store/servicesStore';

const AddService = (observer(() => {
    const [newService, setNewService] = useState({
        name:"", discription:"", price:""
    });
    
console.log(newService);

    const handleChange = (event) => {
        const { name, value } = event.target; //טרגט-מקבל את שם האירוע, על איזה אינפוט לחצתי עכשיו,
        setNewService({ ...newService, [name]: value });
    }

        const handleSubmit = (e) => {
            e.preventDefault();
            servicesStore.addService(newService);
        }

    return (
        <>
    <br/>
            <TextField name='name' label="נושא הפגישה" variant="outlined" value={newService.name} onChange={handleChange} />
            <TextField name='discription' label="אורך הפגישה" variant="outlined" value={newService.discription} onChange={handleChange} />
            <TextField name='price' label="מחיר הפגישה" variant="outlined" value={newService.price} onChange={handleChange} />        
           <br/>
           <br/>
            <Button type='submit' variant="contained" onClick={handleSubmit}>שמירה</Button>
       
        </>
    )
}))

export default AddService
