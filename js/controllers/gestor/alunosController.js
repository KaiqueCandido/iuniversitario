var app = angular.module('app');
app.controller('alunosController', function ($scope, $rootScope, $state) {    
	$scope.selecionado = true;
	$scope.alunoSelecionadoInativo = true;
	$scope.alunoSelecionado = {};
	$scope.alunos = [{nome:'-', sobrenome:'-', statusDoCadastro:'-'}];	
	$scope.estados = [];	
	$scope.estadoSelecionado = {};		
	$scope.statusDasEntidades = '-';
	$scope.aluno = {};
	$scope.aluno.endereco = {};
	$scope.aluno.endereco.estado = {};
	$scope.aluno.endereco.cidade = {};

	$scope.racas = [
	{nome:"Branca", value: "BRANCA"}, 
	{nome: "Preta", value: "PRETA"},
	{nome: "Parda", value: "PARDA"},
	{nome: "Amarela", value: "AMARELA"},
	{nome: "Indígena", value: "INDIGENA"}, 
	{nome: "Não Declarada", value: "NAODECLARADA"}
	];
	$scope.estadoCivis = [
	{nome:"Casado", value: "CASADO"}, 
	{nome: "Solteiro", value: "SOLTEIRO"},
	{nome: "Viúvo", value: "VIUVO"},
	{nome: "Divorciado", value: "DIVORCIADO"},
	];
	$scope.tiposSanguineos = [
	{nome:"A+", value: "PosA"}, 
	{nome: "A-", value: "NegA"},
	{nome: "B+", value: "PosB"},
	{nome: "B-", value: "NegB"},
	{nome: "AB+", value: "PosAB"},
	{nome: "AB-", value: "NegAB"},
	{nome: "O+", value: "PosO"},
	{nome: "O-", value: "NegO"},
	];

	$scope.salvarAluno(){
		alunoService.salvar(aluno).then(function sucess (response){

		}function error (response){

		});
	}

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
	
	iniciarJquery();	

});