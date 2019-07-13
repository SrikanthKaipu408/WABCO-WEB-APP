import { Injectable } from "@angular/core";
@Injectable()
export class EmpDataService {
    empInfo: any;
    public loggedIn: boolean = false;
    public loading: boolean = false;

    isLoggedIn() {
        return this.loggedIn;
    }

    setEmpInfo(data: any) {
        this.empInfo = data;
    }

    getEmpInfo() {
        return this.empInfo;
    }
    logout() {
        this.loggedIn = false;
    }
    
}