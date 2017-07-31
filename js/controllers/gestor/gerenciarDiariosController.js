var app = angular.module('app');
app.controller('gerenciarDiariosController', function($scope, $rootScope, $state, $http, configValue){	

	$scope.diarios = [
	{nome:"Diario 1"},
	{nome:"Diario 2"},
	{nome:"Diario 3"},
	{nome:"Diario 4"},
	{nome:"Diario 5"},
	{nome:"Diario 6"},
	{nome:"Diario 7"}	
	]	
	
	initialiJquery();

});