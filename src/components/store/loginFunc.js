import axios from "axios";
import IsLogin from "./IsLogin";

 
export async function login({name, password}) {

    try {
        const response = await axios.post("http://localhost:8787/login", {name,password})
        alert("הזדהותך נקלטה בהצלחה, הנך מועבר לדף מנהל")
        console.log("d" + response.status)

        if(response.status==200){
            IsLogin.isLogin=true;
            return true;
        }
    
    }
    catch (e) {

        alert("האימות נכשל :(")
        return false
    }


}