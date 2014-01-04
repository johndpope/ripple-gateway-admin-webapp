'use strict';

angular.module('publicApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/admin/balances', {
        templateUrl: 'views/balances.html',
        controller: 'BalancesCtrl'
      })
      .when('/admin/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })
			.when('/admin/bank_transactions', {
				templateUrl: 'views/bank_transactions.html',
				controller: 'BankTxsCtrl'
			})
			.when('/admin/ripple_transactions', {
				templateUrl: 'views/ripple_transactions.html',
				controller: 'RippleTxsCtrl'
			})
			.when('/api/docs', {
				templateUrl: 'views/api.html',
				controller: 'ApiDocsCtrl'
			})
			.when('/admin/withdrawals/new', {
				templateUrl: 'views/withdrawals/new.html',
				controller: 'AdminWithdrawalsCtrl'
			})
			.when('/admin/deposits/new', {
				templateUrl: 'views/deposits/new.html',
				controller: 'AdminDepositsCtrl'
			})
			.when('/admin/bank_accounts', {
				templateUrl: 'views/admin/bank_accounts/index.html',
				controller: 'BankAccountsCtrl'
			})
			.when('/admin/users/new', {
				templateUrl: 'views/admin/users/new.html',
				controller: 'AdminNewUserCtrl'
			})
			.when('/login', {
				templateUrl: 'views/main.html',
				controller: 'LoginCtrl'
			})
      .otherwise({
        redirectTo: '/'
      });
  });
