'use strict';

angular.module('Game_of_life')
.controller('game_of_life', function ($scope) {

  $scope.controller_loaded = 'Game of life loaded!';

 
})
.config(function ($routeProvider) {
  $routeProvider
  .when('/game_of_life', {
    templateUrl: 'scripts/game_of_life/views/game_of_life.html',
    controller: 'game_of_life'
  });
});
