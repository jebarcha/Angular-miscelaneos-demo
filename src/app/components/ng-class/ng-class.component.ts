import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-ng-class',
	templateUrl: './ng-class.component.html',
	styles: []
})
export class NgClassComponent implements OnInit {
	alerta = 'alert-danger';
	loading = false;

	propiedades: Object = {
		danger: false
	};

	constructor() {
		console.log(this.loading);
	}

	ngOnInit() {}

	ejecutar() {
		this.loading = true;
		console.log(this.loading);

		setTimeout(() => {
			this.loading = false;
			console.log(this.loading);
		}, 3000);
	}
}
