var app = angular.module('app')
app.controller('alunoAlteraSenhaController', function($scope, $state){	

	$scope.alterarSenhaAluno = function(senhaAntiga, novaSenha, confirmarNovaSenha){		
		/*1 - verificar se a senha antiga bate com a informada*/

		/*1 - verificar se a nova senha e a confirmação de senha são iguais*/
		if (typeof senhaAntiga != "undefined" && typeof novaSenha != "undefined" && typeof confirmarNovaSenha != "undefined"){
			if (novaSenha === confirmarNovaSenha){
				if (senhaAntiga === novaSenha){
					Materialize.toast('A nova senha precisa ser diferente da senha antiga!', 4000);
				} else {
					$('#modalConfirmacaTrocaSenha').modal('open');
				}
			} else {
				Materialize.toast('As senhas informadas não batem!', 4000);
			}			
		}			
	}

	$scope.cancelarAlteracaoDeSenhaAluno = function(){
		$state.go('homeAluno');
	}

	initialiJquery();

})