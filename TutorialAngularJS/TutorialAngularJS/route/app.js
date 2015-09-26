angular.module("CustomDirective", ["ngRoute"])
.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            controller: "RepositoriosController",
            templateUrl: "templates/home.html"
        })
        .when("/repositorio/:name", {
            controller: "RepositorioController",
            templateUrl: "templates/repositorio.html"
        })
        .otherwise("/");
});