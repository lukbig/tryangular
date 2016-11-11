'use strict';

angular.module('confirmClick').
	directive('confirmClick', function() {
		return {
			restrict: "A",
			link : function(scope, element, attr) {
				var msg = scope.message || "Are you sure?"
				var clickAction = attr.confirmedClick;
				element.bind("click", function(event) {

					event.stopImmediatePropagation();
					event.preventDefault();

					if (window.confirm(msg)) {
						scope.$eval(clickAction)
					}
				})
			}
		}
	});


// angular.module('confirmClick').
// 	directive('confirmClick', function($rootScope, $location) {
// 		return {
// 			scope: {
// 				message : "@message",
// 				eq : "=eq",
// 				post: "=post",
// 			},
// 			restrict : "E",
// 			// template : "<a href = ''>are you sure?</a>",
// 			template : "<a href = '/blog/{{post.id}}'>{{post.title}}</a>",
// 			link : function(scope, element, attr) {
// 				var msg = scope.message || "Are you sure?"
// 				element.bind("click", function(event) {
// 					if (window.confirm(msg)) {
// 						// console.log("/blog/" + scope.post.id)
// 						$location.path("/blog/" + scope.post.id)
// 					}
// 				})
// 				console.log(scope.eq)
// 				// console.log(element)
// 				console.log(attr.eq)
// 			}
// 		}
// 	})