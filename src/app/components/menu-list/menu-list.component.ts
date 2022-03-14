import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  public contraer:string="+";
  public statusmenu = {
    "maintenance":{
      "iconcontraer":"+",
      "expndsubmenu":false,
      "showiconcontraer":true
    },
    "articulo":{
      "iconcontraer":"+",
      "expndsubmenu":false,
      "showiconcontraer":false
    }
  };

  //el evento sera tratado por el padre, en este caso el appcomponent
  @Output() menuToggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeMenu():void{
    this.menuToggle.emit();
  }
  expandMenu(opcion:any):void{

    let status = opcion.iconcontraer;
    if(status=="+"){
      opcion.iconcontraer="-";
      opcion.expndsubmenu=true;
    }
    else{
      opcion.iconcontraer="+";
      opcion.expndsubmenu=false;
    }

  }
}
