angular.module('LouisApp.controller.listgrid', [])

	.controller('ListGridCtrl', function ($scope, $http) {

		$http({method: 'GET', url: 'app/mockdata/list/listA.json'}).
			success(function (data, status, headers, config) {
				$scope.listA = {};
				$scope.listA.config = data.config;
				$scope.listA.rows = data.rows;
			});

		$http({method: 'GET', url: 'app/mockdata/list/listB.json'}).
			success(function (data, status, headers, config) {
				$scope.listB = {};
				$scope.listB.config = data.config;
				$scope.listB.rows = data.rows;
			});

		$http({method: 'GET', url: 'app/mockdata/list/listC.json'}).
			success(function (data, status, headers, config) {
				$scope.listC = {};
				$scope.listC.config = data.config;
				$scope.listC.rows = data.rows;
			});
	})

;