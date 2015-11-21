angular.module('starter.facebook', ['ngOpenFB'])

.controller('FacebookController', ['$scope', '$openFB', 'ClientHelper', '$location', function ($scope, $openFB, ClientHelper, $location) {

  $scope.me = {};

  $scope.logout = function () {
    $openFB.logout();
  };

  $openFB.init( {appId: '1520991081546037'})

  $openFB.login({scope: 'email, user_friends'})

  .then(function (res) {
    $openFB.api({path: '/me'})
    .then(function (res) {
      console.log(res)
      angular.extend($scope.me, res);
    }, function( err ) {
      console.log(err);
    });

    $openFB.api({path: '/me/friends'})
    .then(function (res) {
      angular.extend($scope.me, res);
    }, function (err) {
      console.log(err);
    });

    $openFB.api({
      path: '/me/picture',
      params: {
          redirect: false,
          height: 50,
          width: 50
      }
    }).then(function( res ) {
      angular.extend($scope.me, {picture: res.data.url});
      ClientHelper.getFBdata($scope.me);
      console.log($scope.me).picture;
    }).then(function() {
      $location.path('/facebook'); // '/map'
    });
  })
}

]);
