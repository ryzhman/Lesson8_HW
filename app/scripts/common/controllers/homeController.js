'use strict';

export default class HomeController{
	constructor(){
		'ngInject';
		this.items = [];
	}

	addItem(){
		this.items.push({
			text: this.text
		});

		this.text = '';
	}
}