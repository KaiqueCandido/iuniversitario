var app = angular.module('app');
app.controller('alunosController', function ($scope, $document, $rootScope, $state, $http, configValue, alunoService, enumService) {    
	$scope.selecionado = true;
	$scope.alunoSelecionado = {};
	$scope.alunoSelecionadoInativo = true;
	$scope.alunos = [{nome:'-', sobrenome:'-', email: '-', statusDoCadastro:'-'}];	
	$scope.aluno = {};
	$aluno.conta.matricula = {};
	$scope.estados = [];	
	$scope.estadoSelecionado = {};		
	$scope.statusDasEntidades = '-';
	$scope.aluno.endereco = {};
	$scope.aluno.endereco.estado = {};
	$scope.aluno.endereco.cidade = {};
	$scope.estadosCivis = enumService.getEstadosCivis();
	$scope.racas = enumService.getRacas();
	$scope.tiposSanguineos = enumService.getTiposSanguineos();
	$scope.statusDasEntidades = '-';
	$scope.kkk = {};

	$scope.listarAlunos = function () {
		alunoService.listar().then(function sucess (response) {
			if (response.data.length > 0){
				$scope.statusDasEntidades = 'ATIVO';
				$rootScope.pageLoading = false;
				$scope.alunos = response.data;
			} else {
				Materialize.toast('Não foi possivel encontrar registros!', 5000, 'rounded toasts-warning');
				$rootScope.pageLoading = false;
			}	
		}, function error (response) {
			$rootScope.pageLoading = false;
			Materialize.toast('Não foi possivel carregar os alunos. Por favor, tente novamente mais tarde!', 5000, 'rounded toasts-warning');
		});
	};

	$scope.salvarAluno = function (aluno) {
		alunoService.salvar(aluno).then(function sucess (response){
			$rootScope.pageLoading = false;
			Materialize.toast('O aluno '+ aluno.nome + " " + aluno.sobrenome + ' foi adicionado com sucesso!', 5000, 'rounded toasts-sucess');
			delete $scope.aluno;
			$scope.listarAlunos();
		}, function error (response){
			$rootScope.pageLoading = false;
			Materialize.toast('Não foi possível cadastrar o aluno. Por favor, tente novamente mais tarde!', 5000, 'rounded toasts-error');
		});
	};
	
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

	$scope.changeOptionMenu = function(campo){
		var result = $document[0].getElementById(campo);
		result = angular.element(result).find('option');
		var valorSelecionado;
		angular.forEach(result,function (v,k){
			if(angular.element(v).prop('selected')){
				valorSelecionado = v.value;
			};
		});
		return valorSelecionado;
	}
	
	$scope.preparaSalvamentoAluno = function (aluno){
		aluno.raca = $scope.changeOptionMenu("etnia");
		aluno.estadoCivil = $scope.changeOptionMenu("estadoCivil");
		aluno.sexo = $scope.changeOptionMenu("sexo");
		aluno.tipoSanguineo = $scope.changeOptionMenu("tipoSanguineo");
		
		$scope.salvarAluno(aluno);
		console.log(aluno);
	};

	iniciarJquery();	
	
});

function testeSelect(campo, nome) {
	//console.log(campo);
	if(nome === 'raca'){
		var valorSelecionado = campo.options[campo.selectedIndex].value;

		console.log(valorSelecionado);
		return valorSelecionado;
	};

};