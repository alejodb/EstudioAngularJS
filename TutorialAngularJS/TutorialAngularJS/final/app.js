angular.module("EjercicioFinal", ["lumx", "ngRoute", "ngResource"])
.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            controller: "MainController",
            templateUrl: "templates/home.html"
        })

});