//most basic implementation to instantiate.

var something = {};
something.loadWidget = function(){

    var newDiv = document.createElement("testd");
    //var newContent = document.createTextNode("Hi there and greetings!");
    //newDiv.appendChild(newContent); //add the text node to the newly created div.

    // add the newly created element and its content into the DOM
    document.body.appendChild(newDiv);

}
angular.module('widgets', []).directive('testd', ['testf', function(testf){


    return {

        template: '<div class="df-widget"><div class="heading">Hello widget!</div><div class="content"><button ng-click="doSomething($event)">Click me!</button><div ng-if="!data">Loading data. Please wait...</div><ul><li ng-repeat="item in data">{{item}}</li></ul></div></div>',
        link: function(scope, el, attr){
            scope.data = [{"test": 123}, {"test": 456}]
            scope.doSomething = function(e){

                console.log(e);
            }
            //testf.getData().then(function(r){ console.log('data received!', r.data); scope.data = r.data});

        }

    }


}]).directive('dfWidgets', ['testf', '$compile', function(testf, $compile){

    return {
        template: '<button ng-click="add()">Add Widget!</button><div style="clear: both">',
        controller: function ( $scope, $element ) {
            $scope.add = function () {
                var el = $compile( "<testd></testd>" )( $scope );
                $element.parent().append( el );
            };
        },
        link: function(scope, el, attrs) {

            console.log('Widgets Loaded!');

        }
    };

}]).factory('testf', function($http){


    var testf = {}
    var _data = {}

    testf.getData = function(){

        var url = "http://jsonplaceholder.typicode.com";

        return $http.get(url + '/posts');

    }
    return testf;


})

