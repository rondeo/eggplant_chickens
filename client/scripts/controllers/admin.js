mainApp.controller('AdminController', ['$scope', '$http', function($scope, $http){
  console.log("AdminController firing!");

  $scope.dates;



  // **********
  // GET ORDER DATES
  // **********

  $scope.getDates = function(){
    $http({
      method: 'GET',
      url: '/dates',
    }).then(
      function(response){
        $scope.dates = response.data;
        console.log("Dates scope: ", $scope.dates);
        $scope.transformDate();
      }
    );
  }

  // **********
  // TRANSFORM DATE DATA
  // **********
  $scope.transformDate = function(){

  }


  // ***********
  // GET ORDERS FOR DATE
  // ***********

  $scope.getOrders = function(){
    $http({
      method: 'GET',
      url: '/orders',
      data: $scope.getOrderData
    })
  }

  // **********
  // EDIT ORDER
  // **********

  $scope.editOrder = function(){
    $http({
      method: 'GET',
      url: '/orders',
      data: $scope.editOrderData
    })
  }

  // **********
  // DELETE ORDER
  // **********

  $scope.deleteOrder = function(){
    $http({
      method: 'DELETE',
      url: '/orders',
      data: $scope.deleteOrderData
    })
  }

  // *********
  // CREATE ORDER DATE
  // *********

  $scope.createOrderDate = function(){
    $http({
      method: 'POST',
      url: '/orders',
      data: $scope.createOrderData
    })
  }

  // *********
  // DELETE ORDER DATE
  // *********

  $scope.deleteOrderDate = function(){
    $http({
      method: 'DELETE',
      url: '/dates',
      data: $scope.deleteOrderData
    })
  }

  // *********
  // ACTIVATE ORDER DATE
  // *********

  $scope.activateOrderDate = function(){
    $http({
      method: 'GET',
      url: '/activate',
      data: $scope.activateOrderDateData
    })
  }

  // *********
  // DEACTIVATE ORDER DATE
  // *********

  $scope.deactivateOrderDate = function(){
    $http({
      method: 'POST',
      url: '/activate',
      data: $scope.deactivateOrderDateData
    })
  }

  $scope.getDates();

}]);
