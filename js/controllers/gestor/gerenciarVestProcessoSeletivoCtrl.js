var app = angular.module("app.vest", []);

app.controller("gerenciarVestProcessoSeletivoCtrl", function ($scope, VestProcessoSeletivoAPI) {
	
	var listaDeVestProcessoSeletivos = function () {
        VestProcessoSeletivoAPI.listaDeVests().then(function (response) {
            $scope.vests = response.data;
            console.log("deu certo");
        }), function (response) {
            console.log("ñ deu certo");
        };
    };
    listaDeVestProcessoSeletivos();
});