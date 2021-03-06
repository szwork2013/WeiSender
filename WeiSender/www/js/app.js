// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('WeiSender', ['ionic','LoginModule','RegistModule','FindPassModule','HomePageModule','SerchExpressModule','UserInfoModule','MyParcelModule','MyOrderModule','InsteadModule'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
 .state('login', {
    url: '/login',
    cache:'false',
    templateUrl: 'templates/login.html',
    controller:'LoginCtrl'
  })
  // setup an abstract state for the tabs directive
   .state('home', {
    url: '/home',
    cache:'false',
    templateUrl: 'templates/homePage.html',
    controller:'HomePageCtrl'
  })
    .state('userInfo', {
    url: '/userInfo',
    cache:'false',
    templateUrl: 'templates/userInfo.html',
    controller:'UserInfoCtrl'
  })
     .state('myParcel', {
    url: '/myParcel',
    cache:'false',
    templateUrl: 'templates/myParcel.html',
    controller:'MyParcelCtrl'
  })
     .state('myOrder', {
    url: '/myOrder',
    cache:'false',
    templateUrl: 'templates/myOrder.html',
    controller:'MyOrderCtrl'
  })
     .state('instead', {
    url: '/instead',
    cache:'false',
    templateUrl: 'templates/instead.html',
    controller:'InsteadCtrl'
  })

  // Each tab has its own nav history stack:
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
