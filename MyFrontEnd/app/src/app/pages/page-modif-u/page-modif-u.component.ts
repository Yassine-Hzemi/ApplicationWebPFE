  import { HttpClient } from '@angular/common/http';
  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute, Router } from '@angular/router';
  @Component({
    selector: 'app-page-modif-u',
    templateUrl: './page-modif-u.component.html',
    styleUrls: ['./page-modif-u.component.css']
  })
  export class PageModifUComponent implements OnInit {
    id: string | null | undefined;
    user = { id:'', nom: '', email: '', password :'' , role:'', Privilege : ''};
    isResultLoaded = false;
    currentUsersID = '';

    serveurArray: any[] = [];
    Nom_serveur = "";

    constructor(private route: ActivatedRoute, private http: HttpClient , private router: Router ) {     this.getAllServers();}
  
    ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) {
        this.getUser(this.id);
      }
    }
  
    getAllServers() {
      this.http.get("http://localhost:8085/api/serveur/")
        .subscribe((resultData: any) => {
          this.isResultLoaded = true;
          console.log(resultData.data);
          this.serveurArray = resultData.data;
        });
    }

    
    getUser(id: string) {
      this.http.get(`http://localhost:8085/api/users/${id}`)
        .subscribe((resultData: any) => {
          console.log(resultData.data);
          this.user = resultData.data[0];
        });
    }

    togglePrivilege(nomServeur: string) {
      if (this.user.Privilege.includes(nomServeur)) {
        // If the server's name is already in the privilege string, remove it
        this.user.Privilege = this.user.Privilege.replace(nomServeur, '').trim();
      } else {
        // Otherwise, add the server's name to the privilege string
        this.user.Privilege += `${nomServeur} `;
      }
    }
    updateUser() {
        const userData = { role: this.user.role, Privilege: this.user.Privilege.replace(/,/g, '\n') };
    
        this.http.put(`http://localhost:8085/api/users/${this.user.id}/role-privilege`, userData)
          .subscribe(
            (resultData: any) => {
              console.log('Utilisateur mis à jour avec succès');
              this.user = resultData.data; // Update the user object with the updated data
              alert('Utilisateur mis à jour avec succès'); // Display a success alert
            },
            (error: any) => {
              console.error('Erreur lors de la mise à jour de l\'utilisateur :', error);
              alert('Erreur lors de la mise à jour de l\'utilisateur'); // Display an error alert
            }
          );
    }
    
    Retour() {
      this.router.navigate(['/dashboard/user']);
    
    }
    
    
    
    

  }