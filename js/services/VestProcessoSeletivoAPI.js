var app = angular.module("app.vest");

app.service("VestProcessoSeletivoAPI", function($http, apiConfigValue){
	let _listaDeVests = function() {
		return $http.get(apiConfigValue.baseUrl + "/vestprocessoseletivo");
	};

	return {
		listaDeVests : _listaDeVests
	}
});