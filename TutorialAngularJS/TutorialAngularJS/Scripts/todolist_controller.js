angular.module("TodoListApp", ["LocalStorageModule"])
.controller("TodoListController", function ($scope, localStorageService) {

    if (localStorageService.get("angular-todolist")) {
        $scope.todo = localStorageService.get("angular-todolist");
    }
    else {
        $scope.todo = [];
    }
    /*
        {
            descripcion: 'Terminar el curso Angular',
            fecha: '2015-03-03 2:00pm'
        }
    */
    $scope.nuevaActividad = {};

    // Vigilar un elemento
    $scope.$watch(
        function () {
            return $scope.nuevaActividad;
        },
        function (newValue, oldValue) {
            console.log(oldValue);
            console.log(newValue);
        }
    );

    // Vigilar la coleccion para actualizar el localstorage y no tener que invocarlo en todo lado
    $scope.$watchCollection("todo", function (newValue, oldValue) {
        console.log("Actualizando coleccion");
        localStorageService.set("angular-todolist", $scope.todo);
    });

    $scope.adicionarActividad = function () {
        $scope.todo.push($scope.nuevaActividad);
        $scope.nuevaActividad = {};
        // esto ya no hay que hacerlo por el watch
        //localStorageService.set("angular-todolist", $scope.todo);
    }

    $scope.limpiarActividades = function () {
        $scope.todo = [];
        // esto ya no hay que hacerlo por el watch
        //localStorageService.set("angular-todolist", $scope.todo);

    }
});