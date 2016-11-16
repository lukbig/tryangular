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
			setupColumns($scope.blogItems, 3);


			$scope.loadinQuery = false;
			//watching scope
			$scope.$watch(function(){
				console.log($scope.query)
				if ($scope.query) {
					$scope.loadinQuery = true;
					$scope.cssClass = 'col-sm-12';
				} else if ($scope.loadinQuery) {
					setupColumns($scope.blogItems, 2);
					$scope.loadinQuery = false;
				}
			})

			$scope.changeCols = function(number) {
				if (angular.isNumber(number)) {
					$scope.numCols = number;
				} else {
					$scope.numCols = 3;
				}
				setupColumns($scope.blogItems, $scope.numCols);
			}


			function setupColumns(data, number) {
				if (angular.isNumber(number)) {
					$scope.numCols = number;
				} else {
					$scope.numCols = 3;
				}
				$scope.cssClass = 'col-sm-' + (12/$scope.numCols);
				$scope.colItems = chunkArrayInGroups($scope.blogItems, $scope.numCols );
			}
			

			//do array of arrays with the size of unit
			//for example we have 4 elements after function we have
			// [ [e1, e2, e3], [e4] ]
			function chunkArrayInGroups(array, unit) {
				var results = [];
				length = Math.ceil(array.length / unit);
				for (var i = 0; i < length; i++) {
					results.push(array.slice(i * unit, (i + 1) * unit))
				}
				return results;
			}


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