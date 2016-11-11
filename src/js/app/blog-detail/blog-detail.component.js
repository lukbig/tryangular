'use strict';

angular.module('blogDetail').
	component('blogDetail', {
		// template: "<div class=''><h1 class='new-class'>{{title}}</h1><button ng-click='someClickTest()'>Click me!</button>	</div>",
		templateUrl: '/templates/blog-detail.html',
		controller: function(Post, $http, $scope, $routeParams, $location) {

			// console.log(Post.get())
			// console.log(Post.query())
			//output is the same

			Post.query(function(data) {
				$scope.notFound = true;
				angular.forEach(data, function(post) {
					if (post.id == $routeParams.id) {
						$scope.post = post;
						$scope.notFound = false;
						resetReply();
					}
				})
			})

			$scope.deleteComment = function(comment) {
				$scope.$apply(
					$scope.post.comments.splice(comment, 1)
				)
			}

			function resetReply() {
				$scope.reply = {
					"id" : $scope.post.comments.length + 1,
					"text" : "",
				}
			}

			$scope.addReply = function() {
				console.log($scope.reply)

				$scope.post.comments.push($scope.reply);
				resetReply();
			}

			// $http.get("/json/posts.json").then(successCallback, errorCallback)

			// function successCallback(response, status, config, statusText) {
			// $scope.notFound = true;
			// 	var blogItems = response.data;
			// 	$scope.posts = blogItems;
			// 	angular.forEach(blogItems, function(post) {
			// 		if (post.id == $routeParams.id) {
			// 			$scope.post = post;
			// 			$scope.notFound = false;
			// 		}
			// 	})
			// }

			// function errorCallback(response, status, config, statusText) {
			// 	$scope.notFound = true;
			// }

			if ($scope.notFound == true) {
				//do sth f.e. set to 404
				$location.path("/404")
			}
		}
	});