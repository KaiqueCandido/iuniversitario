var app = angular.module("app.vestprocessoseletivo");

app.service("VestProcessoSeletivoAPI", function($http, apiConfigValue){
	let _listaDeVests = function() {
		return $http.get(apiConfigValue.baseUrl + "/vestprocessoseletivo");
	};

	return {
		listaDeVests : _listaDeVests
	}
});