angular.module("EjercicioFinal")
.controller("MainController", function ($scope, $resource, servicioEstudiantes) {
    servicioUsuarios = $resource("http://jsonplaceholder.typicode.com/users/:id", { id: "@id" });

    $scope.estudiantes = servicioEstudiantes.query();
    $scope.users = servicioUsuarios.query();

    $scope.eliminarEstudiante = function (estudiante) {
        servicioEstudiantes.delete({ id: estudiante.ID }, function (data) {
            console.log(data);
            $scope.estudiantes = $scope.estudiantes.filter(function (element) {
                return element.ID !== estudiante.ID;
            });
        });
    }
})
.controller("EstudianteController", function ($scope, servicioEstudiantes, $routeParams, $location) {
    $scope.titulo = "Editar estudiante";
    $scope.estudiante = servicioEstudiantes.get({ id: $routeParams.id });

    $scope.guardarEstudiante = function () {
        servicioEstudiantes.update({ id: $scope.estudiante.id }, { estudiante: $scope.estudiante }, function (data) {
            console.log(data);
            $location.path("/");
        });
    }
})
.controller("NuevoEstudianteController", function ($scope, servicioEstudiantes, $location) {
    $scope.estudiante = {};
    $scope.titulo = "Crear estudiante";
    $scope.guardarEstudiante = function () {
        servicioEstudiantes.save($scope.estudiante, function (data) {
            console.log(data);
            $location.path("/");
        });
    }
});