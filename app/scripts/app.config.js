
angular.module('jsJwtApp')
  .config(function($locationProvider, $urlRouterProvider, $stateProvider, $httpProvider) {

    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('/');

    var mainState = {
      name: 'main',
      url: '/',
      templateUrl: '/views/main.html'
    };

    var registerState = {
      name: 'register',
      url: '/register',
      templateUrl: '/views/register.html',
      controller: 'RegisterCtrl'
    };

    var jobsState = {
      name: 'jobs',
      url: '/jobs',
      templateUrl: '/views/jobs.html',
      controller: 'JobsCtrl'
    };

    var loginState = {
      name: 'login',
      url: '/login',
      templateUrl: '/views/login.html',
      controller: 'LoginCtrl'
    };

    var logoutState = {
      name: 'logout',
      url: '/logout',
      controller: 'LogoutCtrl'
    };

    $stateProvider.state(registerState);
    $stateProvider.state(mainState);
    $stateProvider.state(jobsState);
    $stateProvider.state(loginState);
    $stateProvider.state(logoutState);


    // $authProvider.loginUrl = API_URL + 'auth/login';
    // $authProvider.signupUrl = API_URL + 'auth/register';
    //
    // $authProvider.google({
    //   clientId: '755194447289-i6qu5n18jnh4lhph17j19cq08i0fq6f4.apps.googleusercontent.com',
    //   url: API_URL + 'auth/google'
    // })
    //
    // $authProvider.facebook({
    //   clientId: '698580886903269',
    //   url: API_URL + 'auth/facebook'
    // })
    //
    // $httpProvider.interceptors.push('authInterceptor');

  });
