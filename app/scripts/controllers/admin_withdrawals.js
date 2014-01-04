'use strict';

angular.module('publicApp')
  .controller('AdminWithdrawalsCtrl', ['$scope', '$http', function ($scope, $http) {
		$scope.withdrawals = [];
		$scope.withdrawal = {};
		$scope.getWithdrawals = function () {
			$http.get('/api/v1/withdrawals')
			.success(function(withdrawals){
				$scope.withdrawals = withdrawals;
			})
			.error(function(err){
				console.log({ error: err });
			});
		}
		$scope.getWithdrawals();

    $scope.createWithdrawal = function () {
			$http.post('/api/v1/withdrawals', $scope.withdrawal)	
			.success(function(withdrawal){
				console.log(withdrawal);
				$scope.getWithdrawals();
			})
			.error(function(err){
				console.log({error: err});
			});
		}
  }]);
