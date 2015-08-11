var app = angular.module('xyBuddy', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/')

	$stateProvider

	.state('home', {
		url: '/',
		templateUrl: 'index.html'
	})


	})