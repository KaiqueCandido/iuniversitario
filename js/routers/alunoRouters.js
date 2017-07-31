var app = angular.module('app');

app.config(function($stateProvider, $urlRouterProvider) {        

    $stateProvider

    .state('homeAluno', {
        cache: false,
        url: '/homeAluno',
        views: {
            'header':{
                templateUrl: 'pages/aluno/headerAluno.html',
                controller: 'headerAlunoController'
            },
            'content':{
                templateUrl: 'pages/aluno/home.html',
                controller: 'mainAlunoController'
            },
            'footer':{
                templateUrl: 'pages/footer.html'
            }
        }    
    })

    .state('alunoMeusArquivos', {
        cache: false,
        url: '/alunoMeusArquivos',
        views: {
            'header':{
                templateUrl: 'pages/aluno/headerAluno.html',
                controller: 'headerAlunoController'
            },
            'content':{
                templateUrl: 'pages/aluno/meusArquivos.html',
                controller: 'alunoMeusArquivosController'
            },
            'footer':{
                templateUrl: 'pages/footer.html'
            }
        }    
    })

    .state('alunoAvaliacaoInstitucional', {
        cache: false,
        url: '/alunoAvaliacaoInstitucional',
        views: {
            'header':{
                templateUrl: 'pages/aluno/headerAluno.html',
                controller: 'headerAlunoController'
            },
            'content':{
                templateUrl: 'pages/aluno/avaliacaoInstitucional.html',
                controller: 'alunoAvaliacaoInstitucionalController'
            },
            'footer':{
                templateUrl: 'pages/footer.html'
            }
        }    
    })

    .state('alunoBoletos', {
        cache: false,
        url: '/alunoBoletos',
        views: {
            'header':{
                templateUrl: 'pages/aluno/headerAluno.html',
                controller: 'headerAlunoController'
            },
            'content':{
                templateUrl: 'pages/aluno/boletos.html',
                controller: 'alunoBoletosController'
            },
            'footer':{
                templateUrl: 'pages/footer.html'
            }
        }    
    })

    .state('alunoBoletim', {
        cache: false,
        url: '/alunoBoletin',
        views: {
            'header':{
                templateUrl: 'pages/aluno/headerAluno.html',
                controller: 'headerAlunoController'
            },
            'content':{
                templateUrl: 'pages/aluno/boletim.html',
                controller: 'alunoBoletimController'
            },
            'footer':{
                templateUrl: 'pages/footer.html'
            }
        }    
    })

    .state('alunoDiarios', {
        cache: false,
        url: '/alunoDiarios',
        views: {
            'header':{
                templateUrl: 'pages/aluno/headerAluno.html',
                controller: 'headerAlunoController'
            },
            'content':{
                templateUrl: 'pages/aluno/diarios.html',
                controller: 'alunoDiariosController'
            },
            'footer':{
                templateUrl: 'pages/footer.html'
            }
        }    
    })

    .state('alunoNotas', {
        cache: false,
        url: '/alunoNotas',
        views: {
            'header':{
                templateUrl: 'pages/aluno/headerAluno.html',
                controller: 'headerAlunoController'
            },
            'content':{
                templateUrl: 'pages/aluno/notas.html',
                controller: 'alunoNotasController'
            },
            'footer':{
                templateUrl: 'pages/footer.html'
            }
        }    
    })

    .state('alunoHistorico', {
        cache: false,
        url: '/alunoHistorico',
        views: {
            'header':{
                templateUrl: 'pages/aluno/headerAluno.html',
                controller: 'headerAlunoController'
            },
            'content':{
                templateUrl: 'pages/aluno/historico.html',
                controller: 'alunoHistoricoController'
            },
            'footer':{
                templateUrl: 'pages/footer.html'
            }
        }    
    })

    .state('alunoAlteraSenha', {
        cache: false,
        url: '/alunoAlteraSenha',
        views: {
            'header':{
                templateUrl: 'pages/aluno/headerAluno.html',
                controller: 'headerAlunoController'
            },
            'content':{
                templateUrl: 'pages/aluno/alteraSenha.html',
                controller: 'alunoAlteraSenhaController'
            },
            'footer':{
                templateUrl: 'pages/footer.html'
            }
        }    
    })

    .state('alunoHorarioDasAulas', {
        cache: false,
        url: '/alunoHorarioDasAulas',
        views: {
            'header':{
                templateUrl: 'pages/aluno/headerAluno.html',
                controller: 'headerAlunoController'
            },
            'content':{
                templateUrl: 'pages/aluno/horarioDasAulas.html',
                controller: 'alunoHorarioDasAulasController'
            },
            'footer':{
                templateUrl: 'pages/footer.html'
            }
        }    
    });		

});