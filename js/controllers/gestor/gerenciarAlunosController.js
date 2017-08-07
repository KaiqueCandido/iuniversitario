var app = angular.module('app');

app.controller('gerenciarAlunosController', function ($scope, $rootScope, $state) {

    $scope.alunos = [
        {nome: "Kaique Candido de Oliveira"},
        {nome: "Alexander Arcelino"},
        {nome: "Kaique Candido de Oliveira"},
        {nome: "Alexander Arcelino"},
        {nome: "Kaique Candido de Oliveira"},
        {nome: "Alexander Arcelino"},
        {nome: "Kaique Candido de Oliveira"},
        {nome: "Alexander Arcelino"}
    ];

    initialiJquery();

});