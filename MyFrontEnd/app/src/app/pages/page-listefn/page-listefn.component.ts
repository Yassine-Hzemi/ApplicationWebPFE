import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page-listefn',
  templateUrl: './page-listefn.component.html',
  styleUrls: ['./page-listefn.component.css']
})
export class PageListefnComponent {
  serveurArray: any[] = [];
  isResultLoaded = false;
  errorMessage: string = '';
  isUpdateFormActive = false;
  email = "";
  currentUsersID = "";

  constructor(private http: HttpClient) {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser !== null) {
      this.email = JSON.parse(currentUser).email;
    }
        this.getAllServers();
  }
  
  getAllServers() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser !== null) {
      const email = JSON.parse(currentUser).email;
      this.http.get(`http://localhost:8085/api/data?email=${email}`)
        .subscribe((resultData: any) => {
          console.log(resultData);
          this.isResultLoaded = true;
          if (resultData.status) {
            this.serveurArray = resultData.data.users;
          } else {
            this.errorMessage = resultData.message;
          }
        }, (error) => {
          this.errorMessage = error.message;
        });
    }
  }
}