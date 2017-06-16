var app = angular.module('app');
app.controller('gerenciarCursosController', function($scope, $rootScope, $state, $http, configValue){		

	

	$scope.carregarCursos = function () {			
		$http.get('http://localhost:8080/IEscolarUniversitario/universitario/curso').then(function success(response) {
			$rootScope.cursos = response.data;
			
    	}, function error(response) {
    		console.log("error");
    		console.log(response);
      
    	});
		
	};
	
	$scope.carregarCursos();

});