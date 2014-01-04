'use strict';

angular.module('publicApp')
  .controller('RippleTxsCtrl', ['$scope', '$http', function ($scope, $http) {
		$scope.rippleTransactions = [];
		$scope.rippleTransaction = {};

		function getRippleTransactions() {
			$http.get('/api/v1/ripple_transactions')
			.success(function(rippleTransactions) {
				$scope.rippleTransactions = rippleTransactions;
			})
			.error(function(err) {
				console.log({ error: err });
			});
		}

		function create() {
			$http.post("/api/v1/ripple_transactions/inbound", $scope.rippleTransaction)
			.success(function(response){
				console.log(response);
				getRippleTransactions();
			})
			.error(function(err){
				try {
					var pared = JSON.parse(err.error);
					err.error = parsed;
				} catch(e){}
				console.log(err);
			});
		}

		$scope.create = create;
		getRippleTransactions();
  }]);
