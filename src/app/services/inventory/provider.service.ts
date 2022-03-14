
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
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
      return this.http.get(this.base_url + "inventario/proveedor?page=" + page + "&page_size=" + page_size);
  }

  postProvider(form:FormGroup):Observable<any> {
    console.log(form.value);
    return this.http.post(this.base_url + "inventario/proveedor",form.value);
  }

  putProvider(id:number,descripcion:string,activo:string):Observable<any>{
    if(activo=="S"){
      activo="N";
    }else{
      activo="S";
    }

    let data={
      "descripcion":descripcion,
      "activo":activo
    };

    return this.http.put(this.base_url + "inventario/proveedor/" + id + "/",data);

  }



}
