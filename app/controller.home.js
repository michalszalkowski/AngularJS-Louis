angular.module('LouisApp.controller.home', [])

	.controller('HomeCtrl', function ($scope, $http) {
	})

	.controller('PageCtrl', function ($scope, $http) {
		$scope.pageTitle = "Wizard";
	})

	.controller('MenuCtrl', function ($scope, $location) {
		$scope.getClass = function (path) {
			if ($location.path().substr(0, path.length) == path) {
				return "active"
			} else {
				return ""
			}
		}
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