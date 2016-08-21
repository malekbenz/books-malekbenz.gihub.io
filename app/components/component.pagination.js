(function () {
    "use strict"
    function controller() {
        this.getpages = function(current, total){
            var array =[];
            var  last = 10 + Math.floor(current/10) *10;
                 last = last < total ? last : total ; 
                var start = (last - 10)< 1 ? 1: (last - 10) ;

                // var start =   Math.floor(current/10) *10   ;
                //  start =   start > 0 ? start  : 1   ;

                for (var index = start; index <= last; index++) {
                    array.push(index);
                    
                }
                return array;
        };
        
    };

    angular.module("pizzaApp")
        .component("component.pagination", {
            restrict: 'E',
            templateUrl: "views/component.pagination.html",
            controller: controller,
            controllerAs: "vm",
            bindings: {
                total: "<",
                current: "<",
                term: "<"
            }

        });

} ());