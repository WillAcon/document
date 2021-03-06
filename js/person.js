var persons = angular.module('persons', ['ui.bootstrap']);

jQuery(document).ready(function() {
  /**
   * We are initialization the angular app by hand and not with the Automatic
   * Initialization.
   * The reason for this is that we are loading multiple angular apps on one
   * page and the Automatic Initialization can only handle 1 app per page.
   *
   * @link http://docs.angularjs.org/guide/bootstrap
   */
  angular.bootstrap(document.getElementById('persons-app'),['persons']);
});


persons.controller('personsController', function ($scope, $http) {
    
  $http.get('/json/personas').success(function (result) {
    $scope.persons = (function() {
      return result.nodes;
    })();
    $scope.tipo = 9;
    $scope.clear_type = (function(){
        //alert('Hola');
    });
      
  });
});


