import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page-modiffn',
  templateUrl: './page-modiffn.component.html',
  styleUrls: ['./page-modiffn.component.css']
})
export class PageModiffnComponent {
  user = { id:'', nom: '', email: '', password :'' };
  isResultLoaded = false;
  currentUsersID = '';

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser !== null) {
      this.user.email = JSON.parse(currentUser).email;
    }
    this.getUser();
  }

  getUser() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser !== null) {
      const email = JSON.parse(currentUser).email;
      this.http.get(`http://localhost:8085/api/users/email/${email}`).subscribe(
        (resultData: any) => {
          this.isResultLoaded = true;
          this.user = resultData.data[0];
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
  
  updateUser() {
    this.http.put(`http://localhost:8085/api/users/${this.user.id}`, this.user)
      .subscribe(
        (resultData: any) => {
          console.log('Utilisateur mis à jour avec succès');
          this.user = resultData.data; // Update the user object with the updated data
          alert('Utilisateur mis à jour avec succès'); // Display a success alert
        },
        (error: any) => {
          console.error('Erreur lors de la mise à jour de l\'utilisateur :', error);
          alert('Erreur lors de la mise à jour de l\'utilisateur'); // Display an error alert
        }
      );
}


  OnModifPass() {
    this.router.navigate(['/modifPassfn']);
  
  }

  Retour() {
    this.router.navigate(['/profilefn']);
  
  }
  
}
