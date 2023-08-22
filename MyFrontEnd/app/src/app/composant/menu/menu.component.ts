import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  public menuProperties: Array<Menu> = [  
    {
      id: '1',        
      titre: 'Tableau de Bord',      
      icon: 'bi bi-border-width',      
      url: '',      
      sousMenu: [        
        {          
          id: '11',          
          titre: 'Acceuil',          
          icon: 'bi bi-house-fill',          
          url: '/dashboard/acceuil'        
        }      
      ]
    },
  
    {
      id: '2',  
      titre: 'Détails Serveurs',
      icon: 'bi bi-server',
      url: '',
      sousMenu: [
        {
          id: '12',
          titre: 'Visualiser La Liste Des Serveurs',
          icon: 'bi bi-card-list',
          url: '/dashboard/liste',
        },
        {
          id: '14',
          titre: 'Visualiser Les Statistiques Des Serveurs',
          icon: 'bi bi-bar-chart-fill',
          url: '/dashboard/stat'
        }
      ]
    }, 
    {
      id:'3',  
      titre: 'Consulter Serveurs',
      icon: 'bi bi-check2-all',
      url: '',
      sousMenu: 
      [
        {
          id: '15',
          titre: 'Consulter un Serveur du Liste',
          icon: 'bi bi-list-check',
          url: '/dashboard/consult'
        },
        {
          id: '16',
          titre: 'Chercher un Serveur à Consulter',
          icon: 'bi bi-search',
          url: '/dashboard/search'
        }
      ]
    },
    {
      id:'4',  
      titre: 'Gérer Utilisateurs',
      icon: 'bi bi-people-fill',
      url: '',
      sousMenu: [
        {
          id: '17',
          titre: 'Afficher la Liste des Utilisateurs',
          icon: 'bi bi-person-lines-fill',
          url: '/dashboard/user'
        },
        {
          id: '18',
          titre: 'Ajouter Utilisateur',
          icon: 'bi bi-person-plus-fill',
          url: '/dashboard/ajout'
        }
      ]
    }
  ];

  constructor(
    private router : Router  
  ) {}

  ngOnInit(): void {}


  navigate(url?: string): void {
    this.router.navigate([url]);
  }
}
