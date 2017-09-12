var app = angular.module('app');
app.controller('instituicoesController', function($scope, $rootScope, $state, $http, configValue, instituicaoService, estadoService){		
	$scope.selecionado = true;
	$scope.instituicaoSelecionadaInativa = true;
	$scope.instituicaoSelecionada = {};
	$scope.instituicoes = [{sigla:'-', nome:'-', statusDoCadastro:'-'}];	
	$scope.estados = [];	
	$scope.estadoSelecionado = {};	
	$scope.instituicao = {};
	$scope.statusDasEntidades = '-';

	/*Listar instituições do banco*/
	$scope.listarInstituicoes = function() {
		instituicaoService.listar().then(function sucess(response) {
			if(response.data.length > 0) {
				$scope.statusDasEntidades = 'ATIVO';
				$rootScope.pageLoading = false;
				$scope.instituicoes = response.data;		
			} else {
				$rootScope.pageLoading = false;
				Materialize.toast('Não foram encontrados registros!', 5000, 'rounded toasts-warning');
			}			
		}, function error() {
			$rootScope.pageLoading = false;
			Materialize.toast('Não foi possivel carregar as instituições, por favor tente novamente!', 5000, 'rounded toasts-error');
		});
	};

	$scope.listarEstados = function() {
		estadoService.listar().then(function sucess(response) {
			if(response.data.length > 0) {								
				$rootScope.pageLoading = false;				
				$scope.estados = response.data;				
			} else {
				$rootScope.pageLoading = false;
				Materialize.toast('Não existe Estados cadastrados na aplicação!', 5000, 'rounded toasts-warning');
			}			
		}, function error() {
			$rootScope.pageLoading = false;
			Materialize.toast('Não foi possivel carregar os estados, por favor tente novamente!', 5000, 'rounded toasts-error');
		});
	};

	$scope.listarCidades = function() {

		console.log('estado');
		
	}

	$scope.prepararCadastroDeinstituicao = function () {
		$scope.listarEstados();			
		setTimeout(function(){
			$('select').material_select();
		},100);					
	}

	/*Salvar Instituicao*/
	$scope.salvarInstituicao = function(instituicao) {
		instituicaoService.salvar(instituicao).then(function sucess(response) {
			$rootScope.pageLoading = false;
			Materialize.toast('A instituicao ' + instituicao.nome + ' foi cadastrada com sucesso!', 5000, 'rounded toasts-sucess');
			$scope.listarInstituicoes();
			delete $scope.instituicao;
		}, function error() {
			$rootScope.pageLoading = false;
			Materialize.toast('Não foi possivel cadastrar a instituição, por favor tente novamente!', 5000, 'rounded toasts-error');		
		});
	};

	$scope.selecionaInstituicao = function(instituicao) {
		if(instituicao.selecionado === 'grey') {
			instituicao.selecionado = 'none';
			$scope.selecionado = true;
			$scope.instituicaoSelecionadaInativa = true;
		} else {
			if (instituicao.statusDoCadastro === 'ATIVO'){
				$scope.limpaSelecoes();
				instituicao.selecionado = 'grey';
				$scope.selecionado = false;			
				$scope.instituicaoSelecionada = instituicao;
			} else {
				$scope.limpaSelecoes();
				instituicao.selecionado = 'grey';
				$scope.instituicaoSelecionada = instituicao;
				$scope.instituicaoSelecionadaInativa = false;
			}
		}
	};

	$scope.limpaSelecoes = function(){
		$scope.instituicoes.forEach(function(instituicao){
			instituicao.selecionado = 'none';
		});
	};				

	$scope.listarInstituicoes();	

});