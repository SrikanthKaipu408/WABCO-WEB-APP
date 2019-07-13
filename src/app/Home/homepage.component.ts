import { Component, OnInit,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { EmpDataService } from '../app.model';
import {ConfirmationService} from 'primeng/api';
import {SelectItem} from 'primeng/api';


@Component({
    selector: 'home',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css'],
    providers: []
})

export class HomePageComponent implements OnInit {
    response: any;
    url: string = '/jbebpclist?procName=JDE_BPC,JDE_DETAIL';
    batchData: any = [];
    headers;
    options;
    jobsList: SelectItem[];
    selectedJobList:String='Summary';
    isValid : boolean =true;

    constructor(public router: Router, public EmpDataService: EmpDataService,
        public ConfirmationService : ConfirmationService,
        public elementRef: ElementRef,
        public http: HttpClient) {
        let username: string = 'Admin';
        let password: string = 'password';
        let headers = new HttpHeaders();
        //this.headers = headers.append("Authorization", "Basic " + btoa("Admin:password"));
        // this.headers = headers.append("Content-Type", "application/x-www-form-urlencoded");
        this.headers = headers.append('Access-Control-Allow-Origin', '*');
        this.headers = headers.append("Authorization", "Basic " + btoa(username + ":" + password));
        this.options = new RequestOptions({ headers: this.headers });

         this.jobsList =[
            {label: 'JDE BPC GL Summary Data Load', value: 'Summary'},
            {label: 'JDE BPC GL Transction Data Load', value: 'Detail'}
        ];
         
    }

    ngOnInit() {
        var now = new Date();
        var sessionExpirytime = this.getSessionExpiry();
        // if (now.getTime() > +sessionExpirytime) {
        //     this.router.navigate(['login']);
        // } else {
        //     this.getBatchData();
        //     setTimeout(() => {
        //         this.EmpDataService.loggedIn = true;
        //     });
        // }

    }
    ngAfterViewInit() {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#fff';
    }
    getBatchData() {
        this.EmpDataService.loading = true;
        this.http.get(this.url).subscribe(
            data => {
                this.batchData = data;
                for (let i = 0; i < this.batchData.length; i++) {
                    this.batchData[i].id.procName = this.batchData[i].id.procName.replace(/_/g, ' ');
                    if (this.batchData[i].statusCd === 'L') {
                        this.batchData[i].statusCd = 'Completed'
                    } else {
                        this.batchData[i].statusCd = 'Running'
                        this.isValid = false;
                    }
                }
                this.EmpDataService.loading = false;
            },
            error => {
                this.EmpDataService.loading = false;
                console.log("error", error);
            }
        )
    }

    startJob() {
        console.log(this.selectedJobList);
      this.ConfirmationService.confirm({
            message: 'Are you sure you want to start job?',
            header: 'Confirmation',
            accept: () => {
                this.EmpDataService.loading = true;
                let url="/pentaho?jobName="+this.selectedJobList;
             this.http.get(url,{responseType: 'text'}).subscribe(
             data => {
                 console.log("PUT Request is successful ", data);
                 this.EmpDataService.loading = false;
             },
             error => {
                 this.EmpDataService.loading = false;
                 console.log("error", error);
             });
            },
            reject: () => {
            }
        });     
    }

    getSessionExpiry = () => {
        var cookies = document.cookie.split(';')
        if (cookies.length > 0 && cookies[0] !== '') {
            var sessionExpiry = cookies.map((c) => c.trim()).find((c) => c.match(/^sessionExpiry/) && c.match(/^sessionExpiry/).length > 0);
            sessionExpiry = sessionExpiry && sessionExpiry.split('=')[1];
            return sessionExpiry;
        }
        else {
            return '';
        }
    }

    addPalletSheet(){
        this.router.navigate(['addPalletSheet']);
    }
    committedTransactions(){
        this.router.navigate(['committedTransactions']);
    }
    getPalletSheet(){
        this.router.navigate(['getpalletSheet']);
    }
}