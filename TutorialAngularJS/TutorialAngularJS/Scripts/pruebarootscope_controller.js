angular.module("ModuloProbarRootScope", [])
    .run(function ($rootScope) {
        $rootScope.nombre = "Alejo";
    })
    // esta es una manera
    //.controller("RootScopeController", function ($scope, $rootScope) {
    .controller("RootScopeController", function ($scope) {
        $scope.nombre = "Nini"
    })
    .controller("ChildController", function($scope) {
    });