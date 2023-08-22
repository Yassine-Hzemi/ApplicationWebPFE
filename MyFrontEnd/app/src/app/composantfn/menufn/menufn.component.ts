import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from './menufn';
@Component({
  selector: 'app-menufn',
  templateUrl: './menufn.component.html',
  styleUrls: ['./menufn.component.css']
})
export class MenufnComponent {
  public menuProperties: Array<Menu> = [  
    {
      id: '4',        
      titre: 'Tableau de Bord',      
      icon: 'bi bi-border-width',      
      url: '',      
      sousMenu: [        
        {          
          id: '17',          
          titre: 'Acceuil',          
          icon: 'bi bi-house-fill',          
          url: 'acceuilfn'        
        }      
      ]
    },
  
    {
      id: '5',  
      titre: 'Détails Serveurs',
      icon: 'bi bi-server',
      url: '',
      sousMenu: [
        {
          id: '18',
          titre: 'Visualiser La Liste Des Serveurs',
          icon: 'bi bi-card-list',
          url: 'listefn',
        },
        {
          id: '19',
          titre: 'Visualiser Les Statistiques Des Serveurs',
          icon: 'bi bi-bar-chart-fill',
          url: 'statfn'
        }
      ]
    }, 
    {
      id:'6',  
      titre: 'Consulter Serveurs',
      icon: 'bi bi-check2-all',
      url: '',
      sousMenu: 
      [
        {
          id: '20',
          titre: 'Consulter un Serveur du Liste',
          icon: 'bi bi-list-check',
          url: 'consultfn'
        },
        {
          id: '21',
          titre: 'Chercher un Serveur à Consulter',
          icon: 'bi bi-search',
          url: 'searchfn'
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
