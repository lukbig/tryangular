'use strict';

angular.module('blogList').
	component('blogList', {
		// template: "<div class=''><h1 class='new-class'>{{title}}</h1><button ng-click='someClickTest()'>Click me!</button>	</div>",
		templateUrl: '/templates/blog-list.html',
		controller: function($routeParams, $scope) {
			
			var blogItems = [
				{title: "some title1", id: 1, description: "this is a book"},
				{title: "some title2", id: 2, description: "this is a book"},
				{title: "some title3", id: 3, description: "this is a book"},
				{title: "some title4", id: 4, description: "this is a book"},
			]

			$scope.blogItems = blogItems;


			$scope.title = 'hi there';
			$scope.someClickTest = function() {
				console.log('clicked');
				$scope.title = 'Clicked';
			}			
		}
	});


	// controller('BlogListController', function($scope){
	// 	console.log("hello");
	// 	$scope.title = 'hi there';
	// 	$scope.someClickTest = function() {
	// 		console.log('clicked');
	// 		$scope.title = 'Clicked';
	// 	};
	// });