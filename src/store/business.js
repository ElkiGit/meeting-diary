import { action, makeObservable, observable, runInAction } from "mobx";
import axios from "axios";

class Business {
    business = null;
    isAdmin=false;
    isUser=false;
    constructor() {
        makeObservable(this, {
            business: observable,
            isAdmin:observable,
            isUser:observable,
            addBusiness: action,
        });
        this.fetchData();
    }
    fetchData() {
        axios.get('http://localhost:8787/businessData').then(res => {
           
            this.business = res.data;
        }
        )
    }
    addBusiness(business) {
        fetch('http://localhost:8787/businessData', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(business)
        }).then((res) => {
            
            this.business=business;

        })

    }
    validationLogin(admin,isOkAdmin){
        fetch('http://localhost:8787/login', {
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(admin)
        }).then((res) => {
          
            if(res.status==200)
                this.isAdmin=true;
            if(res.status==401){
                this.isAdmin=false; 
                isOkAdmin(true);
            }
                            
        })
    }
    user(x){
        this.isUser=x; 
    }

}
export default new Business();