'use strict';

angular.module('blogDetail').
	component('blogDetail', {
		// template: "<div class=''><h1 class='new-class'>{{title}}</h1><button ng-click='someClickTest()'>Click me!</button>	</div>",
		templateUrl: '/templates/blog-detail.html',
		controller: function($http, $scope, $routeParams, $location) {

			$http.get("/json/posts.json").then(successCallback, errorCallback)

			function successCallback(response, status, config, statusText) {
				var blogItems = response.data;
				$scope.posts = blogItems;
				angular.forEach(blogItems, function(post) {
					if (post.id == $routeParams.id) {
						console.log(post);
						$scope.post = post;
						$scope.notFound = false;
					}
				})
			}

			function errorCallback(response, status, config, statusText) {
				$scope.notFound = true;
			}

			// var blogItems = [
			// 	{title: "some title1", id: 1, description: "this is a book"},
			// 	{title: "some title2", id: 2, description: "this is a book"},
			// 	{title: "some title3", id: 3, description: "this is a book"},
			// 	{title: "some title4", id: 4, description: "this is a book"},
			// ]

			// // console.log($routeParams)
			// $scope.title = "Blog " + $routeParams.id;

			// $scope.found = false;
			// angular.forEach(blogItems, function(post){
			// 	if (post.id == $routeParams.id) {
			// 		$scope.post = post;
			// 		$scope.found = true;
			// 	}
			// })

			if ($scope.notFound == true) {
				//do sth f.e. set to 404
				$location.path("/404")
			}
		}
	});