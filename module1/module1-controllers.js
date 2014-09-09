/**
 * Created by mpereira on 7/30/2014.
 */
var module1Controllers = angular.module('module1Controllers',['module1Services','ngAutocomplete']);
module1Controllers
    .controller('module1Ctrl', ['$rootScope', '$scope','$http', '$log','$modal', '$state', 'mapSrv',
        function($rootScope, $scope,  $http, $log, $modal, $state, mapSrv) {

            $scope.result = '';
            $scope.options = null;
            $scope.details = '';

            $scope.validPlace = false;

            $scope.map = {
                center: {
                    latitude: 26.8,
                    longitude: -80.6
                },
                zoom: 7
            };

            $scope.markers = mapSrv.markers;

            $scope.addMarker = function(){
                $scope.details.coords = {latitude:$scope.details.geometry.location.k,longitude:$scope.details.geometry.location.B};
                //$scope.details.icon = 'images/blue-icon.png'
                mapSrv.addMarker($scope.details);
                $scope.map.zoom = 10;
            };

            $scope.fromCurrency = 'USD';
            $scope.toCurrency = 'CUC';
            $scope.percentage = '5%';

            $scope.$watch('details',function(newValue){
                if(newValue.geometry && newValue.geometry.location){
                    var k = newValue.geometry.location.k;
                    var B = newValue.geometry.location.B;
                    $scope.map.center.latitude = k;
                    $scope.map.center.longitude = B;
                    $scope.validPlace = true;

                }else
                {
                    $scope.validPlace = false;
                }
            });

            $scope.addMoney = function(){

            };

        }]);