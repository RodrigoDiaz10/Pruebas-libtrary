import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  serverPath  = environment.baseUrl;

  constructor() { }
  public async post(path : string, payload: any): Promise<Observable<any>> {
    const responseRaw = await fetch(this.serverPath + path , {
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST"
    });
    return await responseRaw.json();
  }

  public async formdata(path : string, payload: FormData) {
    const responseRaw = await fetch(this.serverPath + path , {
      body: payload,
      method: "POST",
    });
    return await responseRaw.json();
  }

  async get(path : string) {
    // Por defecto se hace una petición GET
    const responseRaw = await fetch(this.serverPath + path , {
      //credentials: "include",
    });
    return await responseRaw.json();
  }

  async delete(path : string) {
    const responseRaw = await fetch(this.serverPath + path , {
      //credentials: "include",
      method: "DELETE",
    });
    return await responseRaw.json();
  }

  public async update(path : string, payload: any) {
    const responseRaw = await fetch(this.serverPath + path , {
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      //credentials: "include",
    });
    return await responseRaw.json();
  }
}
