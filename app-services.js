/**
 * Created by mpereira on 7/30/2014.
 */
var appServices = angular.module('appServices', ['ngCookies']);

appServices.factory('appSrv', ['$http', '$rootScope', '$cookies' , function($http, $rootScope, $cookies) {
    return {
        service1: function(){
            return  "This is the Service 1";
        }
    };
}]);
