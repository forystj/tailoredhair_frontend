const app = angular.module('tailoredhair_app', ['ngRoute', 'ngSanitize']);


// const truefalse = () => {
//   console.log(true);
//   document.getElementsByClassName("s_status")[0].style.color = "rgba(255,255,255,.5)"
// }

app.controller('MainController', ['$http', '$scope', '$sce', '$location', function($http, $scope, $sce, $location) {

/////////////////////////
  //AUTH
  this.user = {};
  this.users = [];
  this.loggedIn = false;
  // GET
  this.looks = [];
  this.userPass = {};

/////////////////////////

this.url = 'http://localhost:3000';


  // LOGIN

  this.login = (userPass) => {
    $http({
      method: 'POST',
      url: this.url + '/users/login',
      data: {
        user: {
          username: userPass.username,
          password: userPass.password,
          user_id: userPass.id
        }
      },
    }).then(response => {
      this.user = response.data.user;
      localStorage.setItem('token', JSON.stringify(response.data.token));
      this.loggedIn = true;
      console.log('this.user:', this.user.id);
      $location.path('/profile/' + this.user.username);
    });
  }

  this.register = (regData) => {
   $http({
     method: 'POST',
     url: this.url + '/users',
     data: {
       user: {
         username: regData.username,
         password: regData.password
     }}
   }).then(response => {
     this.user = response.data;
     this.loggedIn = true;
     localStorage.setItem('token', JSON.stringify(response.data.token));
     console.log('this.user:', this.user);
   });
 }

  this.getUsers = () => {
    $http({
      url: this.url + '/users',
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token'))
      }
    }).then(response => {
      console.log(response);
      if (response.data.status == 401) {
        this.error = "Unauthorized";
      } else {
        this.users = response.data;
      }
    });
  }

  // this.getUsers();


  this.logout = () => {
    localStorage.clear('token');
    location.reload();
    this.loggedIn = false;
    this.user = {};
  }

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

  // this.getLooks();


  this.getUser = (user) => {
  $http({
    url: this.url + "/users/" + this.user.id,
    method: "GET"
  }).then(response => {
    this.oneUser = response.data;
    this.oneUser_id = id;
    console.log('this.oneUser:', this.oneUser);
  }).catch(reject => {
    console.log('reject: ', reject);
  });
}

}]);


  app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $routeProvider.when("/", {
      templateUrl: "../partials/home.html"
    })

    $routeProvider.when("/profile/:username", {
      templateUrl: "../partials/profile.html"
    })

    $routeProvider.when("/search", {
      templateUrl: "../partials/search.html"
    })

  }]);
