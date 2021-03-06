var app = angular.module('app');
app.controller('disciplinasController', function($scope, $rootScope, $state, disciplinaService){		
	$scope.selecionado = true;
	$scope.disciplinaSelecionadaInativa = true;
	$scope.disciplinaSelecionada = {};
	$scope.disciplinas = [];
	$scope.disciplinasPreRequisitos = [];
	$scope.disciplina = {};
	$scope.statusDasEntidades = 'ATIVO';

	/*Listar disciplinas do banco*/
	$scope.listarDisciplinas = function() {
		disciplinaService.listar().then(function sucess(response) {	
		console.log(response);	
			if(response.data.length > 0 ){
				$scope.statusDasEntidades = 'ATIVO';
				$rootScope.pageLoading = false;
				$scope.disciplinas = response.data;
			}else{
				$rootScope.pageLoading = false;
				Materialize.toast('Não foram encontrados registros!', 5000, 'rounded toasts-warning');

			}	
		}, function error() {
			$rootScope.pageLoading = false;
			Materialize.toast('Não foi possivel carregar as disciplinas, por favor tente novamente!', 5000, 'rounded toasts-warning');
		});
	};

	/*Salvar Disciplina*/
	$scope.salvarDisciplina = function(disciplina) {
		if ($scope.possuiPreRequisitos){
			disciplina.preRequisitos = [];
			$scope.disciplinas.forEach( function(currentValue) {			
				if (currentValue.selected === true) disciplina.preRequisitos.push(currentValue);
			});	
			if(disciplina.preRequisitos.length > 0) {
				disciplinaService.salvar(disciplina).then(function sucess(response) {
					$rootScope.pageLoading = false;
					Materialize.toast('Disciplina ' + disciplina.nome + ' foi cadastrada com sucesso!', 5000, 'rounded toasts-sucess');
					$scope.listarDisciplinas();
					delete $scope.disciplina;
				}, function error() {
					$rootScope.pageLoading = false;
					Materialize.toast('Não foi possivel cadastrar a disciplina, por favor tente novamente!', 5000, 'rounded toasts-error');		
				});
			} else {
				Materialize.toast('A opção de Pré-requisitos foi selecionada, então marque no minimo uma disciplina listada!', 5000, 'rounded toasts-warning');
			}			
		} else {
			disciplinaService.salvar(disciplina).then(function sucess(response) {
				$rootScope.pageLoading = false;
				Materialize.toast('Disciplina ' + disciplina.nome + ' foi cadastrada com sucesso!', 5000, 'rounded toasts-sucess');
				$scope.listarDisciplinas();
				delete $scope.disciplina;
			}, function error() {
				$rootScope.pageLoading = false;
				Materialize.toast('Não foi possivel cadastrar a disciplina, por favor tente novamente!', 5000, 'rounded toasts-error');		
			});
		}		
	};

	/*Editar Disciplina*/
	$scope.editarDisciplina = function(disciplina) {
		if ($scope.possuiPreRequisitos){
			disciplina.preRequisitos = [];
			$scope.disciplinas.forEach( function(currentValue) {			
				if (currentValue.selected === true) disciplina.preRequisitos.push(currentValue);
			});	
			if(disciplina.preRequisitos.length > 0) {
				disciplinaService.atualizar(disciplina).then(function sucess(response) {
					$rootScope.pageLoading = false;															
					Materialize.toast('Disciplina ' + disciplina.nome + ' foi editada com sucesso!', 5000, 'rounded toasts-sucess');
					$('#modalEditarDisciplina').modal('close');
					$('#modalConfirmacaoAtualizacaoDeDisciplina').modal('close');
					$scope.listarDisciplinas();
					delete $scope.disciplina;
					delete $scope.disciplinaSelecionada;
				}, function error() {
					$rootScope.pageLoading = false;
					Materialize.toast('Não foi possivel editar a disciplina, por favor tente novamente!', 5000, 'rounded toasts-error');		
				});
			} else {
				Materialize.toast('A opção de Pré-requisitos foi selecionada, então marque no minimo uma disciplina listada!', 5000, 'rounded toasts-warning');
			}			
		} else {
			disciplina.preRequisitos = [];
			disciplinaService.atualizar(disciplina).then(function sucess(response) {
				$rootScope.pageLoading = false;
				Materialize.toast('Disciplina ' + disciplina.nome + ' foi editada com sucesso!', 5000, 'rounded toasts-sucess');
				$('#modalEditarDisciplina').modal('close');
				$('#modalConfirmacaoAtualizacaoDeDisciplina').modal('close');
				$scope.listarDisciplinas();
				delete $scope.disciplina;
				delete $scope.disciplinaSelecionada;
			}, function error() {
				$rootScope.pageLoading = false;
				Materialize.toast('Não foi possivel editada a disciplina, por favor tente novamente!', 5000, 'rounded toasts-error');		
			});
		}		
	};	

	$scope.excluirDisciplina = function() {				
		disciplinaService.excluir($scope.disciplinaSelecionada).then(function sucess(response) {
			$rootScope.pageLoading = false;
			Materialize.toast('A disciplina ' + $scope.disciplinaSelecionada.nome + ' foi INATIVADA!', 5000, 'rounded toasts-sucess');
			$scope.listarDisciplinas();			
			delete $scope.disciplinaSelecionada;
			$scope.selecionado = true;
			$('#modalConfirmacaoExclusaoDeDisciplina').modal('close');
		}, function error() {
			$rootScope.pageLoading = false;
			Materialize.toast('Não foi possivel excluir a disciplina, por favor tente novamente!', 5000, 'rounded toasts-error');
		});
	}

	$scope.ativarDisciplina = function() {							
		disciplinaService.ativar($scope.disciplinaSelecionada).then(function sucess(response) {
			$rootScope.pageLoading = false;
			Materialize.toast('Disciplina ' + $scope.disciplinaSelecionada.nome + ' foi ATIVADA!', 5000, 'rounded toasts-sucess');
			$scope.listarDisciplinas();			
			delete $scope.disciplinaSelecionada;			
			$scope.disciplinaSelecionadaInativa = true;
			$('#modalConfirmacaoAtivacaoDeDisciplina').modal('close');
		}, function error() {
			$rootScope.pageLoading = false;
			Materialize.toast('Não foi possivel ativar a disciplina, por favor tente novamente!', 5000, 'rounded toasts-warning');
		});
	}

	$scope.alternaStatusDasEntidades = function(){
		$scope.statusDasEntidades === 'ATIVO' ? $scope.statusDasEntidades = 'INATIVO' : $scope.statusDasEntidades = 'ATIVO';
		$scope.selecionado = true;
		$scope.disciplinaSelecionadaInativa = true;
		$scope.limpaSelecoes();
	}

	$scope.prepararCadastroDeDisciplina = function() {
		$scope.disciplinas.forEach(function(disciplina){			
			disciplina.selected = false;		
			$scope.possuiPreRequisitos = false;						
		});			
	};

	$scope.prepararEdicaoDeDisciplina = function() {
		$scope.disciplinas.forEach(function(disciplina){
			$scope.disciplinaSelecionada.preRequisitos.forEach(function(disciplinaPreRequisito) {
				if(disciplina.id === disciplinaPreRequisito.id){
					disciplina.selected = true;		
					$scope.possuiPreRequisitos = true;			
				}
			});			
		});
		$scope.disciplinas.forEach(function(disciplina){		
			if(disciplina.selected)	
				console.log(disciplina);
		});
	};

	$scope.selecionaDisciplina = function(disciplina) {
		if(disciplina.selecionado === 'grey') {
			disciplina.selecionado = 'none';
			$scope.selecionado = true;
			$scope.disciplinaSelecionadaInativa = true;
		} else {
			if (disciplina.statusDoCadastro === 'ATIVO'){
				$scope.limpaSelecoes();
				disciplina.selecionado = 'grey';
				$scope.selecionado = false;			
				$scope.disciplinaSelecionada = disciplina;
			} else {
				$scope.limpaSelecoes();
				disciplina.selecionado = 'grey';
				$scope.disciplinaSelecionada = disciplina;
				$scope.disciplinaSelecionadaInativa = false;
			}
		}
	};

	$scope.limpaSelecoes = function(){
		$scope.disciplinas.forEach(function(disciplina){
			disciplina.selecionado = 'none';
		});
	};			

	$scope.listarDisciplinas();
	iniciarJquery();	

});