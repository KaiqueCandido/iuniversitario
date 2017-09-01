var app = angular.module('app');
app.controller('alunosController', function ($scope, $rootScope, $state) {    
	$scope.selecionado = true;
	$scope.alunoSelecionado = {};

	$scope.selecionaAluno = function(aluno) {
		if(aluno.selecionado === 'grey') {
			aluno.selecionado = 'none';
			$scope.selecionado = true;
		} else {
			$scope.limpaSelecoes();
			aluno.selecionado = 'grey';
			$scope.selecionado = false;			
			$scope.alunoSelecionado = aluno;
		}
	};

	$scope.limpaSelecoes = function(){
		$scope.alunos.forEach(function(aluno){
			aluno.selecionado = 'none';
		});
	};	

	$scope.alunos = [
	{nome:'Kaique Candido', email:'kaique@email.com', status:'Ativo'},
	{nome:'Kaique Candido', email:'kaique@email.com', status:'Ativo'},
	{nome:'Kaique Candido', email:'kaique@email.com', status:'Ativo'},
	{nome:'Kaique Candido', email:'kaique@email.com', status:'Ativo'},
	{nome:'Kaique Candido', email:'kaique@email.com', status:'Ativo'},
	{nome:'Kaique Candido', email:'kaique@email.com', status:'Ativo'}
	]


	initialiJquery();

});