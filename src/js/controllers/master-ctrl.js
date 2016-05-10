/**
 * Master Controller
 */

angular.module('monolito')
    .controller('MasterCtrl', ['$scope', '$cookieStore', MasterCtrl]);

function MasterCtrl($scope, $cookieStore) {
    /**
     * Sidebar Toggle & Cookie Control
     */
    var mobileView = 992;

    $scope.titulo = "Home";
    // $scope.subtitulo = "Home / Dashboard";
    // $scope.usuario = "José da Silva";

    $scope.getWidth = function() {
        return window.innerWidth;
    };

    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
        if (newValue >= mobileView) {
            if (angular.isDefined($cookieStore.get('toggle'))) {
                $scope.toggle = ! $cookieStore.get('toggle') ? false : true;
            } else {
                $scope.toggle = true;
            }
        } else {
            $scope.toggle = false;
        }

    });

    $scope.toggleSidebar = function() {
        $scope.toggle = !$scope.toggle;
        $cookieStore.put('toggle', $scope.toggle);
    };

    // $scope.mudaTitulo = function( opcaoTitulo, opcaoSubtitulo ) {

    //     $scope.titulo = opcaoTitulo;
    //     $scope.subtitulo = opcaoSubtitulo;
        
    //     $cookieStore.put('titulo', $scope.titulo);
    //     $cookieStore.put('subtitulo', $scope.subtitulo);

    //     // console.log(opcaoTitulo);
    //     // console.log(opcaoSubtitulo);

    // };

    window.onresize = function() {
        $scope.$apply();
    };
}