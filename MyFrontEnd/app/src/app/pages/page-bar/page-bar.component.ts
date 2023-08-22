import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page-bar',
  templateUrl: './page-bar.component.html',
  styleUrls: ['./page-bar.component.css']
})
export class PageBarComponent {
  serveurArray: any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  Nom_Serveur = "";
  IP = "";
  Createur = "";
  Zone_de_Stockage = "";
  Taille_Max_Zone = "";
  Nombre_Fichiers = "";
  Max_Files = "";
  Memoire_totale = "";
  Memoire_utilise = "";
  disque_totale = "";
  disque_utilise = "";

  constructor(private http: HttpClient, private router: Router) {
    this.getAllServers();
  }

  ngOnInit(): void {
  }

  getAllServers() {
    const searchedServeur = history.state;
    if (searchedServeur) {
      this.serveurArray.push(searchedServeur);
      this.isResultLoaded = true;
    } else {
      this.http.get(`http://localhost:8085/api/serveur/${this.Nom_Serveur}`)
        .subscribe((resultData: any) => {
          this.isResultLoaded = true;
          console.log(resultData.data);
          this.serveurArray = resultData.data;
        });
    }
  }

  

}