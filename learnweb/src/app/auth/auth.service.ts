import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs';
import { Credential } from './credential'

@Injectable()
export class AuthService {

  constructor(private _http: Http) { }
  token: string;

  auth(credential: Credential): Observable<Response> {
  
    //let headers = new Headers({ 'Authorization': 'Basic api:secret'  });;
    return this._http.post('oauth/token', JSON.stringify(credential))
      .map((response: Response) => {
        let token = response.json() && response.json().token;
        if (token) {
          this.token = token;
          localStorage.setItem('currentUser', JSON.stringify({ username: credential.username, token: token }));
          return true;
        } else {
          return false;
        }

      })
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch((err: Response) => Observable.throw(err.json().error));
  }

}
