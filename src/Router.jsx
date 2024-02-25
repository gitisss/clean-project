import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Client from "./components/client/Client";
import Login from "./components/Admin/Login";
import ServicesList from "./components/Services/ServicesList";
import MeetingList from './components/Meetings/MeetingsList';

<h1>check</h1>
const router = createBrowserRouter([
{
    path: '',
    element: <Client/>,
    errorElement: <div><h1>Error Page</h1><h2>error 404</h2></div>
},
{
    path: '/admin',
    element: <Login/>,
    errorElement: <div><h1>Error Page</h1><h2>error 404</h2></div>,
    children: [
       {
        path: 'services',
        element: <ServicesList/>,
        errorElement: <div><h1>Error Page</h1><h2>error 404</h2></div>
       },
       {
        path: 'meeting',
        element: <MeetingList/>,
        errorElement: <div><h1>Error Page</h1><h2>error 404</h2></div>
       }

    ] 

}
])

export default router;