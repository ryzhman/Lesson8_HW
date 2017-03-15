'use strict';

export default class CreateUserController{
	constructor(userService, $state){
		'ngInject';

		this.userService = userService;
		this.user = {};
		this.$state = $state;
	}

	addUser(){
		let user = this.user;
		this.userService.addUser(user);
		// this.$state.go('admin.users');
	}
}