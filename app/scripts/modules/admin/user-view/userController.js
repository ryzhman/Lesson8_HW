'use strict';

export default class UserController{
	constructor(user, $state){
		'ngInject';

		this.user = user;

		if(!this.user){
			$state.go('admin.users');
		}
	}

}