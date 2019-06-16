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

  $scope.querydata = {};

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

//If confirmation window answer "Yes" --> db connection
  $scope.chickenConfirm = function(){
    $scope.thankyou = true;
    $scope.loadQueryData();
    $http({
      method: 'POST',
      url: '/orders',
      data: $scope.querydata
    })
  }

//If confirmation window answer "No" --> return to chickform for edit
 $scope.chickenWarn = function(){
  $scope.hideform = false;
}

///UPDATE QUERY DATA
$scope.loadQueryData = function(){
  $scope.querydata = {
    firstname : $scope.firstname,
    lastname: $scope.lastname,
    phonenumber: $scope.phonenumber,
    email: $scope.email,
    chickorderdate: $scope.chickorderdate,
    americauna: $scope.americauna,
    bufforpington: $scope.bufforpington,
    barredrock: $scope.barredrock,
    australorp: $scope.australorp,
    silverwyandotte: $scope.silverwyandotte,
    californiawhite: $scope.californiawhite,
    rhodeislandred: $scope.rhodeislandred,
    goldstar: $scope.goldstar
  };
}

// **********
// GET ORDER DATES
// **********

// $scope.getDates = function(){
//   $http({
//     method: 'GET',
//     url: '/dates',
//   }).then(
//     function(response){
//       $scope.dates = response.data;
//       console.log("Dates scope: ", $scope.dates);
//     }
//   );
// }

$scope.getDates = function(){
  $http({
    method: 'GET',
    url: '/dates',
  }).then(
    function(response){
      console.log("response data sendback: ", response.data);
      $scope.dates = {
        model: null,
        availableOptions: response.data
      };
      console.log("Dates scope: ", $scope.dates);
    });
}

$scope.getDates();


}]);
