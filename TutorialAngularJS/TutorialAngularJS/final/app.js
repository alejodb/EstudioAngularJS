angular.module("EjercicioFinal", ["lumx", "ngRoute", "ngResource"])
.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            controller: "MainController",
            templateUrl: "templates/home.html"
        })
        .when("/estudiantes/consulta/:id", {
            controller: "EstudianteController",
            templateUrl: "templates/estudiante.html"
        })
        .when("/estudiantes/nuevo", {
            controller: "NuevoEstudianteController",
            templateUrl: "templates/estudiante_form.html"
        })
        .when("/estudiantes/edicion/:id", {
            controller: "EstudianteController",
            templateUrl: "templates/estudiante_form.html"
        })
});