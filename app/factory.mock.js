angular.module('LouisApp.factory', ['ngResource'])

    .factory('PostsFactory', function ($resource) {
        return $resource('app/mockdata/posts.json', {}, {
            all: { method: 'GET', isArray: true },
            create: { method: 'POST' }
        })
    })

    .factory('PostFactory', function ($resource) {
        return $resource('app/mockdata/post.json', {}, {
            show: { method: 'GET' },
            update: { method: 'PUT', params: {id: '@id'} },
            delete: { method: 'DELETE', params: {id: '@id'} }
        })
    })

;