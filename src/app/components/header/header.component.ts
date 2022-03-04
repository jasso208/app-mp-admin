import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { StorageService } from '@app/services/storage/storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public showbtntools:boolean = false;
  public usuario:string="";
  @Output() menuToggle=new EventEmitter<void>();
  constructor(
    private ss:StorageService
  ) { }

  ngOnInit(): void {
    this.ss.userSubject.subscribe(()=>{
      if(this.ss.getCurrentSession().user != null){
       this.refreshCurrentUser();
      }
    });

    this.refreshCurrentUser();
  }

  refreshCurrentUser():void{

    if(this.ss.getCurrentSession() != null){
      this.showbtntools=true;
      try{

        this.usuario = "User: ";
        this.usuario = this.usuario +  this.ss.getCurrentSession().user.first_name;
        this.usuario = this.usuario + " " + this.ss.getCurrentSession().user.last_name;

      }
      catch(e) {
        console.log(e);
      }
    }
  }
  onMenuToggleDispatch():void{
    this.menuToggle.emit();
  }

  logOut():void{
    this.showbtntools=false;
    this.ss.logout();
  }

}
