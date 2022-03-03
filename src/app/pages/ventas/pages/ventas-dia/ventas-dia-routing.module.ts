import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VentasDiaComponent } from "./ventas-dia.component";

const routes:Routes = [
  {
    path:'',
    component:VentasDiaComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasDiaRoutingModule{}
