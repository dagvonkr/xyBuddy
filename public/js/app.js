var app = angular.module('xyBuddy', ['ui.router', 'ui.bootstrap'])
.config(function($stateProvider, $urlRouteProvider)

	$urlRouterProvider.otherwise('/')

	$stateProvider

	.state('home', {
		url: '/',
		templateUrl: 'index.html'
	})


	)