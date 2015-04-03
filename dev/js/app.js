var scannerapp = angular.module('scannerapp', ['ngRoute']);

scannerapp.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider.
		when('/results', {
		    templateUrl: 'views/results.html'
	})
	
	$locationProvider.html5Mode(true);
	
	/*$routeProvider.otherwise({
		redirectTo: '/'
	})
	*/
	
}]);