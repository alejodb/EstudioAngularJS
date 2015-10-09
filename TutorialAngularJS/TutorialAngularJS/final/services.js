angular.module("EjercicioFinal")
.factory("servicioEstudiantes", function ($resource) {
    return $resource("/api/Estudiantes/:id", { id: "@id" }, {
        update: {
            method: "PUT"
        }
    });
});