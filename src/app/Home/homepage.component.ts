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
  constructor(public router: Router, public EmpDataService: EmpDataService,
        public ConfirmationService : ConfirmationService,
        public elementRef: ElementRef,
        public http: HttpClient) {
         
    }

    ngOnInit() {
        var now = new Date();
        var sessionExpirytime = this.getSessionExpiry();

    }
    ngAfterViewInit() {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#fff';
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