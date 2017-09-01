var app = angular.module('app');
app.controller('vestibularController', function($scope, $rootScope, $state, $http, configValue){			
	$scope.selecionado = true;
	$scope.vestibularSelecionado = {};

	$scope.selecionaVestibular = function(vestibular) {
		if(vestibular.selecionado === 'grey') {
			vestibular.selecionado = 'none';
			$scope.selecionado = true;
		} else {
			$scope.limpaSelecoes();
			vestibular.selecionado = 'grey';
			$scope.selecionado = false;			
			$scope.vestibularSelecionado = vestibular;
		}
	};

	$scope.limpaSelecoes = function(){
		$scope.vestibulares.forEach(function(vestibular){
			vestibular.selecionado = 'none';
		});
	};	

	$scope.vestibulares = [
	{ano:'2016', semestre:1, status:'Aberto'},
	{ano:'2016', semestre:2, status:'Finalizado'},
	{ano:'2017', semestre:1, status:'Cancelado'}
	];

	initialiJquery();

});