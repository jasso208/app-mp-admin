import { Component, OnInit } from '@angular/core';
import { Session } from '@app/core/models/session.model';
import { StorageService } from '@app/services/storage/storage.service';

@Component({
  selector: 'app-ventas-dia',
  templateUrl: './ventas-dia.component.html',
  styleUrls: ['./ventas-dia.component.css']
})
export class VentasDiaComponent implements OnInit {

  constructor(
    private ss:StorageService
  ) { }

  ngOnInit(): void {
    let session:Session = this.ss.getCurrentSession();
    console.log(session);


  }

}
