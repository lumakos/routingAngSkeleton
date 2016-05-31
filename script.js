var app = angular.module('mainSkeleton', ['ngRoute']);

app.config(function($routeProvider) {

	$routeProvider

		// route for home page
		.when('/', {
			templateUrl : 'pages/home.html',
			controller : 'mainController'
		})

		// route for about page
		.when('/about', {
			templateUrl : 'pages/about.html',
			controller : 'aboutController'
		})

		// route for contact page
		.when('/contact', {
			templateUrl : 'pages/contact.html',
			controller : 'contactController'
		})

});

app.controller('mainController', function($scope) {

	$scope.message = 'The main Ang Skeleton';

});

app.controller('aboutController', function($scope) {

	$scope.message = 'About Page';

});

app.controller('contactController', function($scope) {

	$scope.message = 'Contact Page';

});