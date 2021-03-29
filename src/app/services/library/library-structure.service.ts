import { Injectable } from '@angular/core';
import { Structure } from 'app/models/library/structure';
import { TypeStructure } from 'app/models/library/typeStructure';
import { type } from 'os';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class LibraryStructureService {

  public selectedStructure: Structure = {
    state: '',
    id: null,
    description: '',
    name: '',
    //type_structure:<TypeStructure>type//PREGUNTAR A VER SI ESTA BIEN
  };
  
  constructor(private http: HttpService) { }

  public async getField() {
    return await this.http.get("/api/library/field ---typeField structure label  record  typeStructureinventory ");
  }
   public async deleteField(idStructure) {
    return await this.http.delete("/api/library/field/".concat(idStructure));
  }
  public async postField(structure: Structure) {
    return await this.http.post("/api/library/field", structure);
  }
  public async editField(idStructure,structure: Structure) {
    return await this.http.update("/api/library/field".concat(idStructure),structure);
  }

}
