'use strict';

export default class BikeListController{
	constructor(bikesService, bikes){
		'ngInject';

		this.bikesService = bikesService;

		// this.loadBikes();
		this.bikeList = bikes;
		this.showNetworkInfo(this.bikeList.networks[0]);
	}

	loadBikes(){

		// this.$http.get(URL)

		this.bikesService.getList().then((response)=>{
			this.bikeList = response;

			this.showNetworkInfo(this.bikeList.networks[0]);
		});
	}

	showNetworkInfo(network){
		// this.currentNetwork = network;

		this.bikesService.getBikeInfo(network.id).then((response) => {
			console.log(response);
			this.currentNetwork = response.network;

		});
	}

	showCompany(network){
		let companies = network.company;

		if (companies && companies.join) {
			return companies.join(', ');
		}

		return 'n/a';
	}

}
