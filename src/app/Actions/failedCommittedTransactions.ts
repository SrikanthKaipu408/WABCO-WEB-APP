import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpDataService } from '../app.model';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import {Headers,RequestOptions} from '@angular/http';

@Component({
    selector: 'failedCommittedTransactions',
    templateUrl: './failedCommittedTransactions.html',
    providers: []
})

export class FailedCommittedTransactionsComponent implements OnInit {
    public employees: any = {};
    public errorMsg: any = [];
     constructor(public router: Router,public http:HttpClient,
        public EmpDataService: EmpDataService) {  }

    ngOnInit() {
       var  now = new Date(); 
      var sessionExpirytime = this.getSessionExpiry();
      //  if(now.getTime() < +sessionExpirytime){
      //    this.router.navigate(['home']);
      //    this.EmpDataService.loggedIn = true;
      //  }
    }
    
 loginSubmit(value: any) {
        //  let url ='/login'
        //   this.http.post(url,value,{responseType: 'text'})
        // .subscribe(
        //    (res) => {
        //        localStorage.setItem("userInfo",JSON.stringify(value));
        //        this.EmpDataService.setEmpInfo(value);
        //         this.EmpDataService.loggedIn = true;
                this.router.navigate(['home']);
        //         var now = new Date();
        //         var time = +now.getTime()+ 2*3600*1000;
        //         document.cookie="sessionExpiry="+time+";"
        //     },
        //     (err) => {
        //         console.log("error", err);
        //         this.errorMsg = 'Username or password is incorrect';
        //     }
        // )
   }

getSessionExpiry = () => {
    var cookies = document.cookie.split(';')
    if(cookies.length > 0 && cookies[0] !== ''){
      let sessionExpiry = cookies.map((c) => c.trim()).find((c) => c.match(/^sessionExpiry/) && c.match(/^sessionExpiry/).length > 0);
       sessionExpiry = sessionExpiry && sessionExpiry.split('=')[1];
      return sessionExpiry;
    }
    else{
      return '';
    }
  }

}