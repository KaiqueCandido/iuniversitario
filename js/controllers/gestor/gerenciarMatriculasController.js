var app = angular.module('app');
app.controller('gerenciarMatriculasController', function($scope, $rootScope, $state, $http, configValue){	

	$scope.matriculas = [
	{cod:"20122201.10335"},
	{cod:"20122201.10336"},
	{cod:"20122201.10337"},
	{cod:"20122201.10338"},
	{cod:"20122201.10339"},
	{cod:"20122201.10310"},
	{cod:"20122201.10311"},
	{cod:"20122201.10312"},
	{cod:"20122201.10313"},
	{cod:"20122201.10314"},
	{cod:"20122201.10315"},	
	]	
	
	initialiJquery();

});