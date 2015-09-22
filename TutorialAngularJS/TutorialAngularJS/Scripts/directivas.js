angular.module("CustomDirective", [])
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
    $http.get("https://api.github.com/users/alejodb/repos")
    .success(function (data) {
        $scope.repos = data;
    })
    .error(function (err) {
        console.log(err);
    });
});