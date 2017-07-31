var app = angular.module('app')
app.controller('alunoHorarioDasAulasController', function($scope, $state){	

	$scope.horarios = [
	{horarioInicio:"07:00", horarioTermino:"07:50", segunda:"Música", terca:"Ciência", quarta:"Geografia", quinta:"Música", sexta:"Redação", sabado:"Música"},	
	{horarioInicio:"07:50", horarioTermino:"04:40", segunda:"Geografia", terca:"Música", quarta:"Música", quinta:"Ciência", sexta:"Música", sabado:"Redação"},	
	{horarioInicio:"08:40", horarioTermino:"09:30", segunda:"Música", terca:"Redação", quarta:"Música", quinta:"Geografia", sexta:"Ciência", sabado:"-"},	
	{horarioInicio:"09:45", horarioTermino:"10:35", segunda:"Ciência", terca:"Música", quarta:"Geografia", quinta:"Redação", sexta:"Música", sabado:"-"},	
	{horarioInicio:"10:35", horarioTermino:"11:25", segunda:"Redação", terca:"Música", quarta:"Ciência", quinta:"Música", sexta:"Geografia", sabado:"-"},	
	]

	initialiJquery();

})