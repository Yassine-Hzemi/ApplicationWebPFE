import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageAcceuilComponent } from './pages/page-acceuil/page-acceuil.component';
import { PageListeComponent } from './pages/page-liste/page-liste.component';
import { PageStatComponent } from './pages/page-stat/page-stat.component';
import { PageConsultComponent } from './pages/page-consult/page-consult.component';
import { PageUserComponent } from './pages/page-user/page-user.component';
import { PageSerconComponent } from './pages/page-sercon/page-sercon.component';
import { PageSearchComponent } from './pages/page-search/page-search.component';
import { PageAjoutComponent } from './pages/page-ajout/page-ajout.component';
import { PageUpdateComponent } from './pages/page-update/page-update.component';
import { PageBarComponent } from './pages/page-bar/page-bar.component';
import { PageProfileComponent } from './pages/page-profile/page-profile.component';
import { PageModifComponent } from './pages/page-modif/page-modif.component';
import { PageModifPassComponent } from './pages/page-modif-pass/page-modif-pass.component';
import { PageModifUComponent } from './pages/page-modif-u/page-modif-u.component';
import { PageAcceuilfnComponent } from './pages/page-acceuilfn/page-acceuilfn.component';
import { PageDashboardfnComponent } from './pages/page-dashboardfn/page-dashboardfn.component';
import { PageConsultfnComponent } from './pages/page-consultfn/page-consultfn.component';
import { PageListefnComponent } from './pages/page-listefn/page-listefn.component';
import { PageStatfnComponent } from './pages/page-statfn/page-statfn.component';
import { PageSerconfnComponent } from './pages/page-serconfn/page-serconfn.component';
import { PageSearchfnComponent } from './pages/page-searchfn/page-searchfn.component';
import { PageBarfnComponent } from './pages/page-barfn/page-barfn.component';
import { PageProfilefnComponent } from './pages/page-profilefn/page-profilefn.component';
import { PageModifPassfnComponent } from './pages/page-modif-passfn/page-modif-passfn.component';
import { PageModiffnComponent } from './pages/page-modiffn/page-modiffn.component';

const routes: Routes = [
  {
    path: '' , 
    component : PageLoginComponent 
  }, 
  {
    path :'dashboard' , 
    component : PageDashboardComponent, 
    children :  [ 
      {
        path : 'acceuil',
        component :PageAcceuilComponent
      },
      {
        path : 'liste',
        component :PageListeComponent 
      },
      {
        path : 'stat',
        component :PageStatComponent 
      },
      {
        path : 'consult',
        component :PageConsultComponent
      },
      {
        path : 'user',
        component :PageUserComponent
      },
      {
        path: 'sercon',
        component: PageSerconComponent
      },
      {
        path: 'search',
        component: PageSearchComponent
      },
      {
        path: 'ajout',
        component: PageAjoutComponent
      },
      {
        path: 'update',
        component: PageUpdateComponent
      },
      {
        path: 'bar',
        component: PageBarComponent
      },
      {
        path: 'profile',
        component: PageProfileComponent
      },
      {
        path: 'modif',
        component: PageModifComponent
      },
      {
        path: 'modifPass',
        component: PageModifPassComponent
      },
      {
        path: 'modifU/:id',
        component: PageModifUComponent
      },
      {
        path: 'sercon',
        component: PageSerconComponent
      },
    ]
  }, 
  {
    path :'' , 
    component : PageDashboardfnComponent, 
    children :  [ 
      {
        path : 'acceuilfn',
        component: PageAcceuilfnComponent
      },
      {
        path : 'listefn',
        component :PageListefnComponent 
      },
      {
        path : 'statfn',
        component :PageStatfnComponent 
      },
      {
        path : 'consultfn',
        component :PageConsultfnComponent
      },
      {
        path: 'serconfn',
        component: PageSerconfnComponent
      },
      {
        path: 'searchfn',
        component: PageSearchfnComponent
      },
      {
        path: 'updatefn',
        component: PageUpdateComponent
      },
      {
        path: 'barfn',
        component: PageBarfnComponent
      },
      {
        path: 'profilefn',
        component: PageProfilefnComponent
      },
      {
        path: 'modiffn',
        component: PageModiffnComponent
      },
      {
        path: 'modifPassfn',
        component: PageModifPassfnComponent
      }

    ]
  }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
