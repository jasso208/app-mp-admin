
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Observable } from "rxjs";

@Injectable(
  {
    providedIn:"root"
  }
)
export class ProviderService{

  private base_url:string = environment.url;

  constructor(
    private http:HttpClient
  ) {}

  getCatProviders(page:string,page_size:string):Observable<any>{
    console.log(this.base_url + "inventario/proveedor?page=" + page + "?page_size=" + page_size);
      return this.http.get(this.base_url + "inventario/proveedor?page=" + page + "&page_size=" + page_size);
    }



}
