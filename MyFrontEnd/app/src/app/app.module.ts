import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './composant/header/header.component';
import { MenuComponent } from './composant/menu/menu.component';
import { PageAcceuilComponent } from './pages/page-acceuil/page-acceuil.component';
import { PageConsultComponent } from './pages/page-consult/page-consult.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageListeComponent } from './pages/page-liste/page-liste.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageSerconComponent } from './pages/page-sercon/page-sercon.component';
import { PageStatComponent } from './pages/page-stat/page-stat.component';
import { PageUserComponent } from './pages/page-user/page-user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PageAjoutComponent } from './pages/page-ajout/page-ajout.component';
import { PageUpdateComponent } from './pages/page-update/page-update.component';
import { PageSearchComponent } from './pages/page-search/page-search.component';
import { PageBarComponent } from './pages/page-bar/page-bar.component';
import { PageProfileComponent } from './pages/page-profile/page-profile.component';
import { PageModifComponent } from './pages/page-modif/page-modif.component';
import { PageModifPassComponent } from './pages/page-modif-pass/page-modif-pass.component';
import { FooterComponent } from './composant/footer/footer.component';
import { PageModifUComponent } from './pages/page-modif-u/page-modif-u.component';
import { FooterfnComponent } from './composantfn/footerfn/footerfn.component';
import { HeaderfnComponent } from './composantfn/headerfn/headerfn.component';
import { MenufnComponent } from './composantfn/menufn/menufn.component';
import { PageDashboardfnComponent } from './pages/page-dashboardfn/page-dashboardfn.component';
import { PageAcceuilfnComponent } from './pages/page-acceuilfn/page-acceuilfn.component';
import { PageListefnComponent } from './pages/page-listefn/page-listefn.component';
import { PageStatfnComponent } from './pages/page-statfn/page-statfn.component';
import { PageConsultfnComponent } from './pages/page-consultfn/page-consultfn.component';
import { PageSearchfnComponent } from './pages/page-searchfn/page-searchfn.component';
import { PageBarfnComponent } from './pages/page-barfn/page-barfn.component';
import { PageSerconfnComponent } from './pages/page-serconfn/page-serconfn.component';
import { PageProfilefnComponent } from './pages/page-profilefn/page-profilefn.component';
import { PageModiffnComponent } from './pages/page-modiffn/page-modiffn.component';
import { PageModifPassfnComponent } from './pages/page-modif-passfn/page-modif-passfn.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    PageAcceuilComponent,
    PageConsultComponent,
    PageDashboardComponent,
    PageListeComponent,
    PageLoginComponent  ,  
    PageSerconComponent,
    PageStatComponent,
    PageUserComponent,
    PageAjoutComponent,
    PageUpdateComponent,
    PageSearchComponent,
    PageBarComponent,
    PageProfileComponent,
    PageModifComponent,
    PageModifPassComponent,
    FooterComponent,
    PageModifUComponent,
    FooterfnComponent,
    HeaderfnComponent,
    MenufnComponent,
    PageDashboardfnComponent,
    PageAcceuilfnComponent,
    PageListefnComponent,
    PageStatfnComponent,
    PageConsultfnComponent,
    PageSearchfnComponent,
    PageBarfnComponent,
    PageSerconfnComponent,
    PageProfilefnComponent,
    PageModiffnComponent,
    PageModifPassfnComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
