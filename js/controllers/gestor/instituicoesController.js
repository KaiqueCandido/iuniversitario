var app = angular.module('app');
app.controller('instituicoesController', function($scope, $rootScope, $state, $http, configValue){		
	$scope.selecionado = true;
	$scope.instituicaoSelecionada = {};

	$scope.selecionaInstituicao = function(instituicao) {
		if(instituicao.selecionado === 'grey') {
			instituicao.selecionado = 'none';
			$scope.selecionado = true;
		} else {
			$scope.limpaSelecoes();
			instituicao.selecionado = 'grey';
			$scope.selecionado = false;			
			$scope.instituicaoSelecionada = instituicao;
		}
	};

	$scope.limpaSelecoes = function(){
		$scope.instituicoes.forEach(function(instituicao){
			instituicao.selecionado = 'none';
		});
	};		
	
	$scope.instituicoes = [
	{sigla:'IFPB', nome:'Instituto Federal de Ciencia e Tecnologia da Paraiba', status:'ATIVO'},
	{sigla:'UFCG', nome:'Universidade Federal de Campina Grande', status:'ATIVO'}
	]

	initialiJquery();

});