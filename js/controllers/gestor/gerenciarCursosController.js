var app = angular.module('app');
app.controller('gerenciarCursosController', function($scope, $rootScope, $state, $http, configValue){		

	$scope.cursos = [
		{sigla:"ADS",nome:"ANÁLISE E DESENVOLVIMENTO DE SISTEMAS",valorMensalidade:450.99,statusDoCadastro:"ATIVO"},
		{sigla:"AI",nome:"AUTOMAÇÃO INDUSTRIAL",valorMensalidade:450.99,statusDoCadastro:"ATIVO"},
		{sigla:"MAT",nome:"LICENCIATURA EM MATEMÁTICA",valorMensalidade:450.99,statusDoCadastro:"ATIVO"},{sigla:"AI",nome:"AUTOMAÇÃO INDUSTRIAL",valorMensalidade:450.99,statusDoCadastro:"ATIVO"},
		{sigla:"MAT",nome:"LICENCIATURA EM MATEMÁTICA",valorMensalidade:450.99,statusDoCadastro:"ATIVO"},{sigla:"AI",nome:"AUTOMAÇÃO INDUSTRIAL",valorMensalidade:450.99,statusDoCadastro:"ATIVO"},
		{sigla:"MAT",nome:"LICENCIATURA EM MATEMÁTICA",valorMensalidade:450.99,statusDoCadastro:"ATIVO"},{sigla:"AI",nome:"AUTOMAÇÃO INDUSTRIAL",valorMensalidade:450.99,statusDoCadastro:"ATIVO"},
		{sigla:"MAT",nome:"LICENCIATURA EM MATEMÁTICA",valorMensalidade:450.99,statusDoCadastro:"ATIVO"},{sigla:"AI",nome:"AUTOMAÇÃO INDUSTRIAL",valorMensalidade:450.99,statusDoCadastro:"ATIVO"},
		{sigla:"MAT",nome:"LICENCIATURA EM MATEMÁTICA",valorMensalidade:450.99,statusDoCadastro:"ATIVO"},
		{sigla:"EC",nome:"ENGENHARIA CIVIL",valorMensalidade:450.99,statusDoCadastro:"ATIVO"}

	]

	$scope.carregarCursos = function () {			
		$http.get('http://localhost:8080/IEscolarUniversitario/universitario/curso').then(function success(response) {
			$rootScope.cursos = response.data;			
    	}, function error(response) {
    		console.log("error");
    		console.log(response);      
    	});
		
	};

	$scope.selecionaCurso = function (curso) {
		console.log(curso.data);
	}	
	
	$scope.carregarCursos();
	
	initialiJquery();

});