﻿angular.module("EjercicioFinal", ["lumx", "ngRoute"])
.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            controller: "MainController",
            templateUrl: "templates/home.html"
        })

});