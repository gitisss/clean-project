import { observer } from 'mobx-react';
import meetingStore from "../store/meetingStore";
import Meeting from "./Meeting";

const MeetingList = (observer(() => {

    console.log(meetingStore.meetingList);
    return (
        <>
            {meetingStore.meetingList.length> 0 && meetingStore.meetingList.map((meeting, index) => {
                return <Meeting key={index} {...meeting} />//כששולחים משהו עם ... המשמעות היא שהאובייקט נשלח בצורה מפורקת והפונ' מפרקת אותו לפי השם
            })}
        </>
            )
}))

export default MeetingList
