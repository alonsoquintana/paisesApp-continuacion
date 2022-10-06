import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

import { RESTCountries } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles:[    
  ]
})
export class PorPaisComponent {

  termino : string = '';
  hayError: boolean = false;
  paises  : RESTCountries[] = [];
  
  constructor( private paisService: PaisService ) { }
  
  buscar( termino: string) {

    this.hayError = false;
    this.termino= termino
    
    this.paisService.buscarPais( this.termino )
      .subscribe( (paises) => {
        console.log(paises);
        this.paises = paises;

      }, (err) => {
        this.hayError = true;
        this.paises   = [];    
      });
      
  }

  sugerencias( termino: string ) {
    this.hayError=false;
    // TODO: crear sugerencias
  }

}
