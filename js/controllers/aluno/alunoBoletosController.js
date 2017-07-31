var app = angular.module('app')
app.controller('alunoBoletosController', function($scope, $state){				

	$scope.filtroSituacaoSelecionada = function (situacao) {  	
		alert(situacao);
	};

	$scope.boletos = [
	{mesAno:"Jan/2017", dataVenc:"05/01/2017", valor:"980,00", situacao:"Pago", dataPgto:"04/01/2017", valorPago:"980,00", boleto:"-"},
	{mesAno:"Fev/2017", dataVenc:"05/02/2017", valor:"980,00", situacao:"Pago", dataPgto:"04/02/2017", valorPago:"980,00", boleto:"-"},
	{mesAno:"Mar/2017", dataVenc:"05/03/2017", valor:"980,00", situacao:"Atrasado", dataPgto:"-", valorPago:"-", boleto:"-"},
	{mesAno:"Abr/2017", dataVenc:"05/04/2017", valor:"980,00", situacao:"Atrasado", dataPgto:"-", valorPago:"-", boleto:"-"},
	{mesAno:"Mai/2017", dataVenc:"05/05/2017", valor:"980,00", situacao:"A Pagar", dataPgto:"-", valorPago:"-", boleto:"-"},
	{mesAno:"Jun/2017", dataVenc:"05/06/2017", valor:"980,00", situacao:"A Pagar", dataPgto:"-", valorPago:"-", boleto:"-"},
	{mesAno:"Jul/2017", dataVenc:"05/07/2017", valor:"980,00", situacao:"A Pagar", dataPgto:"-", valorPago:"-", boleto:"-"},
	{mesAno:"Ago/2017", dataVenc:"05/08/2017", valor:"980,00", situacao:"A Pagar", dataPgto:"-", valorPago:"-", boleto:"-"},
	{mesAno:"Set/2017", dataVenc:"05/09/2017", valor:"980,00", situacao:"A Pagar", dataPgto:"-", valorPago:"-", boleto:"-"},
	{mesAno:"Out/2017", dataVenc:"05/10/2017", valor:"980,00", situacao:"A Pagar", dataPgto:"-", valorPago:"-", boleto:"-"},
	{mesAno:"Nov/2017", dataVenc:"05/11/2017", valor:"980,00", situacao:"A Pagar", dataPgto:"-", valorPago:"-", boleto:"-"},
	{mesAno:"Dez/2017", dataVenc:"05/12/2017", valor:"980,00", situacao:"A Pagar", dataPgto:"-", valorPago:"-", boleto:"-"},	
	]

	initialiJquery();

})