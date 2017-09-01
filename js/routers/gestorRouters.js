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
                templateUrl:"pages/gestor/instituicoes.html",
                controller:"instituicoesController"
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
                templateUrl:"pages/gestor/vestibular.html",
                controller:"vestibularController"
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
                templateUrl:"pages/gestor/cursos.html",
                controller:"cursosController"
            },   
            'footer':{
                templateUrl: 'pages/footer.html'
            }             
        }                               
    })

    .state("gestorGerenciarDisciplinas", {
        cache: false,
        url:"/gestorGerenciarDisciplinas",
        views:{                
            'header':{
                templateUrl: 'pages/gestor/headerGestor.html',
                controller: 'headerGestorController'
            },
            'content':{
                templateUrl:"pages/gestor/disciplinas.html",
                controller:"disciplinasController"
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
                templateUrl:"pages/gestor/alunos.html",
                controller:"alunosController"
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
                templateUrl:"pages/gestor/matriculas.html",
                controller:"matriculasController"
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
                templateUrl:"pages/gestor/diarios.html",
                controller:"diariosController"
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
                templateUrl:"pages/gestor/graficos.html",
                controller:"graficosController"
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
                templateUrl:"pages/gestor/imprimirRelatorios.html",
                controller:"imprimirRelatoriosController"
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
                controller:"envioDeSmsController"
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
                controller:"envioDeEmailController"
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
                controller:"trocarSenhaController"
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
    });		

});