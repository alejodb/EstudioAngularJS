angular.module("ModuloProbarFiltros", [])
    .filter("miFiltroQuitarHtml", function () {
        return function (texto) {
            return String(texto).replace(/<[^>]+>/gm, '');
        }
    })
    .controller("FiltrosController", function($scope){
        $scope.mihtml = "<p>Hola mundo</p>"
        $scope.objetoprueba = {};
        $scope.objetoprueba.titulo = "Saludo";
        $scope.objetoprueba.descripcion = "Hola Mundo";
        $scope.valor = 2;
    });