var app = angular.module('app');
app.controller('matriculasController', function($scope, $rootScope, $state, $http, configValue){	
	$scope.selecionado = true;
	$scope.matriculaSelecionada = {};

	$scope.selecionaMatricula = function(matricula) {
		if(matricula.selecionado === 'grey') {
			matricula.selecionado = 'none';
			$scope.selecionado = true;
		} else {
			$scope.limpaSelecoes();
			matricula.selecionado = 'grey';
			$scope.selecionado = false;			
			$scope.matriculaSelecionada = matricula;
		}
	};

	$scope.limpaSelecoes = function(){
		$scope.matriculas.forEach(function(matricula){
			matricula.selecionado = 'none';
		});
	};		

	$scope.matriculas = [
	{codMatricula:'20122201.10335', ano:'2014', status:'Inativo'},
	{codMatricula:'20122201.10336', ano:'2015', status:'Ativo'},
	{codMatricula:'20122201.10337', ano:'2016', status:'Ativo'},
	{codMatricula:'20122201.10338', ano:'2016', status:'Ativo'},
	{codMatricula:'20122201.10339', ano:'2017', status:'Ativo'}
	]	
	
	initialiJquery();

});