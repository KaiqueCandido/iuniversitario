var app = angular.module('app')
app.controller('headerAlunoController', function($scope, $state){	

	$scope.homeAluno = function () {  	
		$state.go('homeAluno');
	}; 

	$scope.meusArquivos = function () {  	
		$state.go('alunoMeusArquivos');
	}; 

	$scope.avaliacaoInstitucional = function () {  	
		$state.go('alunoAvaliacaoInstitucional');
	}; 

	$scope.boletos = function () {  	
		$state.go('alunoBoletos');
	}; 

	$scope.boletim = function () {  	
		$state.go('alunoBoletim');
	}; 

	$scope.diarios = function () {  	
		$state.go('alunoDiarios');
	}; 

	$scope.notas = function () {  	
		$state.go('alunoNotas');
	}; 

	$scope.historico = function () {  	
		$state.go('alunoHistorico');
	}; 

	$scope.alteraSenha = function () {  	
		$state.go('alunoAlteraSenha');
	}; 

	$scope.horarioDasAulas = function () {  	
		$state.go('alunoHorarioDasAulas');
	}; 

	$scope.logout = function(){
		$state.go("login");
	};

	$scope.notificacoes = [
	{titulo:'titulo 1', notificacao:'notificacao 1'},
	{titulo:'titulo 1', notificacao:'notificacao 1'},
	{titulo:'titulo 1', notificacao:'notificacao 1'}
	]

	$scope.possuoNotificacoes = function(){
		return $scope.notificacoes.length > 0;
	}

	$scope.alunoNotifications = function(){		
		if ($scope.possuoNotificacoes()){
			$('#modalAlunoNotificacoes').modal('open');
		} else {			
			Materialize.toast('Você não possui novas notificações!', 4000);
		}
	}

	initialiJquery();

})