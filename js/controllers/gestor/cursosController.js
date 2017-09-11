var app = angular.module('app');
app.controller('cursosController', function($scope, $rootScope, $state, $http, configValue, cursoService){		
	$scope.selecionado = true;
	$scope.cursoSelecionado = {};	
	$scope.cursoSelecionadoInativo = true;	
	$scope.cursos = [{sigla:'-', nome:'-', status:'-'}];	
	$scope.curso = {};
	$scope.statusDasEntidades = 'ATIVO';

	/*Listar cursos do banco*/
	$scope.listarCursos = function() {
		cursoService.listar().then(function sucess(response) {		
			if (response.data.length > 0){
				$rootScope.pageLoading = false;
				$scope.cursos = response.data;
			} else {
				Materialize.toast('Não foi possivel encontrar registros!', 5000, 'rounded toasts-warning');
				$rootScope.pageLoading = false;
			}				
		}, function error() {
			$rootScope.pageLoading = false;
			Materialize.toast('Não foi possivel carregar os cursos, por favor tente novamente!', 5000, 'rounded toasts-warning');
		});
	};

	$scope.selecionaCurso = function(curso) {
		if(curso.selecionado === 'grey') {
			curso.selecionado = 'none';
			$scope.selecionado = true;
			$scope.cursoSelecionadoInativo = true;
		} else {
			if (curso.statusDoCadastro === 'ATIVO') {
				$scope.limpaSelecoes();
				curso.selecionado = 'grey';
				$scope.selecionado = false;			
				$scope.cursoSelecionado = curso;
			} else {
				$scope.limpaSelecoes();
				curso.selecionado = 'grey';
				$scope.cursoSelecionado = curso;
				$scope.cursoSelecionadoInativo = false;
			}			
		}
	};	

	$scope.limpaSelecoes = function(){
		$scope.cursos.forEach(function(curso){
			curso.selecionado = 'none';
		});
	};	

	
	$scope.listarCursos();
	initialiJquery();

});