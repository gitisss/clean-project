import axios from "axios";
import { action, makeObservable, observable, runInAction } from "mobx";

const url = "http://localhost:8787"

class ServicesStore{
    serviceList =[];

    constructor(){
        makeObservable(this, {
            serviceList: observable,
            initData: action,
            addService: action
        });
        this.initData();
    }

    async initData(){
        const responseGet = await axios.get(url + '/services');
        console.log(responseGet);
        this.serviceList = responseGet.data;
    }

    async addService(service){
        try{
             await axios.post(url + '/service', service)
            alert('השירות נוסף בהצלחה!');

            runInAction (() => {
                this.serviceList = [...this.serviceList, service];
            })

            return 'success';
        }
        catch(e){
            alert('שגיאה בהוספת שירות');
            return 'failed'       
        }
    }
}

export default new ServicesStore;