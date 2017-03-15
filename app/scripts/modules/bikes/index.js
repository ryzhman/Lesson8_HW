'use strict';

import angular from 'angular';
import routeConfig from './router.js';
import bikesService from './bikesService.js';

let bikesModule = angular.module('app.bikes', []);

bikesModule
	.config(routeConfig)
	.service('bikesService', bikesService);


export default bikesModule;