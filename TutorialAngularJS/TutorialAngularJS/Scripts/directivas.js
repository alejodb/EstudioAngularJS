angular.module("CustomDirective", [])
.directive("myAutocomplete", function () {
    function link(scope, element, attrs) {
        $(element).autocomplete({
            source: scope[attrs.myAutocomplete],
            select: function (ev, ui) {
                ev.preventDefault();
                if (ui.item) {
                    scope.optionSelected(ui.item.value);
                }
            },
            focus: function (ev, ui) {
                ev.preventDefault();
                $(this).val(ui.item.label);
            }
        });
    };
    return {
        link: link
    };
})
.directive('backImg', function () {
    return function(scope, element, attrs) {
        attrs.$observe('backImg', function(value) { // esto porque el valor a observar esta en {{}} de angular
            element.css({
                "background": "url("+value+")",
                "background-position" : "center",
                "background-size" : "cover"
            });
        });
    }
})
.controller("AppCtrl", function ($scope, $http) {
    $scope.listaAutocompletar = [];
    $scope.repositorios = [];

    $http.get("https://api.github.com/users/alejodb/repos")
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
        $scope.$apply(function() {
            $scope.repositorioSeleccionado = data;
        })
    }
});