import { useState } from "react";
import './Admin.css'

function Admin()
{
    const[isLogin, setIsLogin] = useState(false);

    const handleLogin = () =>
    {
        setIsLogin(true);
    }

    return (
    <>
    {!isLogin}

    </> 

    )
}