import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-page-update',
  templateUrl: './page-update.component.html',
  styleUrls: ['./page-update.component.css']
})
export class PageUpdateComponent {
Users : any ; 
updateForm: any;


UsersArray: any[] = [];
isResultLoaded = false;
isUpdateFormActive = false;

nom = "";
email = "";
password = "";
role = "";
currentUsersID = "";

constructor(private http: HttpClient, private router: Router) {
  this.getAllUsers();
}

ngOnInit(): void {
  this.Users = history.state;
}

getAllUsers() {
  this.http.get("http://localhost:8085/api/Users/")
    .subscribe((resultData: any) => {
      this.isResultLoaded = true;
      console.log(resultData.data);
      this.UsersArray = resultData.data;
    });
}






}
