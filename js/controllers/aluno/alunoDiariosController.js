var app = angular.module('app')
app.controller('alunoDiariosController', function($scope, $state){	

	$scope.diarios = [	
	{disciplina:"Programação Orientada a Objetos", avaliacoes:[
	{nome:"1° avaliação", descricao:"Avaliação sobre introdução a orientação a objetos", nota:"8.0", peso:"100", observaocao:"Poderia melhorar"},
	{nome:"2° avaliação", descricao:"Avaliação sobre paradigmas da programação", nota:"7.0", peso:"100", observaocao:"Passou se arrastando"},
	{nome:"3° avaliação", descricao:"Seminario sobre Collections", nota:"10.0", peso:"100", observaocao:"Exelente"}
	], mediaFinal:"8.5"},			
	{disciplina:"Estrutura de Dados", avaliacoes:[
	{nome:"Avaliação 02", descricao:"Descricao 1", nota:"nota", peso:"peso", observaocao:"observacao"}
	], mediaFinal:"9.5"},			
	]

	initialiJquery();

})