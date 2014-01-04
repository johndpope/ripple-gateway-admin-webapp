'use strict';

angular.module('publicApp')
  .controller('BankAccountsCtrl', ['$scope', '$http', function ($scope, $http) {
		$scope.bankAccounts = [];
		$scope.bankAccount = {};

		function getBankAccounts() {
			$http.get('/api/v1/bank_accounts')
			.success(function(bankAccounts) {
				$scope.bankAccounts = bankAccounts;
			})
			.error(function(err) {
				console.log({ error: err });
			});
		}

		$scope.createBankAccount = function(){
			console.log($scope.bankAccount);
			$http.post('/api/v1/bank_accounts', $scope.bankAccount)
			.success(function(bankAccount){
			  console.log(bankAccount); 	
				getBankAccounts();
			})
			.error(function(err){
				console.log({ error: err });
			})
		}

		getBankAccounts();
		console.log($scope.bankAccount);
  }]);
