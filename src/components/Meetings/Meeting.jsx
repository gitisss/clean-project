import './meeting.css'

function Meeting({ name, phone, email, dateTime, type }) {

  const getTime = (dateTime) => {
    const date = new Date(dateTime);
    const options = { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric" };
    const formattedDate = date.toLocaleString('he-IL', options);
    return formattedDate;
}
  
  const colorMeeting = (dateTime) => {
    const currentDate = new Date();
    const meetingDate = new Date(dateTime);
    const lastDayOfWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay() + 7);
    
    let color = 'green';

    if (meetingDate.getDate() === currentDate.getDate() &&
    meetingDate.getMonth() === currentDate.getMonth() &&
    meetingDate.getFullYear() === currentDate.getFullYear())
    color = 'red'
    else if (meetingDate > currentDate && meetingDate <= lastDayOfWeek)
    
    color = 'orange'
    return color
  }
  
  return (
    <>
      <div className='meeting' id={colorMeeting(dateTime)}>
        <h4>סוג הפגישה: {type}</h4>
        <h5>שם הלקוח: {name}</h5>
        <h6>טלפון: {phone}</h6>
        <h6>{email} :מייל</h6>
          <h6>תאריך ושעת הפגישה: {getTime(dateTime)}</h6>
      </div>
    </>
  )
}

export default Meeting
