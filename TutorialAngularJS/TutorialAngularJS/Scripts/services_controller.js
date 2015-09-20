angular.module("TodoListApp", ["LocalStorageModule"])
.service('TodoService', function (localStorageService) {

    // para que quede dentro del closure y nadie tenga acceso
    var key = "angular-todolist";

    if (localStorageService.get(key)) {
        this.actividades = localStorageService.get(key);
    }
    else {
        this.actividades = [];
    }

    this.adicionarActividad = function (nuevaActividad) {
        this.actividades.push(nuevaActividad);
        this.actualizarLocalStorage();
        return this.consultarTodas();
    };

    this.limpiarActividades = function () {
        this.actividades = [];
        this.actualizarLocalStorage();
        return this.consultarTodas();
    };

    this.consultarTodas = function () {
        return this.actividades;
    };

    this.eliminarActividad = function (actividad) {
        this.actividades = this.actividades.filter(function (elemento) {
            return elemento !== actividad;
        });
        this.actualizarLocalStorage();
        return this.consultarTodas();
    };

    this.actualizarLocalStorage = function () {
        localStorageService.set(key, this.actividades);
    };
})
.controller("TodoListController", function ($scope, TodoService) {

    $scope.nuevaActividad = {};

    $scope.todo = TodoService.consultarTodas();

    $scope.adicionarActividad = function () {
        $scope.todo = TodoService.adicionarActividad($scope.nuevaActividad);
        $scope.nuevaActividad = {};
    }
    $scope.eliminarActividad = function (actividad) {
        $scope.todo = TodoService.eliminarActividad(actividad);
    }

    $scope.limpiarActividades = function () {
        $scope.todo = TodoService.limpiarActividades();
    }
});