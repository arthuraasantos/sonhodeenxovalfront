import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 



import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { MenuComponent } from './menu/menu.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { EnxovalComponent } from './enxoval/enxoval.component';
import { OrcamentoComponent } from './orcamento/orcamento.component';


const appRoutes: Routes = [
  { path: 'user/home', component: UserComponent },
  { path: '',
      redirectTo: 'user/home',
      pathMatch: 'full'
  }
];


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
