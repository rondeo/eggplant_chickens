mainApp.controller('AdminController', ['$scope', '$http', function($scope, $http){

  $scope.dates;
  $scope.createDateData;



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
      }
    );
  }

  // *********
  // CREATE ORDER DATE
  // *********
  $scope.createOrderDate = function(){
    console.log("The data being sent up: ", $scope.createDateData);
    $http({
      method: 'POST',
      url: '/dates',
      data: {date: $scope.createDateData}
    }).then(
      function(response){
        console.log("The response: ", response);
      }
    )
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
