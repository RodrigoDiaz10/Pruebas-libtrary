import { Injectable } from '@angular/core';
import { Field } from 'app/models/library/field';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class LibraryFieldService {

  public selectedField: Field = {
    state: '',
    id: null,
    description: '',
  };
  constructor(private http: HttpService) { }

    
    public async getField() {
      return await this.http.get("/api/library/field");
    }
     public async deleteField(idField) {
      return await this.http.delete("/api/library/field/".concat(idField));
    }
    public async postField(field: Field) {
      return await this.http.post("/api/library/field", field);
    }
    public async editField(idField,field: Field) {
      return await this.http.update("/api/library/field/".concat(idField),field);
    }
}
