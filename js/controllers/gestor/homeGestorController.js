var app = angular.module('app')
app.controller('homeGestorController', function($scope, $state){	

	$scope.gerenciarCursos = function () {		
		$state.go('homeGestor.gerenciarCursos');					
	};

})