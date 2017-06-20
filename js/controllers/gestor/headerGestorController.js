var app = angular.module('app')
app.controller('headerGestorController', function($scope, $state){	

	$scope.homeGestor = function () {  	
    	$state.go('homeGestor');
  	}; 

	$scope.gerenciarCursos = function () {	
		console.log("chamou")	;
		$state.go('gestorGerenciarCursos');					
	};

	$scope.gerenciarVestProcessoSeletivo = function(){
		$state.go("homeGestor.gerenciarVestProcessoSeletivo");
	};

	initialiJquery();

})