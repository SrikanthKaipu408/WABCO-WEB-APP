import { Component, OnInit,ElementRef,ViewChild,Renderer2} from '@angular/core';
import { Router } from '@angular/router';
import { EmpDataService } from '../app.model';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import {Headers,RequestOptions} from '@angular/http';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    providers: []
})

export class LoginComponent implements OnInit {
    public employees: any = {
      "Admin":{
          "password":"password"
      },
      "Demo":{
        "password":"welcome1"
      }
    }
    public errorMsg: any = [];
    @ViewChild('error') error : ElementRef;
     constructor(public router: Router,public http:HttpClient,
        public EmpDataService: EmpDataService,
        public elementRef: ElementRef,
        public renderer: Renderer2) {  }

    ngOnInit() {
       var  now = new Date(); 
      var sessionExpirytime = this.getSessionExpiry();
      //  if(now.getTime() < +sessionExpirytime){
      //    this.router.navigate(['home']);
      //    this.EmpDataService.loggedIn = true;
      //  }
    }
    ngAfterViewInit(){
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#eeeeee';
   }
    
 loginSubmit(value: any) {
         let url ='../logindetails.json'
          // return this.http.get("./app/logindetails.json").subscribe(
          //     this.employees = res;
          //     //  localStorage.setItem("userInfo",JSON.stringify(value));
          //     //  this.EmpDataService.setEmpInfo(value);
          //     //   this.EmpDataService.loggedIn = true;
          if (this.employees[value.userName.charAt(0).toUpperCase() + value.userName.toLowerCase().slice(1)].password === value.password){
            localStorage.setItem("userInfo",JSON.stringify(value));
            this.EmpDataService.setEmpInfo(value);
            this.router.navigate(['home']);
              // var now = new Date();
              // var time = +now.getTime()+ 2*3600*1000;
              // document.cookie="sessionExpiry="+time+";"
          } else {
            console.log("login error");
            this.errorMsg = 'Username or password is incorrect';
            this.renderer.setStyle(this.error.nativeElement, "display", "block");
          }
          
          
          //     //   var now = new Date();
          //     //   var time = +now.getTime()+ 2*3600*1000;
          //     //   document.cookie="sessionExpiry="+time+";"
          //   },
          //   (err) => {
          //       console.log("error", err);
          //       this.errorMsg = 'Username or password is incorrect';
          //   }
        //)
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