/**
 * Created by mpereira on 7/30/2014.
 */
var module1Services = angular.module('module1Services', ['ngResource']);

module1Services.factory('businessSrv', function() {
    var newMoneyOffer = function(){
        return {
            fromCurrency: 'USD',
            toCurrency: 'CUC',
            percentage: 5,
            special:false,
            minimum:0,
            maximum:0
        }
    };

    var newBusiness = function(){
        return {
            id:0,
            location:null,
            name:null,
            phone:null,
            url:null,
            moneyOffers:[],
            goodsOffers:[],
            callsOffers:[]
        };
    };

    return {
        business: newBusiness(),
        newBusiness:newBusiness,

        moneyOffer:newMoneyOffer(),
        newMoneyOffer: newMoneyOffer,
        index:-1,

        editMoneyOffer:function(index){
            angular.copy(this.business.moneyOffers[index],this.moneyOffer);
            this.index = index;
        },
        cancelEdit: function(){
            this.index = -1;
            this.moneyOffer = newMoneyOffer();
        },
        saveMoneyOffer:function(){
            if(this.index == -1){
                this.business.moneyOffers.push(this.moneyOffer);
                this.moneyOffer=newMoneyOffer();
            }else {
                this.business.moneyOffers[this.index] = this.moneyOffer;
                this.moneyOffer = newMoneyOffer();
                this.index = -1;
            }
        }
    };
});

