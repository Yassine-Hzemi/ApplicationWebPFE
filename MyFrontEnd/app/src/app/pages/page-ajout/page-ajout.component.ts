import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-ajout',
  templateUrl: './page-ajout.component.html',
  styleUrls: ['./page-ajout.component.css']
})

export class PageAjoutComponent {

  UsersArray: any[] = [];
  selectedServers: any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;
 
  nom = "";
  email = "";
  password = "";
  num ="" ;
  role = "";
  Privilege="" ; 
  currentUsersID = "";


  serveurArray: any[] = [];
  Nom_serveur = "";


  constructor(private http: HttpClient, private router: Router) {
    this.getAllUsers();
    this.getAllServers();
  }
 
  ngOnInit(): void {
  }
 
  getAllUsers() {
    this.http.get("http://localhost:8085/api/Users/")
      .subscribe((resultData: any) => {
        this.isResultLoaded = true;
        console.log(resultData.data);
        this.UsersArray = resultData.data;
      });
  }
  
  addUser(event: any) {
    event.preventDefault();
    // check if all required fields are filled
    if (!this.nom || !this.email || !this.password || !this.num || !this.role || this.serveurArray.filter(s => s.isChecked).length === 0) {
      alert("Veuillez remplir tous les champs obligatoires");
      return;
    }
  
    // check if email already exists
    const existingUser = this.UsersArray.find(user => user.email === this.email);
    if (existingUser) {
      alert("L'adresse e-mail existe déjà. Veuillez saisir une adresse e-mail différente.");
      return;
    }
  
    // check if password already exists
    const existingPassword = this.UsersArray.find(user => user.password === this.password);
    if (existingPassword) {
      alert("Le mot de passe existe déjà. Veuillez saisir un mot de passe différent.");
      return;
    }
  
    let privileges = this.serveurArray.filter(serveur => serveur.isChecked).map(serveur => serveur.Nom_Serveur).join("  ");
    let bodyData = {
      "nom": this.nom,
      "email": this.email,
      "password": this.password,
      "num": this.num,
      "role": this.role,
      "Privilege": privileges // update Privilege variable with the selected privileges
    };
      this.http.post("http://localhost:8085/api/users/add", bodyData, {
        headers: { "Content-Type": "application/json" }
      }).subscribe((resultData: any) => {
        console.log(resultData);
        alert("Utilisateur enregistré avec succès");
        this.nom = "";
        this.email = "";
        this.password = "";
        this.num = "";
        this.role = "";
        this.Privilege = "";
        this.getAllUsers();
      });
  }
  
  
  getAllServers() {
    this.http.get("http://localhost:8085/api/serveur/")
      .subscribe((resultData: any) => {
        this.isResultLoaded = true;
        console.log(resultData.data);
        this.serveurArray = resultData.data.map((serveur: any) => {
          serveur.isChecked = false; // add isChecked property to each serveur object
          return serveur;
        });
      });
  }
  Retour() {
    this.router.navigate(['/dashboard/user']);
  
  }
  
}
  


