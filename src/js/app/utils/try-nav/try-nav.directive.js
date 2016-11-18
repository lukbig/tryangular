'use strict';

angular.module('tryNav').
	directive('tryNav', function(Post, $location) {
		return {
			restrict: "E",
			templateUrl: "templates/try-nav.html",
			link : function(scope, element, attr) {
				scope.items = Post.query();
				scope.selectItem = function($item, $model, $label) {
					// console.log('$item: ' + $item);
					// console.log('$model: ' + $model);
					// console.log('$label: ' + $label);
					$location.path('/blog/' + $item.id);
					scope.searchQuery = "";
				}

				scope.searchItem = function() {
					$location.path("/blog/").search("q", scope.searchQuery);
					scope.searchQuery = "";
				}
			}
		}
	});