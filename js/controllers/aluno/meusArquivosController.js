var app = angular.module('app')
app.controller('alunoMeusArquivosController', function($scope, $state){		

	$scope.arquivos = [
	{nome:"Nome do arquivo 1"},
	{nome:"Nome do arquivo 2"},
	{nome:"Nome do arquivo 3"},
	{nome:"Nome do arquivo 4"},
	{nome:"Nome do arquivo 5"},
	{nome:"Nome do arquivo 6"},
	{nome:"Nome do arquivo 7"},
	{nome:"Nome do arquivo 8"},
	{nome:"Nome do arquivo 9"},	
	]

	initialiJquery();

})