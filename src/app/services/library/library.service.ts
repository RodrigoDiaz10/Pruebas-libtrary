import { TypeStructure } from './../../models/library/typeStructure';

import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { Field } from 'app/models/library/field';
import { Structure } from 'app/models/library/structure';
import { type } from 'os';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  person: Observable<any>;

  public selectedField: Field = {
    state: '',
    id: null,
    description: '',
  };
  
  public selectedStructure: Structure = {
    state: '',
    id: null,
    description: '',
    name: '',
    type_structure:<TypeStructure>type//PREGUNTAR A VER SI ESTA BIEN
  };

  constructor(private _http: HttpClient, private http: HttpService) {

  }

  get(url: string) {
      const params = new HttpParams();
      url = environment.API_URL_LIBRARY + url;
      return this._http.get(url, {params});
  }

  post(url: string, data: any) {
      const params = new HttpParams();
      url = environment.API_URL_LIBRARY + url;
      return this._http.post(url, data, {params});
  }

  update(url: string, data: any) {
      const params = new HttpParams();
      url = environment.API_URL_LIBRARY + url;
      return this._http.put(url, data, {params});
  }

  delete(url: string) {
      const params = new HttpParams();
      url = environment.API_URL_LIBRARY + url;
      return this._http.delete(url, {params});
  }

  upload(url: string, data: any) {
      const params = new HttpParams();
      url = environment.API_URL_LIBRARY + url;
      return this._http.post(url, data, {params});
  }





  //nueva forma
  public async getField() {
    return await this.http.get("/api/person");
  }
   public async deleteField(idField) {
    return await this.http.delete("/api/personD/".concat(idField));
  }
  public async postField(field: Field) {
    return await this.http.post("/api/person", field);
  }
  public async editField(idField,field: Field) {
    return await this.http.update("/api/person/".concat(idField),field);
  }

}
