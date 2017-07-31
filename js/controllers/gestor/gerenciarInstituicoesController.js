var app = angular.module('app');
app.controller('gerenciarInstituicoesController', function($scope, $rootScope, $state, $http, configValue){			
	
	$scope.instituicoes = [
		{sigla:'IFPB', nome:'Instituto Federal de Ciencia e Tecnologia da Paraiba', status:'ATIVO'},
		{sigla:'UFCG', nome:'Universidade Federal de Campina Grande', status:'ATIVO'}
	]

	initialiJquery();

});