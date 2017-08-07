var app = angular.module('app')

app.controller('loginController', function($scope, $state, $http, configValue){	
	
	$scope.autenticacao = function (login) {  	
    	$http.post(configValue.baseUrl + "/login", login).then(function(response){
        console.log(response);
      }, function(response){
        console.log(response);
      });
  	};  	

  	$scope.goToAluno = function () {  	
    	$state.go('homeAluno');
  	};

  	$scope.goToProfessor = function () {  	
    	$state.go('homeProfessor');
  	};  	

});