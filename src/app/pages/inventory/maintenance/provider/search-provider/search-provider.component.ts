import { Component, OnInit } from '@angular/core';
import { ProviderModel } from '@app/core/models/provider.model';
import {ProviderService} from '@app/services/inventory/provider.service';
import { ProviderComponent } from '../provider/provider.component';

@Component({
  selector: 'app-search-provider',
  templateUrl: './search-provider.component.html',
  styleUrls: ['./search-provider.component.css']
})
export class SearchProviderComponent implements OnInit {
  displayedColumns: string[] = ['id', 'descripcion','activo'];

  animal: string = "";
  name: string = "";

  providers:Array<ProviderModel> = [];

  constructor(
    private ps:ProviderService
  ) { }

  ngOnInit(): void {

    this.getCatProviders("1","3");
  }

  getCatProviders(page:string,page_size:string):void{
    this.ps.getCatProviders(page,page_size).subscribe(
      data => {

        this.providers = data.results;

      },
      error =>{
        console.log(error);
      }
    );
  }




}
