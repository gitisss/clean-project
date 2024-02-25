import { observer } from 'mobx-react';
import { useState } from 'react'
import { Typography, Box, Avatar } from '@mui/material';
import businessDataStore from '../store/businessDataStore';
import logo from '../../assets/image/logo.gif'
import IsLogin from '../store/IsLogin';
import { Button } from '@mui/material';
import EditBusinessData from './EditBusinessData';

const BusinessData = (observer(() => {

    const [isClick, setIsClick] = useState(false);


    return (

        <div>
            <img src={logo} alt="logo" />
            <div>{businessDataStore.besnesData.name}</div>
            <div>{businessDataStore.besnesData.address}</div>
            <div>{businessDataStore.besnesData.phon}</div>
            <div>{businessDataStore.besnesData.email}</div>
            <div>{businessDataStore.besnesData.description}</div>
            {IsLogin.isLogin && <Button onClick={()=>setIsClick(true)} style={{ padding: '5px 10px', backgroundColor: '#007bff', color: 'white', borderRadius: 5, cursor: 'pointer' }}>לעריכת פרטי העסק</Button>}
            {isClick && <EditBusinessData setIsClick={setIsClick}></EditBusinessData>}
            
        </div>
    )
}))

export default BusinessData;