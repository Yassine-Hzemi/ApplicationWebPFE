import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page-consultfn',
  templateUrl: './page-consultfn.component.html',
  styleUrls: ['./page-consultfn.component.css']
})
export class PageConsultfnComponent {
  serveurArray: any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;
 
  Nom_Serveur = "";
  IP = "";
  Createur = "";
  Zone_de_Stockage = "";
  Taille_Max_Zone = "";
  Nombre_Fichiers = "";
  Max_Files =""; 
  Memoire_totale =""; 
  Memoire_utilise=""; 
  disque_totale=""; 
  disque_utilise=""; 
  status="" ; 
  errorMessage: string = '';
  email = "";
  currentUsersID = "";


  constructor(private http: HttpClient, private router: Router) {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser !== null) {
      this.email = JSON.parse(currentUser).email;
    }
        this.getAllServers();
  }
  ngOnInit(): void {
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

  onConsulterClick(serveur: any) {
    this.router.navigate(['/serconfn'], { state: serveur });
    }
}
  