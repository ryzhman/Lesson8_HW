'use strict';

export default class BikesService{
	constructor($http, apiConfig){
		'ngInject';

		this.$http = $http;
		this.apiConfig = apiConfig;
	}

	getList(){
		return this.$http.get(this.apiConfig.bikes);

		// return this.dataService.getList(URL);
	}

	getBikeInfo(id){
		return this.$http.get(this.apiConfig.bikes + '/' + id);
	}

}