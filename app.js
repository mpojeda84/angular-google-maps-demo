/**
 * Created by mpereira on 7/30/2014.
 */

var app = angular.module('app', [
    'ngAnimate',
    'ui.router',
    'ui.bootstrap',
    'pascalprecht.translate',
    'ngSanitize',
    'google-maps',
    'appControllers',
    'appDirectives',
    //logical modules:
    'module1' //,
    //reusable components:
    //'component1'
]);

app.config(['$httpProvider', '$stateProvider', '$urlRouterProvider', '$translateProvider', '$injector', function ($httpProvider, $stateProvider, $urlRouterProvider, $translateProvider, $injector) {

    //mpereira: Activate CORS
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $stateProvider
        .state('state1', {
            url: '/module1',
            templateUrl: 'module1/module1.html'
        })
        .state('state2', {
            url: '/module1',
            templateUrl: 'module2/module2.html'
        })
        .state('error', {
            url: '/error',
            templateUrl: 'error.html'
        })
    ;
    $urlRouterProvider.when('', '/module1').when('/', '/module1');

    $translateProvider.useStaticFilesLoader({
        prefix: 'common/translation/locale-',
        suffix: '.json'
    });
    $translateProvider.preferredLanguage('en_US');

}])

.run(['$rootScope', '$http', '$location', '$state', function ($rootScope, $http, $location, $state) {
        // mpereira: put init code here, like security interceptors etc
}]);

