angular.module('LouisApp.controllers.post', [])

    .controller('PostListCtrl', ['$scope', 'PostsFactory', 'PostFactory', '$location',
        function ($scope, PostsFactory, PostFactory, $location) {

            $scope.edit = function (id) {
                $location.path('/post/' + id);
            };

            $scope.delete = function (id) {
                PostFactory.delete({ id: id }, function () {
                    $scope.posts = PostsFactory.all();
                });
            };

            $scope.create = function () {
                $location.path('/post-new');
            };

            $scope.populate = function () {
                var id = new Date().getTime();
                PostsFactory.create({"id": id, "name": "Lorem " + id});
                $scope.posts = PostsFactory.all();
            };

            $scope.posts = PostsFactory.all();
        }])

    .controller('PostDetailCtrl', ['$scope', '$routeParams', 'PostFactory', '$location',
        function ($scope, $routeParams, PostFactory, $location) {

            $scope.save = function () {
                PostFactory.update($scope.post, function () {
                    $location.path('/post');
                });
            };

            $scope.cancel = function () {
                $location.path('/post');
            };

            $scope.post = PostFactory.show({id: $routeParams.id});
        }])

    .controller('PostCreationCtrl', ['$scope', 'PostsFactory', '$location',
        function ($scope, PostsFactory, $location) {

            $scope.save = function () {
                $scope.post.id = new Date().getTime();
                PostsFactory.create($scope.post, function () {
                    $location.path('/post');
                });
            };

            $scope.cancel = function () {
                $location.path('/post');
            };

        }])
;