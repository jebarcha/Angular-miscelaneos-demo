import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-ng-style',
	template: `
    <p [ngStyle]="{'font-size': tamanio + 'px', 'color': 'red'}">
      Hola Mundo. Esta es una etiqueta.
    </p>
    <br>
    <p [style.fontSize]="'40px'">
      Hola Mundo. Esta es una etiqueta html
    </p>
    <p [style.fontSize.px]="tamanio">
      Hola Mundo. Esta es una etiqueta html
    </p>

    <button class="btn btn-primary" (click)="tamanio=tamanio + 5">
      <i class="fa fa-plus"></i>
    </button>
    <button class="btn btn-primary" (click)="tamanio=tamanio - 5">
      <i class="fa fa-minus"></i>
    </button>

    `,
	styles: []
})
export class NgStyleComponent implements OnInit {
	tamanio = 20;

	constructor() {}

	ngOnInit() {}
}
