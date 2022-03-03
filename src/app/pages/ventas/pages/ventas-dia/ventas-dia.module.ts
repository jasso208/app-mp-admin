import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { VentasDiaRoutingModule } from "./ventas-dia-routing.module";
import { VentasDiaComponent } from "./ventas-dia.component";

@NgModule({
  declarations: [
    VentasDiaComponent
  ],
  imports:[
    CommonModule,
    VentasDiaRoutingModule
  ]
})
export class VentasDiaModule{}
