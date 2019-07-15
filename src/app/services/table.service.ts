import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';


const API_URL = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class TableService {
  constructor(private http: HttpClient) { }


  fetchTable(){
    return this.http.get(API_URL + '/errors')
  };

  fetchUsers(){
      return this.http.get(API_URL + '/users')
  }

}
