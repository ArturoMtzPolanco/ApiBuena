import { Component } from '@angular/core';

import { UsuariosService } from '../ApiBuena/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
getdata:any []=[];
  constructor( public _services: UsuariosService) {
    this._services.getdata<any[]>("").subscribe(data=>{
      this.getdata = data
      console.log(this.getdata);
    }
      )
  }

}
