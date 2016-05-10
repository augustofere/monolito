'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('monolito').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'templates/dashboard/dashboard.html'
            })
            .state('ordens', {
                url: '/ordens',
                templateUrl: 'templates/ordens/ordens.html'
            })
            .state('relatorios', {
                url: '/relatorios',
                templateUrl: 'templates/relatorios/relatorios.html'
            })
            .state('ler_comunicado', {
                url: '/ler_comunicado',
                templateUrl: 'templates/dashboard/comunicados/ler_comunicado.html',
            })
            .state('inserir_comunicado', {
                url: '/inserir_comunicado',
                templateUrl: 'templates/dashboard/comunicados/inserir_comunicado.html',
            })
            .state('ler_ordem', {
                url: '/ler_ordem',
                templateUrl: 'templates/ordens/ler_ordem.html',
            })
            .state('emitir_ordem', {
                url: '/emitir_ordem',
                templateUrl: 'templates/ordens/emitir_ordem.html',
            })
            .state('acompanhamento_ordem', {
                url: '/acompanhamento_ordem',
                templateUrl: 'templates/ordens/acompanhamento_ordem.html',
            })
    }
]);