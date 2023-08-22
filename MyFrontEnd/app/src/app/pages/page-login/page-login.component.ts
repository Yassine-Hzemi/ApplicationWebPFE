import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent {
  email: string | undefined;
  password: string | undefined;
  error: string | undefined;
  

  constructor(private http: HttpClient, private router: Router) {
    this.email = '';
    this.password = '';
  }

  onSubmit() {
    this.http.post("http://localhost:8085/api/users/login", { email: this.email, password: this.password }).subscribe({
      next: (response: any) => {
        // login successful
        localStorage.setItem('currentUser', JSON.stringify(response));
        if (response.role == 'admin-app') {
          this.router.navigate(['/dashboard/acceuil']);
        } else if (response.role == 'admin-fn') {
          this.router.navigate(['acceuilfn']);
        } else {
          this.error = 'Role non autorisé';
        }
      },
      error: (error) => {
        // login failed
        this.error = error.error.message;
      },
    });
  }
  
  
}
