var app = angular.module('app')
app.controller('headerGestorController', function($scope, $state){	

	$scope.homeGestor = function () {  			
		$state.go('homeGestor');
	}; 

	$scope.gerenciarInstituicoes = function () {			
		$state.go('gestorGerenciarInstituicoes');					
	};

	$scope.gerenciarVestibular = function () {			
		$state.go('gestorGerenciarVestibular');					
	};

	$scope.gerenciarCursos = function () {						
		$state.go('gestorGerenciarCursos');					
	};	

	$scope.gerenciarAlunos = function(){
		$state.go("gestorGerenciarAlunos");
	};

	$scope.gerenciarMatriculas = function(){
		$state.go("gestorGerenciarMatriculas");
	};

	$scope.gerenciarDiarios = function(){
		$state.go("gestorGerenciarDiarios");
	};

	$scope.gerenciarGraficos = function(){
		$state.go("gestorGerenciarGraficos");
	};

	$scope.gerenciarImprimirRelatorios = function(){
		$state.go("gestorGerenciarImprimirRelatorios");
	};

	$scope.gerenciarEnvioDeEmail = function(){		
		$state.go("gestorEnvioDeEmail");
	};

	$scope.gerenciarEnvioDeSms = function(){		
		$state.go("gestorEnvioDeSms");
	};

	$scope.gerenciarTrocarSenha = function(){		
		$state.go("gestorTrocarSenha");
	};

	$scope.logout = function(){
		$state.go("login");
	};

	initialiJquery();

})