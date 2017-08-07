app = angular.module('app');
app.service('loginService', function($http, $state, configValue) {

	this.login = function(login) {
		return $http.post(configValue.baseUrl + '/login', login);
	}

	this.logout = function() {
		$state.go('login');
	}

});