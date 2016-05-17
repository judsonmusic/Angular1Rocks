(function() {// Create a new module

    "use strict";

    angular.module('app', [

        'ngRoute',
        'widgets'

    ]).config(
        ['$routeProvider', '$locationProvider', '$httpProvider',


            function ($routeProvider, $locationProvider, $httpProvider) {

                //$httpProvider.interceptors.push('httpRequestInterceptor');


                $routeProvider.

                when('/', {
                    templateUrl: './app/views/home.html'
                    ,title: "Home"
                    ,controller: 'homeCTRL'
                }).

                otherwise({
                    redirectTo: '/'
                });

                // use the HTML5 History API
                $locationProvider.html5Mode(true);

            }])

})();