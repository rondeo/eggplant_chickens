mainApp.controller('ChickFormController', ['$scope', '$http', function($scope, $http){

//setting baseline 0 value for chick inventory to maintain form control function
  $scope.americauna = 0;
  $scope.bufforpington = 0;
  $scope.barredrock = 0;
  $scope.australorp = 0;
  $scope.silverwyandotte = 0;
  $scope.californiawhite = 0;
  $scope.rhodeislandred = 0;
  $scope.goldstar = 0;

  $scope.chickdate = ['10/15/2016', '10/31/2016'];
  $scope.hideform = false;

//function to sum the chicken inventory to a single variable for use on form
  $scope.chickenSum = function() {
    return $scope.americauna + $scope.bufforpington + $scope.barredrock +
    $scope.australorp + $scope.silverwyandotte + $scope.californiawhite +
    $scope.rhodeislandred + $scope.goldstar;

  }

//Submit button on form to go to confirmation window
  $scope.submitChicken = function() {
    $scope.hideform = true;
  }

//If confirmation window answer "Yes"
  $scope.chickenConfirm = function(){
    $scope.thankyou = true;
    console.log($scope.chickdate);
  }

//If confirmation window answer "No"
 $scope.chickenWarn = function(){
  $scope.hideform = false;
}


}]);
