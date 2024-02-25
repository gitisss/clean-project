import { observer } from 'mobx-react';
import { useState } from 'react';
import servicesStore from '../store/servicesStore';
import AddService from './AddService';
import IsLogin from '../store/IsLogin';
import Service from './Service'
import './service.css'


const ServicesList = (observer(() => {
    const [addMeeting, setAddMeeting] = useState(null)

    console.log(servicesStore.serviceList );
    return (
        <>
          <div className="services-container">
            {servicesStore.serviceList.length> 0 && servicesStore.serviceList.map((service, index) => {
                return <Service key={index} {...service}  addMeeting={addMeeting} setAddMeeting={setAddMeeting}/>//כששולחים משהו עם ... המשמעות היא שהאובייקט נשלח בצורה מפורקת והפונ' מפרקת אותו לפי השם
            })}
            {IsLogin.isLogin && <AddService/>}
            </div>
        </>
    )
}))

export default ServicesList
