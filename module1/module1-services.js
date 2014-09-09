/**
 * Created by mpereira on 7/30/2014.
 */
var module1Services = angular.module('module1Services', ['ngResource']);

module1Services.factory('officeSrv', function() {
    return {
        office:this.newOffice(),

        sendMoneyOffer:null,
        sendGoodsOffer:null,
        callsOffer:null,
        index:-1,
        newOffice:function(){
            return {
                id:0,
                sendMoneyOffers:[],
                sendGoodsOffers:[],
                callsOffers:[]
            };
        },
        editMoneyOffer:function(index){
            angular.copy(this.office.sendMoneyOffers[index],this.sendMoneyOffer);
            this.index = index;
        },
        editGoodsOffer:function(index){
            angular.copy(this.office.sendGoodsOffers[index],this.sendGoodsOffer);
            this.index = index;
        },
        editCallsOffer:function(index){
            angular.copy(this.office.callsOffer[index],this.callsOffer);
            this.index = index;
        },
        cancelEdit:function(){
            this.index = -1;
        },
        saveMoneyOffer:function(index){
            this.office.sendMoneyOffers[index] = this.sendMoneyOffer;
            this.sendMoneyOffer = null;
            this.index = -1;
        },
        saveGoodsOffer:function(index){
            this.office.sendGoodsOffers[index] = this.sendGoodsOffer;
            this.sendGoodsOffer = null;
            this.index = -1;
        },
        saveCallsOffer:function(index){
            this.office.callsOffer[index] = this.callsOffer;
            this.callsOffer = null;
            this.index = -1;
        }
    };
});

