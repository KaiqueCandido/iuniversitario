var app = angular.module('app');

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/login');
    
    $stateProvider
                
        .state('login', {
            url: '/login',
            templateUrl: 'pages/login.html',
            controller: 'loginController'
        })

		.state('homeGestor', {
            url: '/homeGestor',
            templateUrl: 'pages/gestor/home.html',
            controller: 'homeGestorController'
        })

        .state("homeGestor.gerenciarCursos", {
        	cache: false,
			url:"/gestorGerenciarCursos",
			views:{
				'menuGestorContent':{
					templateUrl:"pages/gestor/gerenciarCursos.html",
					controller:"gerenciarCursosController"
				}
			}								
		})        
        
});