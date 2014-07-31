angular.module('LouisApp.module.reload', [])

	.directive('reloadList', function () {
		return {
			restrict: 'E',
			scope: {
				'source': '@',
				'interval': '@'
			},
			controller: function ($scope, $http, $interval) {

				$scope.getData = function () {
					$http({method: 'GET', url: $scope.source}).
						success(function (data, status, headers, config) {
							$scope.rows = {};
							$scope.rows.config = data.config;
							$scope.rows.rows = data.rows;

							$scope.lastReload = new Date();
						});
				}

				$scope.getData();

				$interval(function () {
					$scope.getData();
				}, $scope.interval);
			},
			templateUrl: 'app/module/reload/reload-widget.tpl.html'
		};
	})
;