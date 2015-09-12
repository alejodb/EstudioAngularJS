var app = angular.module("MiPrimeraApp", []);
app.controller("FirstController", ["$scope", "$http", function (miScope, miHttp) {
    miScope.nuevoComentario = {};

    miScope.nombre = "Alejo";
    
    miScope.comentarios = [
        {
            comentario: "Buen tutorial",
            nombre: "Pedrito"
        },
        {
            comentario: "Chevere",
            nombre: "Pablito"
        }
    ];

    miScope.agregarComentario = function () {
        miScope.comentarios.push(miScope.nuevoComentario);
        miScope.nuevoComentario = {};
    }

    miScope.estudiantes = [];
    miScope.nuevoEstudiante = {};

    miScope.obtenerEstudiantes = function () {
        miHttp.get("/api/Estudiantes")
            .success(function (data) {
                console.log(data);
                miScope.estudiantes = data;
            })
            .error(function (err) {
                console.log(err);
            });
    }

    miScope.agregarEstudiante = function () {
        // Tambien puede ser
        //miHttp.post("/api/Estudiantes", {nombres: miScope.nuevoEstudiante.nombres, apellidos: miScope.nuevoEstudiante.apellidos, fechaVinculacion: miScope.nuevoEstudiante.fechaVinculacion } )
        miHttp.post("/api/Estudiantes", miScope.nuevoEstudiante)
            .success(function (data, status, headers, config) {
                console.log(data);
                console.log(status);
                console.log(headers);
                console.log(config);

                miScope.estudiantes.push(data);
                // Tambien puede ser esta opción
                //miScope.estudiantes.push(data);

                miScope.nuevoEstudiante = {};
            })
            .error(function (err, status, headers, config) {
                console.log(err);
                console.log(status);
                console.log(headers);
                console.log(config);
            });
    }

    miScope.obtenerEstudiantes();
}]);