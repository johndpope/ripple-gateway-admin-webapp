'use strict';

angular.module('publicApp')
  .controller('AdminNewUserCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.submit = function () {
			var name = $scope.user.name;
			var password = $scope.user.password;
			var confirmation = $scope.user.password_confirmation;
      if (password == confirmation) {
		    $http.post('/api/v1/users', {
					name: name,
					password: password
				})	
				.success(function(user){
					$location.path('/admin/users');
				})
				.error(function(err){
					console.log('could not create user for some reason');
				});
			}
		}
  }]);
