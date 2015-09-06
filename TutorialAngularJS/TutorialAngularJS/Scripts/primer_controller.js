var app = angular.module("MiPrimeraApp", []);
app.controller("FirstController", ["$scope", function (miScope) {
    miScope.nuevoComentario = {};
    miScope.nombre = "Alejo"
    miScope.comentarios = [
        {
            comentario: "Buen tutorial",
            nombre: "Pedrito"
        },
        {
            comentario: "Chevere",
            nombre: "Pablito"
        }
    ];
    miScope.agregarComentario = function () {
        miScope.comentarios.push(miScope.nuevoComentario);
        miScope.nuevoComentario = {};
    }
}]);