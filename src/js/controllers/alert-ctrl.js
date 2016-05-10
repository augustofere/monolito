/**
 * Alerts Controller
 */

angular
    .module('monolito')
    .controller('AlertsCtrl', ['$scope', AlertsCtrl]);

function AlertsCtrl($scope) {
    $scope.alerts = [
        
        {
            type: 'success',
            msg: 'Alerta Verde! Avisos de sucesso e conclusões de atividades/ordens!'
        }, 
        
        {
            type: 'danger',
            msg: 'Alerta Vermelho! Avisos de fracassos e não cumprimento de atividades/ordens!'
        },
        
        {
            type: 'warning',
            msg: 'Alerta Amarelo! Aviso para observância de prazos e acompanhamento de atividades/ordens a vencer!'
        },
        
        {
            type: 'info',
            msg: 'Alerta Azul! Informações de caráter geral e de sistema, postado por atores pertinentes.'
        }
        
    ];

    $scope.addAlert = function() {
        $scope.alerts.push({
            msg: 'Another alert!'
        });
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
}