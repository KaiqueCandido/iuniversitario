var app = angular.module('app');
app.controller('alunosController', function ($scope, $document, $rootScope, $state, $http, configValue, alunoService, enumService,cepService) {    
	$scope.selecionado = true;
	$scope.alunoSelecionado = {};
	$scope.alunoSelecionadoInativo = true;
	$scope.alunos = [{nome:'-', sobreNome:'-', cpf: '-', email: '-', statusDoCadastro:'-'}];	
	$scope.aluno = {};
	//$scope.aluno.conta.matricula = {};
	$scope.aluno.conta = {};
	$scope.aluno.conta.login = {};
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
			Materialize.toast('O aluno '+ aluno.nome + " " + aluno.sobreNome + ' foi adicionado com sucesso!', 5000, 'rounded toasts-sucess');
			delete $scope.aluno;
			$scope.listarAlunos();
		}, function error (response){
			$rootScope.pageLoading = false;
			Materialize.toast('Não foi possível cadastrar o aluno. Por favor, tente novamente mais tarde!', 5000, 'rounded toasts-error');
			delete $scope.aluno;
		});
	};

	$scope.preparaSalvamentoAluno = function (aluno){
		console.log(aluno);
		aluno.raca = $scope.changeOptionMenu("etnia");
		aluno.estadoCivil = $scope.changeOptionMenu("estadoCivil");
		aluno.sexo = $scope.changeOptionMenu("sexo");
		aluno.tipoSanguineo = $scope.changeOptionMenu("tipoSanguineo");

		console.log(aluno.raca);
		console.log(aluno.estadoCivil);
		console.log(aluno.sexo);
		console.log(aluno.tipoSanguineo);
		
		aluno.conta.login = aluno.contato.email;
		$scope.salvarAluno(aluno);
		console.log(aluno);
	};

	$scope.editarAluno = function (alunoSelecionado) {				
		alunoService.atualizar(alunoSelecionado).then(function sucess (response){
			$rootScope.pageLoading = false;
			Materialize.toast('O aluno '+ alunoSelecionado.nome + " " + alunoSelecionado.sobreNome + ' foi atualizado com sucesso!', 5000, 'rounded toasts-sucess');
			delete $scope.alunoSelecionado;
			$scope.listarAlunos();
			$('#modalConfirmacaoAtualizacaoDeAluno').modal('close');
			$('#modalEditarAluno').modal('close');
		}, function error (response){
			$rootScope.pageLoading = false;
			Materialize.toast('Não foi possível atualizar o aluno. Por favor, tente novamente mais tarde!', 5000, 'rounded toasts-error');
			delete $scope.alunoSelecionado;
			$('#modalConfirmacaoAtualizacaoDeAluno').modal('close');
		});
	};

	$scope.prepararDadosParaEdicaoAluno = function () {
		//atualizar os selects com os valores salvos no banco
		$('select').material_select();
		//update nas labels dos campos, para ficarem ativas
		Materialize.updateTextFields();
	};

	$scope.preparaAtualizacaoAluno = function (alunoSelecionado){
		alunoSelecionado.raca = $scope.changeOptionMenu("etniaEdicao");
		alunoSelecionado.estadoCivil = $scope.changeOptionMenu("estadoCivilEdicao");
		alunoSelecionado.sexo = $scope.changeOptionMenu("sexoEdicao");
		alunoSelecionado.tipoSanguineo = $scope.changeOptionMenu("tipoSanguineoEdicao");
		alunoSelecionado.conta.login = alunoSelecionado.contato.email;
	};

	$scope.excluirAluno = function() {				
		alunoService.excluir($scope.alunoSelecionado).then(function sucess(response) {
			$rootScope.pageLoading = false;
			Materialize.toast('O aluno ' + $scope.alunoSelecionado.nome + ' ' + $scope.alunoSelecionado.sobreNome + ' foi INATIVADO!', 5000, 'rounded toasts-sucess');
			$scope.listarAlunos();			
			delete $scope.alunoSelecionado;
			$scope.selecionado = true;
			$('#modalConfirmacaoExclusaoDeAluno').modal('close');
		}, function error() {
			$rootScope.pageLoading = false;
			Materialize.toast('Não foi possivel excluir o aluno. Por favor, tente novamente mais tarde!', 5000, 'rounded toasts-error');
		});
	};
	
	$scope.ativarAluno = function (){
		alunoService.ativar($scope.alunoSelecionado).then(function sucess (response){
			$rootScope.pageLoading = false;
			Materialize.toast('O aluno ' + $scope.alunoSelecionado.nome + ' ' + $scope.alunoSelecionado.sobreNome + ' foi ATIVADO!', 5000, 'rounded toasts-sucess');
			$scope.listarAlunos();
			delete $scope.alunoSelecionado;
			$scope.alunoSelecionadoInativo = true;
			$('#modalConfirmacaoAtivacaoDeAluno').modal('close');
		});
	};

	$scope.alternaStatusDasEntidades = function(){
		$scope.statusDasEntidades === 'ATIVO' ? $scope.statusDasEntidades = 'INATIVO' : $scope.statusDasEntidades = 'ATIVO';
		$scope.selecionado = true;
		$scope.alunoSelecionadoInativo = true;
		$scope.limpaSelecoes();
	}

	$scope.selecionaAluno = function(aluno) {
		if(aluno.selecionado === 'grey') {
			aluno.selecionado = 'none';
			$scope.selecionado = true;
			$scope.alunoSelecionadoInativo = true;
		} else {
			if (aluno.statusDoCadastro === 'ATIVO'){
				$scope.limpaSelecoes();
				aluno.selecionado = 'grey';
				$scope.selecionado = false;			
				$scope.alunoSelecionado = aluno;
			} else {
				$scope.limpaSelecoes();
				aluno.selecionado = 'grey';
				$scope.alunoSelecionado = aluno;
				$scope.alunoSelecionadoInativo = false;
			}
		}
	};

	$scope.limpaSelecoes = function(){
		$scope.alunos.forEach(function(aluno){
			aluno.selecionado = 'none';
		});
	};	
	
	$scope.pesquisaEstadoECidade = function (cep) {
		cepService.buscarEstadoECidade(cep).then(function sucess(response) {
			if(typeof response.data.erro === 'undefined') {
				$rootScope.pageLoading = false;			
				$scope.aluno.endereco.estado.uf = response.data.uf; 
				$scope.aluno.endereco.cidade.nome = response.data.localidade; 
				$scope.aluno.endereco.cidade.codigoMunicipio = response.data.ibge; 				
			} else {				
				$rootScope.pageLoading = false;			
				Materialize.toast('O cep informado não existe na base de dados!', 5000, 'rounded toasts-error');
				delete $scope.aluno.endereco.estado.uf;
				delete $scope.aluno.endereco.cidade.nome;
				delete $scope.aluno.endereco.cidade.codigoMunicipio;				
			}			
		}, function error() {
			$rootScope.pageLoading = false;
			Materialize.toast('O cep informado é invalido!', 5000, 'rounded toasts-error');
			delete $scope.aluno.endereco.estado.uf;
			delete $scope.aluno.endereco.cidade.nome;
			delete $scope.aluno.endereco.cidade.codigoMunicipio;				
		});	
	};
//recupera os valores selecionados nos campos de select p/ salvar no banco
$scope.changeOptionMenu = function(campo){
	var result = $document[0].getElementById(campo);
	result = angular.element(result).find('option');
	var valorSelecionado;
	angular.forEach(result,function (v,k){
		if(angular.element(v).prop('selected')){
			valorSelecionado = v.value;
			console.log(valorSelecionado);
		};
	});
	return valorSelecionado;
};

$scope.listarAlunos();
iniciarJquery();	

});
