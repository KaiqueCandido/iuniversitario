var app = angular.module('app')
app.controller('mainAlunoController', function($scope, $state){		

	$scope.avisos = [
	{id:0, titulo:"Aviso numero 1", descricao:"1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"},		
	{id:1, titulo:"Aviso numero 2", descricao:"2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"},				
	]

	$scope.abrirAviso = function(idAviso) {		
		$scope.avisoSelecionado = $scope.avisos[idAviso];
		$('#modal').modal('open');
	}

	initialiJquery();

})