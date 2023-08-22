import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page-consult',
  templateUrl: './page-consult.component.html',
  styleUrls: ['./page-consult.component.css']
})
export class PageConsultComponent {
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

  onConsulterClick(serveur: any) {
    this.router.navigate(['/dashboard/sercon'], { state: serveur });
    }

}
