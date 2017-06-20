var app = angular.module('app');

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/login');      
    
    $stateProvider
                
        .state('login', {
            cache: false,
            url: '/login',
            views : {
                'content':{
                    templateUrl: 'pages/login.html',
                    controller: 'loginController'
                }
            }            
        })        

        .state('homeGestor', {
            cache: false,
            url: '/homeGestor',
            views: {
                'header':{
                    templateUrl: 'pages/header.html',
                    controller: 'headerGestorController'
                },
                'content':{
                    templateUrl: 'pages/gestor/home.html',
                    controller: 'contentGestorController'
                },
                'footer':{
                    templateUrl: 'pages/footer.html'
                }
            }    
        })		

        .state("gestorGerenciarCursos", {
        	cache: false,
			url:"/gestorGerenciarCursos",
			views:{                
                'header':{
                    templateUrl: 'pages/header.html',
                    controller: 'headerGestorController'
                },
                'content':{
                    templateUrl:"pages/gestor/gerenciarCursos.html",
                    controller:"gerenciarCursosController"
                },   
                'footer':{
                    templateUrl: 'pages/footer.html'
                }             
			}								
		})
        
        .state("homeGestor.gerenciarVestProcessoSeletivo", {
            cache: false,
            url : "/gestorVestProcessoSeletivo",
            views : {
                "menuGestorContent" : {
                    templateUrl : "pages/gestor/gerenciarVestProcessoSeletivo.html",
                    controller : "gerenciarVestProcessoSeletivoCtrl"
                }
            }
        });                
});