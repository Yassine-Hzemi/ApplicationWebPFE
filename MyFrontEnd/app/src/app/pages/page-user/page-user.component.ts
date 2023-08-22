import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.css']
})
export class PageUserComponent {
  
  UsersArray: any[] = [];
  isResultLoaded = false;
 
  constructor(private http: HttpClient, private router: Router) {
    this.getAllUsers();
  }
 
  getAllUsers() {
    this.http.get("http://localhost:8085/api/Users/")
      .subscribe((resultData: any) => {
        this.isResultLoaded = true;
        console.log(resultData.data);
        this.UsersArray = resultData.data;
      });
  }
  
  delete(id: any) {
    const confirmResult = confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?");
    if (confirmResult) {
      this.http.delete(`http://localhost:8085/api/users/delete/${id}`)
        .subscribe((resultData: any) => {
          console.log(resultData);
          alert("Utilisateur supprimé avec succès");
          this.getAllUsers();
        });
    }
  }
  
  activate(id: any) {
      this.http.post(`http://localhost:8085/api/users/activate/${id}`, {})
        .subscribe((resultData: any) => {
          console.log(resultData);
          alert("Utilisateur activé avec succès");
          this.getAllUsers();
        });
  }
  
  deactivate(id: any) {
      this.http.post(`http://localhost:8085/api/users/desactivate/${id}`, {})
        .subscribe((resultData: any) => {
          console.log(resultData);
          alert("Utilisateur désactivé avec succès");
          this.getAllUsers();
        });
  }

  OnModifU(id: any) {
    this.router.navigate(['/dashboard/modifU', id]);
  }

}