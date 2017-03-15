'use strict';

import HeaderController from 'scripts/common/controllers/headerController.js';
import CreateUserCtrl from './create-user/createUserController.js';
import UserListCtrl from './user-list/userListController.js';
import UserCtrl from './user-view/userController.js';

import CreateUserListCtrl from './create-user/createUserListController.js';

import adminTemplate from './admin.html';
import createUserTemplate from './create-user/create-user.html';
import createUserFormTemplate from './create-user/user-form.html';
import createUserListTemplate from './create-user/user-list.html';

export default ($stateProvider)=>{
	'ngInject';

	let header = {
		templateUrl: '/app/views/header.html',
		controller: HeaderController,
		controllerAs: 'ctrl'
	};

	$stateProvider
		.state('admin', {
			abstract: true,
			url: '/admin',
			views:{
		  		'header': header,
		  		'': {
				  	template: adminTemplate,
		  		}
		  	},
		  	resolve: {
		  		users: (userService)=>{
		  			'ngInject';

		  			return userService.loadUsersList();
		  		}
		  	}
		})
		.state('admin.users', {
			url: '/user-list',
			title: 'Users list',
		  	templateUrl: '/app/views/users.html',
		  	controller: UserListCtrl,
		  	controllerAs: 'ctrl'
		})
		.state('admin.createUser', {
			url: '/user-create',
			abstract: true,
		  	template: createUserTemplate
		})
		.state('admin.createUser.index', {
			url: '',
			title: 'Create New User',
			views: {
		  		'form': {
				  	controller: CreateUserCtrl,
				  	controllerAs: 'ctrl',
		  			template: createUserFormTemplate
		  		},
		  		'list': {
		  			controller: CreateUserListCtrl,
				  	controllerAs: 'ctrl',
		  			template: createUserListTemplate
		  		}
		  	}
		})
		.state('admin.viewUser', {
			url: '/user-list/:userId',
		  	templateUrl: '/app/views/user.html',
		  	controller: UserCtrl,
		  	controllerAs: 'ctrl',
		  	resolve: {
		  		user: ($stateParams, users, userService, $state) =>{
		  			'ngInject';

		  			let id = $stateParams.userId;
		  			let user = userService.getUser(id, users);

		  			if (!user){
		  				return $state.go('home');
		  			}

		  			return user;
		  		}
		  	}
		});
}