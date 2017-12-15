import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 



import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { MenuComponent } from './menu/menu.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { OrcamentoComponent } from './orcamento/orcamento.component';
import { EnxovalComponent  } from "./enxoval/enxoval.component";
import { enableProdMode } from '@angular/core';


export const environment = {
  production: true
};

const appRoutes: Routes = [
  { path: 'user/home', component: UserComponent },
  { path: 'enxoval/home', component: EnxovalComponent },
  { path: '',
      redirectTo: 'user/home',
      pathMatch: 'full'
  }
];

if (environment.production) {
  enableProdMode();
}

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MenuComponent,
    EnxovalComponent,
    OrcamentoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
