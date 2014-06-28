angular.module('LouisApp.controllers.home', [])

	.controller('HomeCtrl', function ($scope, $http) {
	})

	.controller('UnSavedCtrl', function ($scope, $http, $location, LocalPostStorage) {

		$scope.posts = LocalPostStorage.getAll();

		$scope.edit = function (id) {
			$location.path('/post/' + id);
		};

		$scope.delete = function (id) {
			LocalPostStorage.remove(id, function () {
				$scope.posts = LocalPostStorage.getAll();
			});
		};

	})
;