/**
 * Created by mpereira on 7/30/2014.
 */
var module1Services = angular.module('module1Services', ['ngResource']);

module1Services.factory('markersSrv', function() {
    return {
        markers: [],
        addMarker: function(marker){
            this.markers.push(marker);
        },
        deleteMarker: function(marker){
            var index = this.markers.indexOf(marker);
            this.markers.splice(index,1);
        }
    };
});


