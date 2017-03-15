'use strict';

export default class HeaderController{
	constructor($state){
		'ngInject';

		let states = $state.get();

		this.states = states.filter((state) =>{
			return state.title;
		});

	}

}