var scannerapp = angular.module('scannerapp', [
	'ngRoute',
	'scannerappControllers'
]);

var scannerappControllers = angular.module('scannerappControllers', []);

scannerapp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/results', {
		    templateUrl: 'views/results.html'
	}).
	otherwise({
		redirectTo: '/'
	})
	
}]);