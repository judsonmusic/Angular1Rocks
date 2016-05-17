angular.module('widgets').directive('widget1', function(){

    return {

        templateUrl: 'app/components/widgets/df-w-allergies/df-w-allergies.tpl.html',
        link: function ($scope, element, attrs) {

            console.log('Init widget 1');

        }
    }


});