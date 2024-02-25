import { observer } from "mobx-react";
import { Link, Outlet } from "react-router-dom";
import BusinessData from "../BusinessData/BusinessData";

const AdminHome = (observer(() => {

  return (
    <>
      <BusinessData className="business-data" /> 
      <Link className="link" to="services" style={{
                display: 'inline-block',
                backgroundColor: '#007bff',
                color: 'white',
                padding: '10px 20px',
                borderRadius: 5,
                cursor: 'pointer',
                }}>שירותי העסק</Link>
        <br/>
      <Link className="link" to="meeting" style={{
                display: 'inline-block',
                backgroundColor: '#007bff',
                color: 'white',
                padding: '10px 20px',
                borderRadius: 5,
                cursor: 'pointer',}}>רשימת פגישות שנקבעו</Link> 
      <Outlet />


    </>
  )
}))




export default AdminHome