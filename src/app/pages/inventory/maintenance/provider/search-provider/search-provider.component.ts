import { Component, OnInit } from '@angular/core';
import { ProviderModel } from '@app/core/models/provider.model';
import {ProviderService} from '@app/services/inventory/provider.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search-provider',
  templateUrl: './search-provider.component.html',
  styleUrls: ['./search-provider.component.css']
})
export class SearchProviderComponent implements OnInit {
  displayedColumns: string[] = ['id', 'descripcion','activo'];


  providers:Array<ProviderModel> = [];
  muestraModalAltaProveedor:boolean = false;
  paginates:Array<any>=[];
  currentPage:number=1;
  constructor(
    private ps:ProviderService,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
    this.muestraModalAltaProveedor = false;
    this.getCatProviders(this.currentPage.toString(),"10");

  }

  getCatProviders(page:string,page_size:string):void{
    if(page==''){
      page=this.currentPage.toString();
    }

    this.paginates= [];
    this.muestraModalAltaProveedor=false;
    this.ps.getCatProviders(page,page_size).subscribe(
      data => {

        this.providers = data.results;

        let npag=Math.round((data.count/10)+0.5);

        for(let x=0;x<npag;x++){
          if((x+1).toString()==page){
            this.paginates.push([(x+1).toString(),"active"]);
          }
          else{
            this.paginates.push([(x+1).toString(),""]);
          }

        }


      },
      error =>{
        console.log(error);
        this.toastrService.error("Error al consultar el catalogo de proveedores.");

      }
    );
  }


  desactivaProveedor(id:number,descripcion:string,activo:string):void{
    this.ps.putProvider(id,descripcion,activo)
    .subscribe(
      data=>{
        if (data.status =="200"){
          this.getCatProviders('1','10');
        }else{
          this.toastrService.error("Error al actualizar el proveedor.");
        }
      },
      error =>{
        console.log("error");
        this.toastrService.error("Error al actualizar el proveedor.");
      }
    );
  }


}
