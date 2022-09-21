import { Component } from '@angular/core';
import { NombresService } from '../2Api/nombres.service';



@Component({
  selector: 'app-paises',
  templateUrl: './paises.page.html',
  styleUrls: ['./paises.page.scss'],
})
export class PaisesPage {
getdata:any[]=[];
  constructor( public _services:NombresService) {

    this._services.getdata<any>("").subscribe (data => {
      this.getdata = data
      console.log(this.getdata)
    }
    
     )
   }

  

}
