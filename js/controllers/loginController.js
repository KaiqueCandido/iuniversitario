var app = angular.module('app')
app.controller('loginController', function($scope, $state, $http, configValue){	
	
	$scope.autenticacao = function (login) {  	
    	$state.go('homeGestor')
  	}  	

})