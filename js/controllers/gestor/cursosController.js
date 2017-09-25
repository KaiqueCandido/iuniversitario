var app = angular.module('app');
app.controller('cursosController', function($scope, $rootScope, $state, $http, configValue, cursoService,$filter){		
	$scope.selecionado = true;
	$scope.cursoSelecionado = {};	
	$scope.cursoSelecionadoInativo = true;	
	$scope.cursos = [];	
	$scope.curso = {};
	$scope.statusDasEntidades = 'ATIVO';

	/*Listar cursos do banco*/
	$scope.listarCursos = function() {
		cursoService.listar().then(function sucess(response) {		
			if (response.data.length > 0){
				$scope.statusDasEntidades = 'ATIVO';
				$rootScope.pageLoading = false;
				$scope.cursos = response.data;
			} else {
				Materialize.toast('Não foi possivel encontrar registros!', 5000, 'rounded toasts-warning');
				$rootScope.pageLoading = false;
			}				
		}, function error() {
			$rootScope.pageLoading = false;
			Materialize.toast('Não foi possivel carregar os cursos. Por favor, tente novamente mais tarde!', 5000, 'rounded toasts-warning');
		});
	};

	/* Author Priscila Gouveia*/
	
	$scope.salvarCurso = function (curso) {
		cursoService.salvar(curso).then(function sucess(response){
			$rootScope.pageLoading = false;
			Materialize.toast('O curso '+ curso.nome +' foi adicionado com sucesso!', 5000, 'rounded toasts-sucess');
			delete $scope.curso;
			$scope.listarCursos();
		},
		function error(response){
			$rootScope.pageLoading = false;
			Materialize.toast('Não foi possível cadastrar o curso. Por favor, tente novamente mais tarde!', 5000, 'rounded toasts-error');
		});
	};

	$scope.editarCurso = function (cursoSelecionado){
		cursoService.atualizar(cursoSelecionado).then(function sucess (response){
			$rootScope.pageLoading = false;
			Materialize.toast('O curso '+ cursoSelecionado.nome +' foi atualizado com sucesso!', 5000, 'rounded toasts-sucess');
			$('#modalEditarCurso').modal('close');
			$('#modalConfirmacaoAtualizacaoDeCurso').modal('close');
			delete $scope.curso;
			delete $scope.cursoSelecionado;
		}, 
		function error (response){
			$rootScope.pageLoading = false;
			Materialize.toast('Não foi possivel editar o curso. Por favor, tente novamente mais tarde!', 5000, 'rounded toasts-error');
		});
	};

	$scope.excluirCurso = function (){
		cursoService.excluir($scope.cursoSelecionado).then(function sucess (response){
			$rootScope.pageLoading = false;
			Materialize.toast('O curso '+ $scope.cursoSelecionado.nome +' foi INATIVADO!', 5000, 'rounded toasts-sucess');
			$scope.listarCursos();
			delete $scope.cursoSelecionado;
			$scope.selecionado = true;
			$('#modalConfirmacaoExclusaoDeCurso').modal('close');
		},
		function error (response){
			$rootScope.pageLoading = false;
			Materialize.toast('Não foi possível excluir o curso. Por favor, tente novamente mais tarde!', 5000, 'rounded toasts-error');
		});
	};

	$scope.ativarCurso = function (){
		cursoService.ativar($scope.cursoSelecionado).then(function sucess (response){
			$rootScope.pageLoading = false;
			Materialize.toast('O curso '+ $scope.cursoSelecionado.nome +' foi ATIVADO!', 5000, 'rounded toasts-sucess');
			$scope.listarCursos();
			delete $scope.cursoSelecionado;
			$scope.cursoSelecionadoInativo = true;
			$('#modalConfirmacaoAtivacaoDeCurso').modal('close');
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

	$scope.alternaStatusDasEntidades = function(){
		$scope.statusDasEntidades === 'ATIVO' ? $scope.statusDasEntidades = 'INATIVO' : $scope.statusDasEntidades = 'ATIVO';
		$scope.selecionado = true;
		$scope.cursoSelecionadoInativo = true;
		$scope.limpaSelecoes();
	}

	$scope.limpaSelecoes = function(){
		$scope.cursos.forEach(function(curso){
			curso.selecionado = 'none';
		});
	};	

	
	$scope.listarCursos();
	iniciarJquery();	

});