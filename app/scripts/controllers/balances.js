'use strict';

angular.module('publicApp')
  .controller('BalancesCtrl', ['$scope', '$http', function ($scope, $http) {
		$scope.balances = [];

		function getBalances() {
			$http.get('/api/v1/balances')
			.success(function(balances) {
				$scope.balances = balances;
			})
			.error(function(err) {
				console.log({ error: err });
			});
		}

		getBalances();
  }]);
