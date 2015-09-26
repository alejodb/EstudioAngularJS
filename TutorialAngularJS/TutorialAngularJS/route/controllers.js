angular.module("CustomDirective")
.controller("RepositoriosController", function ($scope, $http) {
    $scope.listaAutocompletar = [];
    $scope.repositorios = [];

    $http.get("https://api.github.com/users/twitter/repos")
    .success(function (data) {
        $scope.repositorios = data;

        for (var i = data.length - 1; i >= 0; i--) {
            var repositorio = data[i];
            $scope.listaAutocompletar.push(repositorio.name);
        };
    })
    .error(function (err) {
        console.log(err);
    });

    $scope.optionSelected = function (data) {
        $scope.$apply(function () {
            $scope.repositorioSeleccionado = data;
        })
    }
})
.controller("RepositorioController", function ($scope, $http, $routeParams) {
    $scope.repositorio = {};

    $http.get("https://api.github.com/repos/twitter/"+$routeParams.name)
    .success(function (data) {
        $scope.repositorio = data;
    })
    .error(function (err) {
        console.log(err);
    });
})