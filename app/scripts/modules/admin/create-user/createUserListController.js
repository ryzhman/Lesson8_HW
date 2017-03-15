'use strict';

export default class CreateUserListController{
	constructor(userService, $scope){
		'ngInject';

		this.userService = userService;
		this.users = userService.getUsersList();

		$scope.$on('USER_ADDED', (event)=>{
			this.users = userService.getUsersList();
		});
	}

}