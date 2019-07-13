import { Component } from '@angular/core';
import { EmpDataService } from './app.model';
import { Router } from '@angular/router' ;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    public EmpDataService: EmpDataService,
    public router: Router) { 
    }

ngOnInit() {

}
  get isLoggedIn() {
    return this.EmpDataService.isLoggedIn();
  }

  logout(){
    this.EmpDataService.logout();
    document.cookie = "sessionExpiry=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    localStorage.clear();
    this.router.navigate(['']);
  }

  get name(){
         return  JSON.parse(localStorage.getItem('userInfo')).userName;
         // this.EmpDataService.empInfo.userName;
  }

  get reload():boolean{
    return this.EmpDataService.loading; 
  }
}
