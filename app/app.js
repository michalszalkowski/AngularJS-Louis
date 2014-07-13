var BACKEND_URL = "http://localhost:8080/app";

var louisApp = angular.module('louisApp',
	[
		'LouisApp.controller.home',
		'LouisApp.controller.post',
		'LouisApp.controller.splitter',
		'LouisApp.controller.books',
		'LouisApp.factory',
		'LouisApp.service',

		'LouisApp.module.wizard',

		'ngRoute'
	])

louisApp.config(function ($routeProvider) {

	$routeProvider.
		when('/dashboard', {templateUrl: 'app/tpl/home.tpl.html', controller: 'HomeCtrl'}).
		when('/post', {templateUrl: 'app/tpl/post/list.tpl.html', controller: 'PostListCtrl'}).
		when('/post/:id', {templateUrl: 'app/tpl/post/form.tpl.html', controller: 'PostDetailCtrl'}).
		when('/post-new', {templateUrl: 'app/tpl/post/form.tpl.html', controller: 'PostCreationCtrl'}).
		when('/unsaved', {templateUrl: 'app/tpl/unsaved.tpl.html', controller: 'UnSavedCtrl'}).
		when('/splitter', {templateUrl: 'app/tpl/splitter.tpl.html', controller: 'SplitterCtrl'}).
		when('/module/wizard', {templateUrl: 'app/tpl/page.tpl.html', controller: 'PageCtrl'}).
		when('/books', {templateUrl: 'app/tpl/book/books.tpl.html', controller: 'BooksCtrl'}).
		otherwise({redirectTo: '/dashboard'});
});
