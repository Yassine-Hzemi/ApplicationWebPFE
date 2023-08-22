import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-page-sercon',
  templateUrl: './page-sercon.component.html',
  styleUrls: ['./page-sercon.component.css']
})
export class PageSerconComponent implements OnInit {
  serveur: any;
  serveurArray: any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;
 
  id ="" ; 
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
  status =""; 

  constructor(private router: Router , private http: HttpClient) {}
  

  createPieChart(canvas: any, title: string, labels: string[], data: number[]) {
    const ctx = canvas.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: title
          }
        }
      }
    });
  }
  
  ngOnInit(): void {
    this.serveur = history.state;
  
    const memChartCanvas = document.getElementById('memChart') as HTMLCanvasElement;
    this.createPieChart(memChartCanvas, 'Utilisation de La Mémoire', ['Memoire Utilisé', 'Memoire Totale'], [this.serveur.Memoire_utilise, this.serveur.Memoire_totale]);
  
    const diskChartCanvas = document.getElementById('diskChart') as HTMLCanvasElement;
    this.createPieChart(diskChartCanvas, 'Utilisation du Disque', ['Disque Utilisé', 'Disque Totale'], [this.serveur.disque_utilise, this.serveur.disque_totale]);

    const areaChartCanvas = document.getElementById('areaChart') as HTMLCanvasElement;
    this.createPieChart(areaChartCanvas, 'Utilisation du Storage Area', ['Taille Utilisé', 'Taille Totale'], [this.serveur.Taille_utilise, this.serveur.Taille_Max_Zone]);
  }

  getAllServers() {
    this.http.get("http://localhost:8085/api/serveur/")
      .subscribe((resultData: any) => {
        this.isResultLoaded = true;
        console.log(resultData.data);
        this.serveurArray = resultData.data;
      });
  }

  dem(id: any) {
      this.http.post(`http://localhost:8085/api/serveur/demarre/${id}`, {})
        .subscribe((resultData: any) => {
          console.log(resultData);
          alert("Serveur Démarre");
          this.getAllServers();
        });
  }

  arr(id: any) {
    this.http.post(`http://localhost:8085/api/serveur/arret/${id}`, {})
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert("Serveur Arrêté");
        this.getAllServers();
      });
  }

  Retour() {
    this.router.navigate(['/dashboard/consult']);
  
  }
}