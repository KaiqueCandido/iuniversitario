var app = angular.module('app')
app.controller('headerProfessorController', function($scope, $state){	

	$scope.homeProfessor = function () {  	
		$state.go('homeProfessor');
	}; 	

	$scope.logout = function(){
		$state.go("login");
	};

	initialiJquery();

})