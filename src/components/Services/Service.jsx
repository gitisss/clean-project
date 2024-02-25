import { observer } from "mobx-react"
import IsLogin from "../store/IsLogin"
import { useState } from "react"
import AddMeeting from "../Meetings/AddMeeting"

const Service = observer(({ name, discription, price ,setAddMeeting, addMeeting, close}) => {
 
  const [Close, setClose] = useState(false)
 
  return (
    <>
      <div className="service">
        <h3>{name}</h3>
        <h4>{discription}</h4>
        <h5>מחיר: {price}</h5>
        {!IsLogin.isLogin ? addMeeting == name ? <AddMeeting type={addMeeting} /> :
          <button onClick={() => setAddMeeting(name)}>לקביעת פגישה</button> : null}

      </div>
    </>
  )
})

export default Service
