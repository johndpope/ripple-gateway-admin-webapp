'use strict';

angular.module('publicApp')
  .controller('LoginCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.login = function () {
			var name = $scope.user.name;
			var password = $scope.user.password;
			var confirmation = $scope.user.password_confirmation;
			$http.post('/api/session', {
				name: name,
				password: password
			})	
			.success(function(response){
        if (response.isValidUser) {
					$location.path('/admin/users');
				} else {
					$location.path('/admin/users/new');
				}
			})
			.error(function(err){
				console.log('error: could not create a session');
			});
		}
  }]);
