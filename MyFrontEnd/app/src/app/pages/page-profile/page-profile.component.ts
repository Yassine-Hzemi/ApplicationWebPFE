import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-profile',
  templateUrl: './page-profile.component.html',
  styleUrls: ['./page-profile.component.css']
})
export class PageProfileComponent implements OnInit {
  
  user: any;
  isResultLoaded = false;
  isUpdateFormActive = false;

  id="" ; 
  nom = "";
  email = "";
  password = "";
  role = "";
  Privilege="" ;

  
  currentUsersID = "";
 
  constructor(private http: HttpClient, private router: Router) {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser !== null) {
      this.email = JSON.parse(currentUser).email;
    }
    this.getUser();
  }
ngOnInit(): void {}

getUser() {
  const currentUser = localStorage.getItem('currentUser');
  if (currentUser !== null) {
    const email = JSON.parse(currentUser).email;
    this.http.get(`http://localhost:8085/api/users/email/${email}`).subscribe(
      (resultData: any) => {
        this.isResultLoaded = true;
        this.user = resultData.data[0];
        this.id = this.user.id;
        this.nom = this.user.nom;
        this.email = this.user.email;
        this.password = this.user.password;
        this.role = this.user.role;
        this.Privilege = this.user.Privilege;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

  OnModif() {
    this.router.navigate(['/dashboard/modif']);
  
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }
}