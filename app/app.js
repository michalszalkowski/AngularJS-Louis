var BACKEND_URL = "http://localhost:8080/app";

var louisApp = angular.module('louisApp',
    [
        'LouisApp.controllers.home',
        'LouisApp.controllers.post',
        'LouisApp.factory',

        'ngRoute'
    ])

louisApp.config(function ($routeProvider) {

    $routeProvider.
        when('/', {templateUrl: 'app/tpl/home.tpl.html', controller: 'HomeCtrl'}).
        when('/post', {templateUrl: 'app/tpl/post/list.tpl.html', controller: 'PostListCtrl'}).
        when('/post/:id', {templateUrl: 'app/tpl/post/form.tpl.html', controller: 'PostDetailCtrl'}).
        when('/post-new', {templateUrl: 'app/tpl/post/form.tpl.html', controller: 'PostCreationCtrl'}).
        otherwise({redirectTo: '/'});
});
