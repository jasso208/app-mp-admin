import { Component, OnInit ,Inject} from '@angular/core';
import { ProviderModel} from '@app/core/models/provider.model';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

  accion:string="Alta ";

  constructor(

  ) { }

  ngOnInit(): void {
  }



}
