angular.module('LouisApp.module.wizard', [])

	.directive('wizardWidget', function () {
		return {
			restrict: 'E',
			scope: {},
			controller: function ($scope, $http) {

				$scope.showCard = 0;
				$scope.wizardForm = {};

				$http({method: 'GET', url: 'app/mockdata/wizard.json'}).
					success(function (data) {
						$scope.wizard = data;
						$scope.wizard[0].isShow = true;
					});

				$scope.show = function (card) {

					$scope.wizard.forEach(function (card) {
						card.isShow = false;
					});

					card.isShow = true;
				}
			},
			templateUrl: 'app/module/wizard/wizard-main-widget.tpl.html'
		};
	})
;