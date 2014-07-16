angular.module('LouisApp.module.list', [])

	.directive('listWidget', function () {
		return {
			restrict: 'E',
			scope: {
				"data": "="
			},
			templateUrl: 'app/module/list/list.tpl.html'
		};
	})
;