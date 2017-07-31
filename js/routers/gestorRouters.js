var app = angular.module('app');

app.config(function($stateProvider, $urlRouterProvider) {        

    $stateProvider

    .state('homeGestor', {
        cache: false,
        url: '/homeGestor',
        views: {
            'header':{
                templateUrl: 'pages/gestor/headerGestor.html',
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

    .state("gestorGerenciarInstituicoes", {
        cache: false,
        url:"/gestorGerenciarInstituicoes",
        views:{                
            'header':{
                templateUrl: 'pages/gestor/headerGestor.html',
                controller: 'headerGestorController'
            },
            'content':{
                templateUrl:"pages/gestor/gerenciarInstituicoes.html",
                controller:"gerenciarInstituicoesController"
            },   
            'footer':{
                templateUrl: 'pages/footer.html'
            }             
        }                               
    })

    .state("gestorGerenciarVestibular", {
        cache: false,
        url:"/gestorGerenciarVestibular",
        views:{                
            'header':{
                templateUrl: 'pages/gestor/headerGestor.html',
                controller: 'headerGestorController'
            },
            'content':{
                templateUrl:"pages/gestor/gerenciarVestibular.html",
                controller:"gerenciarVestibularController"
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
                templateUrl: 'pages/gestor/headerGestor.html',
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

    .state("gestorGerenciarAlunos", {
        cache: false,
        url:"/gestorGerenciarAlunos",
        views:{                
            'header':{
                templateUrl: 'pages/gestor/headerGestor.html',
                controller: 'headerGestorController'
            },
            'content':{
                templateUrl:"pages/gestor/gerenciarAlunos.html",
                controller:"gerenciarAlunosController"
            },   
            'footer':{
                templateUrl: 'pages/footer.html'
            }             
        }                               
    })

    .state("gestorGerenciarMatriculas", {
        cache: false,
        url:"/gestorGerenciarMatriculas",
        views:{                
            'header':{
                templateUrl: 'pages/gestor/headerGestor.html',
                controller: 'headerGestorController'
            },
            'content':{
                templateUrl:"pages/gestor/gerenciarMatriculas.html",
                controller:"gerenciarMatriculasController"
            },   
            'footer':{
                templateUrl: 'pages/footer.html'
            }             
        }                               
    })

    .state("gestorGerenciarDiarios", {
        cache: false,
        url:"/gestorGerenciarDiarios",
        views:{                
            'header':{
                templateUrl: 'pages/gestor/headerGestor.html',
                controller: 'headerGestorController'
            },
            'content':{
                templateUrl:"pages/gestor/gerenciarDiarios.html",
                controller:"gerenciarDiariosController"
            },   
            'footer':{
                templateUrl: 'pages/footer.html'
            }             
        }                               
    })

    .state("gestorGerenciarGraficos", {
        cache: false,
        url:"/gestorGerenciarGraficos",
        views:{                
            'header':{
                templateUrl: 'pages/gestor/headerGestor.html',
                controller: 'headerGestorController'
            },
            'content':{
                templateUrl:"pages/gestor/gerenciarGraficos.html",
                controller:"gerenciarGraficosController"
            },   
            'footer':{
                templateUrl: 'pages/footer.html'
            }             
        }                               
    })

    .state("gestorGerenciarImprimirRelatorios", {
        cache: false,
        url:"/gestorGerenciarImprimirRelatorios",
        views:{                
            'header':{
                templateUrl: 'pages/gestor/headerGestor.html',
                controller: 'headerGestorController'
            },
            'content':{
                templateUrl:"pages/gestor/gerenciarImprimirRelatorios.html",
                controller:"gerenciarImprimirRelatoriosController"
            },   
            'footer':{
                templateUrl: 'pages/footer.html'
            }             
        }                               
    })

    .state("gestorEnvioDeSms", {
        cache: false,
        url:"/gestorEnvioDeSms",
        views:{                
            'header':{
                templateUrl: 'pages/gestor/headerGestor.html',
                controller: 'headerGestorController'
            },
            'content':{
                templateUrl:"pages/gestor/envioDeSms.html",
                controller:"gerenciarEnvioDeSmsController"
            },   
            'footer':{
                templateUrl: 'pages/footer.html'
            }             
        }                               
    })

    .state("gestorEnvioDeEmail", {
        cache: false,
        url:"/gestorEnvioDeEmail",
        views:{                
            'header':{
                templateUrl: 'pages/gestor/headerGestor.html',
                controller: 'headerGestorController'
            },
            'content':{
                templateUrl:"pages/gestor/envioDeEmail.html",
                controller:"gerenciarenvioDeEmailController"
            },   
            'footer':{
                templateUrl: 'pages/footer.html'
            }             
        }                               
    })

    .state("gestorTrocarSenha", {
        cache: false,
        url:"/gestorTrocarSenha",
        views:{                
            'header':{
                templateUrl: 'pages/gestor/headerGestor.html',
                controller: 'headerGestorController'
            },
            'content':{
                templateUrl:"pages/gestor/trocarSenha.html",
                controller:"gerenciarTrocarSenhaController"
            },   
            'footer':{
                templateUrl: 'pages/footer.html'
            }             
        }                               
    })

    .state("gestorCadastroDeAlunos", {
        cache: false,
        url:"/gestorCadastroDeAlunos",
        views:{                
            'header':{
                templateUrl: 'pages/gestor/headerGestor.html',
                controller: 'headerGestorController'
            },
            'content':{
                templateUrl:"pages/gestor/cadastros/cadastroDeAlunos.html",
                controller:"cadastroDeAlunosController"
            },   
            'footer':{
                templateUrl: 'pages/footer.html'
            }             
        }                               
    })    









    ;		

});