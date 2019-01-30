angular.module('starter.controllers').controller('AreasCtrl', AreasController)

function AreasController($scope, $rootScope, $location, AreasService){
    $rootScope.uniq = function(a, param) {
        return a.filter(function (item, pos, array) {
          return array.map(function (mapItem) {
            return mapItem[param];
          }).indexOf(item[param]) === pos;
        })
      }
    
      if(!$rootScope.user) $location.path('/app/welcome')
      AreasService.getByPlace($rootScope.placeid, $rootScope.user.token, function(re){
          console.log(re)
        $scope.areas = re.areas
      });

      $scope.goToDevices=function(areaid){
        $rootScope.areaid=areaid;
        $location.path('/app/devices')
      }
}


