import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-searchfn',
  templateUrl: './page-searchfn.component.html',
  styleUrls: ['./page-searchfn.component.css']
})
export class PageSearchfnComponent {
  serveurArray: any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;
  
  errorMessage: string = '';
  email = "";
  currentUsersID = "";


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


  constructor(private http: HttpClient , private router: Router) {
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

  onChercherClick() {
    const searchedServeur = this.serveurArray.find(s => s.Nom_Serveur === this.Nom_Serveur);
    if (searchedServeur) {
      this.router.navigate(['/serconfn'], { state: searchedServeur });
    } else {
      alert("Serveur introuvable!");
    }
  }
}
