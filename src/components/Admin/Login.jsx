import { useState } from 'react'
import AdminHome from './AdminHome';
import { login } from '../store/loginFunc';
import IsLogin from '../store/IsLogin';
import './Admin.css'


function Login() {

    const [user, setUser] =  useState({
        name:"",password:""
    });
    const [status, setStatus] = useState(false);

    function handleChange(e)
    {
        const {id,value}=e.target;
        setUser({...user,[id]:value})
    }

    async function handleClick()
    {
        let b=await login(user);
        console.log(b);
        setStatus(b);
        setUser({name:"", password:""});
    }
        
    return (
      <>
       {!IsLogin.isLogin ? 
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <input value={user.name} id='name' onChange={handleChange} placeholder="Username" style={{ marginBottom: 10, padding: 15, border: '1px solid #ccc', borderRadius: 5}}></input>
            <input value={user.password} id='password' onChange={handleChange} placeholder="Password" style={{ marginBottom: 10, padding: 15, border: '1px solid #ccc', borderRadius: 5}}></input>
            <button onClick={handleClick} style={{ padding: '8px 12px', backgroundColor: '#007bff', color: 'white', borderRadius: 5, cursor: 'pointer'}}>login</button>
        </div>

        : <AdminHome></AdminHome>}

      </>
    )
  }
  
  export default Login
