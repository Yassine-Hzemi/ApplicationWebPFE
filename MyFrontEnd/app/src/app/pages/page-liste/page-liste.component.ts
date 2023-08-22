import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-page-liste',
  templateUrl: './page-liste.component.html',
  styleUrls: ['./page-liste.component.css']
})
export class PageListeComponent {
  serveurArray: any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;
 
  Nom_serveur = "";
  IP = "";
  Createur = "";
  Zone_de_Stockage = "";
  Taille_Max_Zone = "";
  Taille_utilise = "";
  Nombre_Fichiers = "";
  Max_Files =""; 
  Memoire_totale =""; 
  Memoire_utilise=""; 
  disque_totale=""; 
  disque_utilise=""; 
  status ="" ;

 
  constructor(private http: HttpClient) {
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
}
