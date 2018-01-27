const app = angular.module('tailoredhair_app', ['ngRoute', 'ngSanitize']);

app.controller('MainController', ['$http', '$scope', '$sce', '$location', function($http, $scope, $sce, $location) {

  $scope.specialty = {
        name: 'whatever'
      };

/////////////////////////
  //AUTH
  this.user = {};
  this.currentUser = [];
  this.users = [];
  this.loggedIn = false;
  // GET
  this.looks = [];
  this.userPass = {};
  this.currentPosts = [];

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
          user_id: userPass.id,
          s_status: userPass.stylist_status,
          c_status: userPass.client_status,
          looks: userPass.looks
        }
      },
    }).then(response => {
      this.user = response.data.user;
      console.log(this.user);
      this.currentUser.push(this.user);
      console.log(this.currentUser[0]);
      localStorage.setItem('token', JSON.stringify(response.data.token));
      this.loggedIn = true;
      if (this.user.client_status == true) {
        $location.path('/search/');
      } else if (this.user.stylist_status == true) {
        $location.path('/profile/' + this.user.username);
      }
    });
  }

  this.register = (regData) => {
   $http({
     method: 'POST',
     url: this.url + '/users',
     data: {
       user: {
         username: regData.username,
         password: regData.password,
         client_status: regData.client_status,
         stylist_status: regData.stylist_status
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
      this.users.push(response.data);
      console.log(this.users);
      // console.log(response);
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

  this.getLooks();


  this.getUser = (userlooks) => {
  $http({
    url: this.url + "/userlooks",
    method: "GET"
  }).then(response => {
    this.oneUser = response.data;
    for (i=0; i<this.oneUser.length; i++){
      if (this.oneUser[i].user.id === this.currentUser[0].id) {
        this.currentPosts.push(this.oneUser);
      }
    }
    // console.log('this.oneUser:', this.oneUser);
  }).catch(reject => {
    console.log('reject: ', reject);
  });
}

this.createLook = (look_id, user_id) => {
  console.log("look id: " + look_id + " user id: " + user_id);
  this.newUserlook = {
    user_id: user_id,
    look_id: look_id
  };
  $http({
    method: 'POST',
    url: this.url + "/userlooks",
    data: this.newUserlook
  }).then(response => {
    this.userlooks.push(response.data)
    this.getLooks();
  }).catch(error => {
    console.log('error:', error);
  });
}

this.processForm = () => {
  $http({
    method: 'POST',
    url: this.url + "/looks",
    data: this.formdata
  }).then(response => {
    this.lookpost = response.data;
    this.looks.unshift(this.lookpost);
    this.createLook(this.lookpost.id, this.user.id);
    this.formdata = {}
    console.log('this.post:', this.post);
  }).catch(error => {
    console.log('error:', error);
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
