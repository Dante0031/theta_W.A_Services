var app = angular.module("userApp", []);

app.controller('MainController', ['$scope', 'GitApi', function($scope, GitApi){
    GitApi.grabInfo();
    $scope.buildObject = GitApi.data;

}]);


app.factory("GitApi", ["$http", function($http) {

    var data = {};

    var grabInfo = function (){
        $http.jsonp('https://api.github.com/users/Dante0031/events?callback=JSON_CALLBACK').then(function (response) {
            data.data = response.data.data;
            console.log(response);
        });
    };
    return {
        data: data,
        grabInfo: grabInfo
    };
}]);
