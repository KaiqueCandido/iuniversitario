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

        .state('notFound', {
            cache: false,
            url: '/notFound',
            views : {
                'content':{
                    templateUrl: 'pages/404.html',
                    controller: 'notFoundController'
                }
            }            
        });                
});