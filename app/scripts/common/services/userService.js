'use strict';

export default class UserService{
	constructor($timeout, $rootScope){
		'ngInject';
		this.$timeout = $timeout;
		this.$rootScope = $rootScope;
		// this.users = [];
		this.users = [{
			name: 'John',
			email: 'john@gmail.com',
			age: 45
		}];
	}

	addUser(user){
		this.users.push(user);

		this.$rootScope.$broadcast('USER_ADDED', 0, 1, 2);
	}

	getUsersList(){
		return angular.copy(this.users);
	}

	loadUsersList(){
		return this.$timeout(()=>{
			return this.users;
		}, 0);
	}


	getUser(id, list){
		if (list){
			return list[id];
		}

		return this.loadUser(id);
	}

	loadUser(id){
		return this.$timeout(()=>{
			return this.users[id];
		}, 2000);
	}
}