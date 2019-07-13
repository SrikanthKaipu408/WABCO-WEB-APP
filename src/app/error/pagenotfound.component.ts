import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'pagenotfound',
    templateUrl: './pagenotfound.component.html',
    providers: []
})

export class PageNotFoundComponent implements OnInit {

    constructor(public router: Router) { }

    ngOnInit() {

    }
}