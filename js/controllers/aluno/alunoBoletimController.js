var app = angular.module('app')
app.controller('alunoBoletimController', function($scope, $state){	
	

	$scope.boletins = [
	{situacao:"Aprovado", disciplina:"Programação Orientada a Objetos", mf:"9.0", totalDeFaltas:"0.0", freq:"100%"},		
	{situacao:"Reprovado", disciplina:"Estrutura de Dados", mf:"5.0", totalDeFaltas:"15", freq:"75%"},		
	{situacao:"Cursando", disciplina:"Trabalho de Conclusão de Curso 2", mf:"-", totalDeFaltas:"-", freq:"-"},		
	]

	initialiJquery();

})