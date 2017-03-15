export default ($httpProvider)=>{
	'ngInject';

	$httpProvider.interceptors.push(($injector) =>{
	  return {
	   // 'request': function(config) {
	   //     // same as above

	   //     console.log('request: ', config);
	   //  },

	    'response': function(response) {
	       // same as above
	       	let data = response.data;

	       	if (typeof data !== 'string') {

	       		return data;
	       	}

	       	return response;
	    },

	    'responseError': function(response){
	    	var $state = $injector.get('$state');


	    	if (response.status === 404){

	    		//@TODO create page 404
	    		$state.go('home');
	    	}


	    	return response;
	    }
	  };
	});
}