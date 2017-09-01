var app = angular.module('app');
app.controller('cursosController', function($scope, $rootScope, $state, $http, configValue){		
	$scope.selecionado = true;
	$scope.cursoSelecionado = {};

	$scope.selecionaCurso = function(curso) {
		if(curso.selecionado === 'grey') {
			curso.selecionado = 'none';
			$scope.selecionado = true;
		} else {
			$scope.limpaSelecoes();
			curso.selecionado = 'grey';
			$scope.selecionado = false;			
			$scope.cursoSelecionado = curso;
		}
	};

	$scope.limpaSelecoes = function(){
		$scope.cursos.forEach(function(curso){
			curso.selecionado = 'none';
		});
	};	

	$scope.cursos = [
		{sigla:"ADS",nome:"ANÁLISE E DESENVOLVIMENTO DE SISTEMAS",valorMensalidade:450.99,status:"ATIVO"},
		{sigla:"AI",nome:"AUTOMAÇÃO INDUSTRIAL",valorMensalidade:450.99,status:"ATIVO"},
		{sigla:"MAT",nome:"LICENCIATURA EM MATEMÁTICA",valorMensalidade:450.99,status:"ATIVO"},{sigla:"AI",nome:"AUTOMAÇÃO INDUSTRIAL",valorMensalidade:450.99,status:"ATIVO"},
		{sigla:"MAT",nome:"LICENCIATURA EM MATEMÁTICA",valorMensalidade:450.99,status:"ATIVO"},{sigla:"AI",nome:"AUTOMAÇÃO INDUSTRIAL",valorMensalidade:450.99,status:"ATIVO"},
		{sigla:"MAT",nome:"LICENCIATURA EM MATEMÁTICA",valorMensalidade:450.99,status:"ATIVO"},{sigla:"AI",nome:"AUTOMAÇÃO INDUSTRIAL",valorMensalidade:450.99,status:"ATIVO"},
		{sigla:"MAT",nome:"LICENCIATURA EM MATEMÁTICA",valorMensalidade:450.99,status:"ATIVO"},{sigla:"AI",nome:"AUTOMAÇÃO INDUSTRIAL",valorMensalidade:450.99,status:"ATIVO"},
		{sigla:"MAT",nome:"LICENCIATURA EM MATEMÁTICA",valorMensalidade:450.99,status:"ATIVO"},
		{sigla:"EC",nome:"ENGENHARIA CIVIL",valorMensalidade:450.99,status:"ATIVO"}

	]	
	
	initialiJquery();

});