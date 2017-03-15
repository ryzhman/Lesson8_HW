import HeaderController from 'scripts/common/controllers/headerController.js';
import BikeListController from './list/bikeListController.js';
import bikeListTemplate from './list/bike-list.html';
import bikeTemplate from './bikes.html';

export default ($stateProvider)=>{
	'ngInject';

	let header = {
		templateUrl: '/app/views/header.html',
		controller: HeaderController,
		controllerAs: 'ctrl'
	};

	$stateProvider
		.state('bikes', {
			abstract: true,
			url: '/bikes',
			views:{
		  		'header': header,
		  		'': {
				  	template: bikeTemplate,
		  		}
		  	}
		})
		.state('bikes.list', {
			url: '',
			title: 'Bikes',
			controller: BikeListController,
			controllerAs: 'ctrl',
			template: bikeListTemplate,
			resolve: {
				bikes: (bikesService)=>{
					return bikesService.getList();
				}
			}
		});
}