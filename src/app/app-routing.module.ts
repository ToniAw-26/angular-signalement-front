import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DetailComponent } from './signalement/detail/detail.component';
import { ListeComponent } from './signalement/liste/liste.component';
import { DetailidComponent } from './signalement/detailid/detailid.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signalement/liste', component: ListeComponent },
  { path: 'detail/signalement/:latitude/:longitude', component: DetailComponent },
  { path: 'signalement/detail/:id', component: DetailidComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
