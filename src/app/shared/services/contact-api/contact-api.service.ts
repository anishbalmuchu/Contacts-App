import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { ApiUrls } from '../../../app-constants/api-names';

@Injectable({
  providedIn: 'root'
})
export class ContactApiService {
  public baseUrl = environment.baseUrl;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };

  constructor(private http: HttpClient) { }

  getContacts(): Observable<any> {
    const url = `${this.baseUrl}${ApiUrls.getContacts}`;
    return this.http.get(url);
  }

  addContacts(body): Observable<any> {
    const url = `${this.baseUrl}${ApiUrls.addContact}`;
    return this.http.post(url, body, this.httpOptions);
  }

  editContact(body): Observable<any> {
    const url = `${this.baseUrl}${ApiUrls.editContact}`;
    return this.http.post(url, body, this.httpOptions);
  }

  deleteContacts(body): Observable<any> {
    const url = `${this.baseUrl}${ApiUrls.deleteContact}`;
    return this.http.post(url, body, this.httpOptions);
  }
}
