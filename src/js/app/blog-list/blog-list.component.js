'use strict';

angular.module('blogList').
	component('blogList', {
		// template: "<div class=''><h1 class='new-class'>{{title}}</h1><button ng-click='someClickTest()'>Click me!</button>	</div>",
		templateUrl: '/templates/blog-list.html',
		controller: function($routeParams, $scope, $rootScope, $location) {


			$scope.goToItem = function(post) {
				// rootScope works thanks to
				// event.stopImmediatePropagation();
				// event.preventDefault();
				// without event i can use only location
				$rootScope.$apply(function() {
					$location.path("/blog/" + post.id);
				})
			}


			
			var blogItems = [
				{title: "New item", id: 1, description: "this is a book",
				"comments" : [
					{"id" : 1, "text" : "Nice book"},
					{"id" : 2, "text" : "Another comment"}
				]
			},
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