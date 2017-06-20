var app = angular.module('app')
app.controller('homeGestorController', function($scope, $state){	

	$scope.homeGestor = function () {  	
    	$state.go('homeGestor');
  	}; 

	$scope.gerenciarCursos = function () {		
		$state.go('homeGestor.gerenciarCursos');					
	};

	$scope.gerenciarVestProcessoSeletivo = function(){
		$state.go("homeGestor.gerenciarVestProcessoSeletivo");
	};

	initialiJquery();

})