const app = angular.module('tailoredhair_app', ['ngRoute', 'ngSanitize']);

app.controller('MainController', ['$http', '$scope', '$sce', function($http, $scope, $sce) {

  this.looks = [];

  this.url = 'http://localhost:3000';

  this.getLooks = () => {
    $http({
        method:'GET',
        url: this.url + '/looks'
    }).then( response => {
        console.log( response.data );
        this.looks = response.data;
    }, error => {
        console.error( error.message );
    }).catch( err => console.error('Catch: ' , err ));
  };

  this.getLooks();

}]);


  app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $routeProvider.when("/", {
      templateUrl: "../partials/home.html"
    })

    $routeProvider.when("/profile", {
      templateUrl: "./partials/profile.html"
    })
  }]);
