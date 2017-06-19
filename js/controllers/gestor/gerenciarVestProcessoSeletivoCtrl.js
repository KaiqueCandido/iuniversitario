var app = angular.module("app");

app.controller("gerenciarVestProcessoSeletivoCtrl", function ($scope, VestProcessoSeletivoAPI) {
	
	var listaDeVestProcessoSeletivo = function () {
        VestProcessoSeletivoAPI.listaDeVests().then(function (response) {
            $scope.vests = response.data;
            console.log("deu certo");
        }), function (response) {
            console.log("ñ deu certo");
        };
    };

    listaDeVestProcessoSeletivo();

});