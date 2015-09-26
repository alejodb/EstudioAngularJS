angular.module("TodoListApp", ["LocalStorageModule"])
.factory('TodoService', function (localStorageService) {
    var todoService = {};

    // para que quede dentro del closure y nadie tenga acceso
    key = "angular-todolist";

    if (localStorageService.get(key)) {
        todoService.actividades = localStorageService.get(key);
    }
    else {
        todoService.actividades = [];
    }

    todoService.adicionarActividad = function (nuevaActividad) {
        todoService.actividades.push(nuevaActividad);
        todoService.actualizarLocalStorage();
        return todoService.consultarTodas();
    };

    todoService.limpiarActividades = function () {
        todoService.actividades = [];
        todoService.actualizarLocalStorage();
        return todoService.consultarTodas();
    };

    todoService.consultarTodas = function () {
        return todoService.actividades;
    };

    todoService.eliminarActividad = function (actividad) {
        todoService.actividades = todoService.actividades.filter(function (elemento) {
            return elemento !== actividad;
        });
        todoService.actualizarLocalStorage();
        return todoService.consultarTodas();
    };

    todoService.actualizarLocalStorage = function () {
        localStorageService.set(key, todoService.actividades);
    };

    return todoService;
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