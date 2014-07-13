angular.module('LouisApp.controller.books', [])

	.controller('BooksCtrl', function ($scope, $http) {

		$scope.commentform = {new: ""};

		$http({method: 'GET', url: 'app/mockdata/book/books.json'}).
			success(function (data, status, headers, config) {
				$scope.books = data;
			});

		$scope.details = function (id) {
			$http({method: 'GET', url: 'app/mockdata/book/book_' + id + '.json'}).
				success(function (data, status, headers, config) {
					$scope.book = data.book;
					$scope.author = data.author;
					$scope.comments = data.comments;
				});
		}

		$scope.addComment = function () {
			$scope.comments.push({"id": new Date().getTime(), "comment": $scope.commentform.new});
			$scope.commentform.new = "";
		}

		$scope.saveDetails = function () {
			console.log($scope.book);
		}

		$scope.saveAuthor = function () {
			console.log($scope.author);
		}

		$scope.details(1);
	})
;