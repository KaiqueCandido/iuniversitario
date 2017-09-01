var app = angular.module('app');
app.controller('diariosController', function($scope, $rootScope, $state, $http, configValue){	
	$scope.selecionado = true;
	$scope.diarioSelecionada = {};

	$scope.selecionaDiario = function(diario) {
		if(diario.selecionado === 'grey') {
			diario.selecionado = 'none';
			$scope.selecionado = true;
		} else {
			$scope.limpaSelecoes();
			diario.selecionado = 'grey';
			$scope.selecionado = false;			
			$scope.diarioSelecionada = diario;
		}
	};

	$scope.limpaSelecoes = function(){
		$scope.diarios.forEach(function(diario){
			diario.selecionado = 'none';
		});
	};
	

	$scope.diarios = [
	{serie:'Serie', turma:'Turma', turno:'Turno', disciplina:'Disciplina', cargaHoraria:'CargaHoraria', professor:'Professor', status:'Ativo'},
	{serie:'Serie', turma:'Turma', turno:'Turno', disciplina:'Disciplina', cargaHoraria:'CargaHoraria', professor:'Professor', status:'Ativo'},
	{serie:'Serie', turma:'Turma', turno:'Turno', disciplina:'Disciplina', cargaHoraria:'CargaHoraria', professor:'Professor', status:'Ativo'}
	]	
	
	initialiJquery();

});