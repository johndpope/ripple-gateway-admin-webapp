'use strict';

angular.module('publicApp')
  .controller('UsersCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
		$scope.user = null;
		$scope.users = [];

		function updateUsers() {
			$http.get('/api/v1/users').success(function(users){
				$scope.users = users;
			});
		}

    $scope.submit = function () {
      if ($scope.user.password == $scope.user.password_confirmation) {
				delete $scope.user.password_confirmation;
		    $http.post('/api/v1/users', $scope.user)
				.success(function(user){
					updateUsers();
				})
				.error(console.log);
			}
		}

		updateUsers();
  }]);
