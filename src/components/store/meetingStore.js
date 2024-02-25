import axios from "axios";
import { action, makeObservable, observable, runInAction } from "mobx";

const url = "http://localhost:8787"

class MeetingStore{
    meetingList =[]; //רשימת הפגישות, כרגע ריקה

    constructor(){
        makeObservable(this, {
            meetingList: observable,
            initMeeting: action,
            addMeeting: action
        });
        this.initMeeting();
    }

    async initMeeting(){
        const responseGet = await axios.get(url + '/appointments');
        console.log(responseGet);
        this.meetingList = responseGet.data;
    }

    async addMeeting(meet){
        try{
            await axios.post(url + '/appointment', meet)
            console.log("add meeting")
            alert('הפגישה נקבעה בהצלחה!');
            runInAction(()=>{
                this.meetingList = [...this.meetingList, meet];
            })

            return 'success';
        }
        catch(e){
            alert('שגיאה בקביעת הפגישה');
            return 'failed'       
        }
    }
}

export default new MeetingStore;