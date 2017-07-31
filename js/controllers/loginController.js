var app = angular.module('app')

app.controller('loginController', function($scope, $state, $http, configValue){	
	
	$scope.autenticacao = function (login) {  	
    	$state.go('homeGestor');
  	};  	

  	$scope.goToAluno = function () {  	
    	$state.go('homeAluno');
  	};

  	$scope.goToProfessor = function () {  	
    	$state.go('homeProfessor');
  	};  	

});