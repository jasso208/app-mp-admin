import { Component, OnInit ,Inject,Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProviderService} from '@app/services/inventory/provider.service';
import { ToastrService } from 'ngx-toastr';
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

  @Output() cerrar = new EventEmitter<void>();
  accion:string="Alta ";
  form:FormGroup = new FormGroup({});
  showSpinner:boolean = false;
  constructor(
    private fb:FormBuilder,
    private ps: ProviderService,
    private toastrService:ToastrService

  ) { }

  ngOnInit(): void {
    this.incializaForm();
  }


  incializaForm():void{
    this.form = this.fb.group({
      descripcion: new FormControl('',[Validators.required])
    });
  }

  addProvider():void{
    this.showSpinner=true;
    this.ps.postProvider(this.form)
    .subscribe(
      data=>{
        if(data.status=="200"){
          this.toastrService.success("El proveedor se registro correctamente.");
          this.cerrarVenana();
        }else{
          this.toastrService.error("Error al agregar el proveedor.");
        }
        this.showSpinner=false;
      },
      error =>{
        console.log(error);
        this.toastrService.error("Error al agregar el proveedor.");
        this.showSpinner=false;
      }
    );
  }

  cerrarVenana():void{
    this.cerrar.emit();
  }



}
