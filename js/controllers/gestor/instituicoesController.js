var app = angular.module('app');
app.controller('instituicoesController', function($scope, $rootScope, $state, $http, configValue, instituicaoService, cepService){		
	$scope.selecionado = true;
	$scope.instituicaoSelecionadaInativa = true;
	$scope.instituicaoSelecionada = {};
	$scope.instituicoes = [];	
	$scope.estados = [];	
	$scope.estadoSelecionado = {};		
	$scope.statusDasEntidades = 'ATIVO';
	$scope.instituicao = {};
	$scope.instituicao.endereco = {};
	$scope.instituicao.endereco.estado = {};
	$scope.instituicao.endereco.cidade = {};

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

	$scope.pesquisaEstadoECidade = function (cep) {
		cepService.buscarEstadoECidade(cep).then(function sucess(response) {
			if(typeof response.data.erro === 'undefined') {
				$rootScope.pageLoading = false;			
				$scope.instituicao.endereco.estado.uf = response.data.uf; 
				$scope.instituicao.endereco.cidade.nome = response.data.localidade; 
				$scope.instituicao.endereco.cidade.codigoMunicipio = response.data.ibge; 				
			} else {				
				$rootScope.pageLoading = false;			
				Materialize.toast('O cep informado não existe na base de dados!', 5000, 'rounded toasts-error');
				delete $scope.instituicao.endereco.estado.uf;
				delete $scope.instituicao.endereco.cidade.nome;
				delete $scope.instituicao.endereco.cidade.codigoMunicipio;				
			}			
		}, function error() {
			$rootScope.pageLoading = false;
			Materialize.toast('O cep informado é invalido!', 5000, 'rounded toasts-error');
			delete $scope.instituicao.endereco.estado.uf;
			delete $scope.instituicao.endereco.cidade.nome;
			delete $scope.instituicao.endereco.cidade.codigoMunicipio;				
		});		
	}

	$scope.pesquisaEstadoECidadeEdicaoDeInstituicao = function (cep) {
		cepService.buscarEstadoECidade(cep).then(function sucess(response) {
			if(typeof response.data.erro === 'undefined') {
				$rootScope.pageLoading = false;			
				$scope.instituicaoSelecionada.endereco.estado.uf = response.data.uf; 
				$scope.instituicaoSelecionada.endereco.cidade.nome = response.data.localidade; 
				$scope.instituicaoSelecionada.endereco.cidade.codigoMunicipio = response.data.ibge; 				
			} else {				
				$rootScope.pageLoading = false;			
				Materialize.toast('O cep informado não existe na base de dados!', 5000, 'rounded toasts-error');
				delete $scope.instituicaoSelecionada.endereco.estado.uf;
				delete $scope.instituicaoSelecionada.endereco.cidade.nome;
				delete $scope.instituicaoSelecionada.endereco.cidade.codigoMunicipio;				
			}			
		}, function error() {
			$rootScope.pageLoading = false;
			Materialize.toast('O cep informado é invalido!', 5000, 'rounded toasts-error');
			delete $scope.instituicaoSelecionada.endereco.estado.uf;
			delete $scope.instituicaoSelecionada.endereco.cidade.nome;
			delete $scope.instituicaoSelecionada.endereco.cidade.codigoMunicipio;				
		});		
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

	/*Editar Instituicao*/
	$scope.editarInstituicao = function(instituicaoSelecionada) {		
		instituicaoService.atualizar(instituicaoSelecionada).then(function sucess(response) {
			$rootScope.pageLoading = false;
			Materialize.toast('A instituicao ' + instituicaoSelecionada.nome + ' foi atualizada com sucesso!', 5000, 'rounded toasts-sucess');
			$scope.listarInstituicoes();
			delete $scope.instituicaoSelecionada;
			$('#modalConfirmacaoAtualizacaoDeInstituicao').modal('close');
			$('#modalEditarInstituicao').modal('close');
		}, function error() {
			$rootScope.pageLoading = false;
			Materialize.toast('Não foi possivel atualizar a instituição, por favor tente novamente!', 5000, 'rounded toasts-error');
			$('#modalConfirmacaoAtualizacaoDeInstituicao').modal('close');
		});
	};

	$scope.excluirInstituicao = function() {				
		instituicaoService.excluir($scope.instituicaoSelecionada).then(function sucess(response) {
			$rootScope.pageLoading = false;
			Materialize.toast('A instituição ' + $scope.instituicaoSelecionada.nome + ' foi INATIVADA!', 5000, 'rounded toasts-sucess');
			$scope.listarInstituicoes();			
			delete $scope.instituicaoSelecionada;
			$scope.selecionado = true;
			$('#modalConfirmacaoExclusaoDeInstituicao').modal('close');
		}, function error() {
			$rootScope.pageLoading = false;
			Materialize.toast('Não foi possivel excluir a instituição, por favor tente novamente!', 5000, 'rounded toasts-error');
		});
	}
	
	$scope.ativarInstituicao = function() {							
		instituicaoService.ativar($scope.instituicaoSelecionada).then(function sucess(response) {
			$rootScope.pageLoading = false;
			Materialize.toast('Instituição ' + $scope.instituicaoSelecionada.nome + ' foi ATIVADA!', 5000, 'rounded toasts-sucess');
			$scope.listarInstituicoes();			
			delete $scope.instituicaoSelecionada;			
			$scope.instituicaoSelecionadaInativa = true;
			$('#modalConfirmacaoAtivacaoDeInstituicao').modal('close');
		}, function error() {
			$rootScope.pageLoading = false;
			Materialize.toast('Não foi possivel ativar a instituição, por favor tente novamente!', 5000, 'rounded toasts-warning');
		});
	}

	$scope.alternaStatusDasEntidades = function(){
		$scope.statusDasEntidades === 'ATIVO' ? $scope.statusDasEntidades = 'INATIVO' : $scope.statusDasEntidades = 'ATIVO';
		$scope.selecionado = true;		
		$scope.instituicaoSelecionadaInativa = true;
		$scope.limpaSelecoes();
	}

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
	iniciarJquery();

});