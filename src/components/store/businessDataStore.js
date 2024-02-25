import axios from "axios";
import { action, makeObservable, observable, runInAction } from "mobx";

class businessDataStore
{
    besnesData = {};

    constructor(){
        makeObservable(this, {
            besnesData: observable,
            setBuisnessData:action,//כשזה פונקציה מייצאים בצורה של אקשן, כשמשתנה- בצורה של אובזרווייבל
            //תאפשר להאזין אלייך, כל פעם שתשנה כל מי שמאזין לך ישתנה
            initData: action
        });
        this.initData();

    }

    async initData(){
        const response = await axios.get("http://localhost:8787/businessData")
        console.log("response", response)
        if (response.status===200)
        {
            runInAction(()=>{
                this.besnesData=response.data;//הביזנס דאטא  מאתחלת את 
                console.log("this.besnesData", this.besnesData)
            })
        
        }
    }

     async setBuisnessData (data) {
        const response = await axios.post("http://localhost:8787/businessData", data);
        console.log(response)
        if (response.status===200)
        {   
            runInAction(()=>{
                this.besnesData=data;
            })
            alert('הנתונים התעדכנו');
        }
        else alert('שגיאה');
                
    } 
}

export default new businessDataStore();//סינגלטון- מייצאים מופע אחד בודד מקלאס