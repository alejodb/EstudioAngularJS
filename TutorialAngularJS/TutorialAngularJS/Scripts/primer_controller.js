var app = angular.module("MiPrimeraApp", []);
app.controller("FirstController", function ($scope) {
    $scope.nuevoComentario = {};
    $scope.comentarios = [
        {
            comentario: "Buen tutorial",
            nombre: "Pedrito"
        },
        {
            comentario: "Chevere",
            nombre: "Pablito"
        }
    ];
    $scope.agregarComentario = function () {
        $scope.comentarios.push($scope.nuevoComentario);
    }
});