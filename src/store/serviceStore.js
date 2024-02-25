import { makeObservable, observable, action } from "mobx";

class DataStore {
    services = [];
    
    constructor() {
        makeObservable(this, {
            services: observable,
            setServices: action,
            addService: action,
        })
    }

    setServices = (services) => {
        this.services = [...this.services, ...services];
    }

    addService = (service) => {
        this.services = [...this.services, service];
    }
}

export default new DataStore();