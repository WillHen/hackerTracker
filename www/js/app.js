// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('app', [
  'ionic'
  // 'app.facebook',
  // 'app.home',
  // 'app.map',
  // 'app.maker',
  // 'app.services'
  // 'ngMap'
  ])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'js/home/home.html'
    });
    // .state('home', {
    //   templateUrl: 'js/facebook/facebook.html',
    //   controller: 'HomeController'
    // })
    // .state('facebook', {
    //   templateUrl: 'js/facebook/facebook.html',
    //   controller: 'FacebookController'
    // })
    // .state('map', {
    //   templateUrl: 'js/map/map.html',
    //   controller: 'MapController'
    // })
    // .state('mapMaker', {
    //   templateUrl: 'js/mapMaker/mapMaker.html',
    //   controller: 'MapMakerController'
    // })
    // .state('logout', {
    //   url: '/home'
    // });

      //$urlRouterProvider.otherwise('home');

})

// angular.module('app', [
  // 'app.facebook',
  // 'app.home',
  // 'app.map',
  // 'app.maker',
  // 'app.services',
  // 'ngRoute',
  // 'ngMap'
// ])
// .config(function ($routeProvider, $httpProvider) {

//   $routeProvider
//     .when('/', {
//       redirectTo: '/home'
//     })
//     .when('/home', {
//       templateUrl: 'app/home/home.html',
//       controller: 'HomeController'
//     })
//     .when('/facebook', {
//       templateUrl: 'app/facebook/facebook.html',
//       controller: 'FacebookController'
//     })
//     .when('/map', {
//       templateUrl: 'app/map/map.html',
//       controller: 'MapController'
//     })
//     .when('/mapMaker', {
//       templateUrl: 'app/mapMaker/mapMaker.html',
//       controller: 'MapMakerController'
//     })
//     .when('/logout', {
//       redirectTo: '/home'
//     })
//     .otherwise({
//       redirectTo: '/home'
//     });

// });

