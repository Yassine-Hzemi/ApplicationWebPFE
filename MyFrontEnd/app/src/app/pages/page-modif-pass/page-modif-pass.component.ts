import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-modif-pass',
  templateUrl: './page-modif-pass.component.html',
  styleUrls: ['./page-modif-pass.component.css']
})
export class PageModifPassComponent  {
  newPassword: string = ''; 
  user = { id:'', nom: '', email: '', password :'currentPassword' };
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
        this.currentUsersID = this.user.id; // Store the user's ID
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

updateUserpass() {
    this.user.password = this.newPassword;
    this.http.put(`http://localhost:8085/api/users/${this.user.id}/password`, {password: this.user.password})
      .subscribe(
        (resultData: any) => {
          console.log('Mot de passe de l\'utilisateur mis à jour avec succès');
          this.user = resultData.data; // Update the user object with the updated data
          alert('Mot de passe de l\'utilisateur mis à jour avec succès'); // Display a success alert
        },
        (error: any) => {
          console.error('Erreur lors de la mise à jour du mot de passe de l\'utilisateur :', error);
          alert('Erreur lors de la mise à jour du mot de passe de l\'utilisateur'); // Display an error alert
        }
      );
}

  Retour() {
    this.router.navigate(['/dashboard/modif']);
  
  }
}
