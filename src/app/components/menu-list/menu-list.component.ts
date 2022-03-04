import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  //el evento sera tratado por el padre, en este caso el appcomponent
  @Output() menuToggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeMenu():void{
    this.menuToggle.emit();
  }
}
