import { Injectable } from '@angular/core';
import { baseUrl } from '../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const urlGetRegion = baseUrl + 'region/all';

const urlLogin = baseUrl + 'login/user';

const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient , private router: Router) {
    this.http = http;
  }

  GetRegion(){
    return this.http.get(urlGetRegion);
  }

  login(data: { email: any; password: any; }){
    return this.http.post(urlLogin, data, {headers: reqHeader});
  }

  checkConnection(): boolean{
    if (localStorage.getItem('token') !== null && sessionStorage.getItem('id_utilisateur') !== null) {
      return true;
    } else {
        return false;
    }
  }
  isConnected(): void{
    if ( !this.checkConnection()){
      this.router.navigateByUrl('/');
    }
  }
}
