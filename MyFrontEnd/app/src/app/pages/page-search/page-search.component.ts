import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-search',
  templateUrl: './page-search.component.html',
  styleUrls: ['./page-search.component.css']
})
export class PageSearchComponent {
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

 
  constructor(private http: HttpClient , private router: Router) {
    this.getAllServers();
  }
 
  ngOnInit(): void {
  }
 
  getAllServers() {
    this.http.get("http://localhost:8085/api/serveur/")
      .subscribe((resultData: any) => {
        this.isResultLoaded = true;
        console.log(resultData.data);
        this.serveurArray = resultData.data;
      });
  }

  onChercherClick() {
    const searchedServeur = this.serveurArray.find(s => s.Nom_Serveur === this.Nom_Serveur);
    if (searchedServeur) {
      this.router.navigate(['/dashboard/sercon'], { state: searchedServeur });
    } else {
      alert("Serveur introuvable!");
    }
  }

}