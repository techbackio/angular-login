
(function() {

	"use strict";

angular
	.module("loginApp")

	.config(['$urlRouterProvider', '$stateProvider',
		function($urlRouterProvider, $stateProvider){

			$urlRouterProvider.otherwise('/');

			$stateProvider
				.state("home", {
					url: '/home',
					templateUrl: 'homepage.html'
				})

				.state("loggedInPage", {
					url: '/loggedin',
					templateUrl: 'loggedin.html'
				});
		}
	]);

})();
