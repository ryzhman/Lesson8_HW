'use strict';

export default class UserListController{
	constructor(userService, $state, users){
		'ngInject';

		this.userList = users;
		this.$state = $state;
		this._isEmptyList();
	}

	_isEmptyList(){
		if (this.userList.length === 0){
			this.$state.go('admin.createUser.index');
		}
	}
}














