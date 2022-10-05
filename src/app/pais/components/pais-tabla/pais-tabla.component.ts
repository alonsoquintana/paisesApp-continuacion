import { Component, Input, OnInit } from '@angular/core';

import { RESTCountries } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
})
export class PaisTablaComponent implements OnInit {

  @Input() paises: RESTCountries[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
