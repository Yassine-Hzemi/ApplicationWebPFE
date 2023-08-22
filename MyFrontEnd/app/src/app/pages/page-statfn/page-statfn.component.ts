import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-page-statfn',
  templateUrl: './page-statfn.component.html',
  styleUrls: ['./page-statfn.component.css']
})
export class PageStatfnComponent {
  serveurArray: any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  errorMessage: string = '';
  email = "";
  currentUsersID = "";
 
  Nom_serveur = "";
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

 
  constructor(private http: HttpClient) {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser !== null) {
      this.email = JSON.parse(currentUser).email;
    }
    this.getAllServers();
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
  
            // Bar chart1
            const myChart = new Chart('myChart', {
              type: 'bar',
              data: {
                labels: this.serveurArray.map(server => server.Nom_Serveur),
                datasets: [{
                  label: 'Utilisation de La Mémoire',
                  data: this.serveurArray.map(server => server.Memoire_utilise),
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)'
                  ],
                  borderWidth: 2
                }]
              },
            });
                    // Bar chart2
        const myChart2 = new Chart('myChart2', {
          type: 'bar',
          data: {
            labels: this.serveurArray.map(server => server.Nom_Serveur),
            datasets: [{
              label: 'Utilisation du Disque',
              data: this.serveurArray.map(server => server.disque_utilise),
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)'
              ],
              borderWidth: 2
            }]
          },
        });
  
          } else {
            this.errorMessage = resultData.message;
          }
        }, (error) => {
          this.errorMessage = error.message;
        });
    }
  }
}

