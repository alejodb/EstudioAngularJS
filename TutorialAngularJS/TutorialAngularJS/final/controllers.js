angular.module("EjercicioFinal")
.controller("MainController", function ($scope, $resource) {
    servicioEstudiante = $resource("/api/Estudiantes/:id", { id: "@id" });
    servicioUsuarios = $resource("http://jsonplaceholder.typicode.com/users/:id", { id: "@id" });

    $scope.estudiantes = servicioEstudiante.query();
    $scope.users = servicioUsuarios.query();
});