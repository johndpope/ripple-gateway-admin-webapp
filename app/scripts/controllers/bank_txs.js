'use strict';

angular.module('publicApp')
  .controller('BankTxsCtrl', ['$scope', '$http', function ($scope, $http) {
		$scope.bankTransactions = [];

		function getBankTransactions() {
			$http.get('/api/v1/bank_transactions')
			.success(function(bankTransactions) {
				$scope.bankTransactions = bankTransactions;
			})
			.error(function(err) {
				console.log({ error: err });
			});
		}

		getBankTransactions();
  }]);
