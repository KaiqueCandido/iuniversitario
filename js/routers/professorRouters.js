var app = angular.module('app');

app.config(function($stateProvider, $urlRouterProvider) {        

    $stateProvider

    .state('homeProfessor', {
        cache: false,
        url: '/homeProfessor',
        views: {
            'header':{
                templateUrl: 'pages/professor/headerProfessor.html',
                controller: 'headerProfessorController'
            },
            'content':{
                templateUrl: 'pages/professor/home.html',
                controller: 'mainProfessorController'
            },
            'footer':{
                templateUrl: 'pages/footer.html'
            }
        }    
    });		

});