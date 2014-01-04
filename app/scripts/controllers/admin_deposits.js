'use strict';

angular.module('publicApp')
  .controller('AdminDepositsCtrl', ['$scope', '$http', function ($scope, $http) {
		$scope.deposits = [];

		function getDeposits() {
			$http.get('/api/v1/deposits')
			.success(function(deposits) {
				$scope.deposits = deposits;
			})
			.error(function(err) {
				console.log({ error: err });
			});
		}

    $scope.createDeposit = function () {
			var bankAccountId = $scope.deposit.bankAccountId;
			var currency = $scope.deposit.currency;
			var cashAmount = $scope.deposit.cashAmount;
			$http.post('/api/v1/deposits', { 
				currency: currency, 
				cashAmount: cashAmount,
				bankAccountId: bankAccountId
			})	
			.success(function(response){
				console.log(response);
				getDeposits();
			})
			.error(function(err){
				console.log({ error: err });
			});
		}

		getDeposits();
  }]);
